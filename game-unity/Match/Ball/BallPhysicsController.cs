using UnityEngine;

namespace KairatProFootball.Match.Ball
{
    [RequireComponent(typeof(Rigidbody))]
    public sealed class BallPhysicsController : MonoBehaviour
    {
        [Header("Forces")]
        [SerializeField] private float groundDrag = 0.92f;
        [SerializeField] private float airDrag = 0.995f;
        [SerializeField] private float curveStrength = 0.035f;
        [SerializeField] private float maxAngularVelocity = 80f;

        [Header("Contacts")]
        [SerializeField] private LayerMask pitchMask;
        [SerializeField] private float groundCheckDistance = 0.16f;

        private Rigidbody body;

        public Rigidbody Body => body;
        public bool IsGrounded { get; private set; }

        private void Awake()
        {
            body = GetComponent<Rigidbody>();
            body.maxAngularVelocity = maxAngularVelocity;
            body.interpolation = RigidbodyInterpolation.Interpolate;
            body.collisionDetectionMode = CollisionDetectionMode.ContinuousDynamic;
        }

        private void FixedUpdate()
        {
            IsGrounded = Physics.Raycast(transform.position, Vector3.down, groundCheckDistance, pitchMask);

            body.velocity *= IsGrounded ? groundDrag : airDrag;

            if (!IsGrounded)
            {
                Vector3 curve = Vector3.Cross(body.angularVelocity, body.velocity) * curveStrength;
                body.AddForce(curve, ForceMode.Acceleration);
            }
        }

        public void Kick(Vector3 direction, float power, Vector3 spinAxis, float spinPower)
        {
            Vector3 normalizedDirection = direction.sqrMagnitude > 0.001f ? direction.normalized : transform.forward;
            body.velocity = Vector3.zero;
            body.angularVelocity = Vector3.zero;
            body.AddForce(normalizedDirection * power, ForceMode.VelocityChange);
            body.AddTorque(spinAxis.normalized * spinPower, ForceMode.VelocityChange);
        }

        public Vector3 PredictPosition(float seconds)
        {
            Vector3 velocity = body.velocity;
            Vector3 position = transform.position;
            const float step = 0.05f;

            for (float t = 0f; t < seconds; t += step)
            {
                velocity += Physics.gravity * step;
                velocity *= airDrag;
                position += velocity * step;
            }

            return position;
        }
    }
}

