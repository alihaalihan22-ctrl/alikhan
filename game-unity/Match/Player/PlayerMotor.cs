using UnityEngine;

namespace KairatProFootball.Match.Player
{
    [RequireComponent(typeof(CharacterController))]
    public sealed class PlayerMotor : MonoBehaviour
    {
        [SerializeField] private PlayerAttributes attributes = new();
        [SerializeField] private float jogSpeed = 4.8f;
        [SerializeField] private float sprintSpeed = 7.6f;
        [SerializeField] private float rotationSpeed = 14f;
        [SerializeField] private float staminaDrainPerSecond = 11f;
        [SerializeField] private float staminaRecoverPerSecond = 7f;

        private CharacterController controller;
        private Vector3 currentVelocity;

        public float Stamina01 { get; private set; } = 1f;
        public Vector3 Velocity => currentVelocity;
        public PlayerAttributes Attributes => attributes;

        private void Awake()
        {
            controller = GetComponent<CharacterController>();
        }

        public void Move(Vector2 input, Vector3 cameraForward, bool sprint)
        {
            Vector3 forward = Vector3.ProjectOnPlane(cameraForward, Vector3.up).normalized;
            Vector3 right = Vector3.Cross(Vector3.up, forward);
            Vector3 desired = forward * input.y + right * input.x;
            desired = Vector3.ClampMagnitude(desired, 1f);

            bool canSprint = sprint && Stamina01 > 0.08f && desired.sqrMagnitude > 0.1f;
            float targetSpeed = canSprint ? sprintSpeed : jogSpeed;
            targetSpeed *= attributes.PaceMultiplier;

            float acceleration = 18f * attributes.AccelerationMultiplier;
            Vector3 targetVelocity = desired * targetSpeed;
            currentVelocity = Vector3.MoveTowards(currentVelocity, targetVelocity, acceleration * Time.deltaTime);

            if (desired.sqrMagnitude > 0.01f)
            {
                Quaternion targetRotation = Quaternion.LookRotation(desired);
                transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
            }

            if (canSprint)
            {
                Stamina01 -= staminaDrainPerSecond / 100f / attributes.StaminaMultiplier * Time.deltaTime;
            }
            else
            {
                Stamina01 += staminaRecoverPerSecond / 100f * Time.deltaTime;
            }

            Stamina01 = Mathf.Clamp01(Stamina01);
            controller.SimpleMove(currentVelocity);
        }
    }
}

