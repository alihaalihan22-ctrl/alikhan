using KairatProFootball.Match.Ball;
using UnityEngine;

namespace KairatProFootball.Match.Player
{
    public sealed class PlayerBallInteraction : MonoBehaviour
    {
        [SerializeField] private PlayerMotor motor;
        [SerializeField] private Transform footPoint;
        [SerializeField] private float controlRadius = 1.25f;
        [SerializeField] private float dribbleTouchPower = 1.7f;
        [SerializeField] private float passPower = 13f;
        [SerializeField] private float shotPower = 24f;
        [SerializeField] private float chipLift = 0.35f;

        private BallPhysicsController nearbyBall;

        public bool HasPlayableBall => nearbyBall != null;

        private void Reset()
        {
            motor = GetComponent<PlayerMotor>();
        }

        private void OnTriggerStay(Collider other)
        {
            if (other.TryGetComponent(out BallPhysicsController ball))
            {
                nearbyBall = ball;
            }
        }

        private void OnTriggerExit(Collider other)
        {
            if (nearbyBall != null && other.gameObject == nearbyBall.gameObject)
            {
                nearbyBall = null;
            }
        }

        public void Dribble(Vector3 desiredDirection)
        {
            if (!CanTouchBall()) return;

            float control = Mathf.Lerp(0.75f, 1.15f, motor.Attributes.dribbling / 99f);
            Vector3 direction = Vector3.ProjectOnPlane(desiredDirection, Vector3.up).normalized;
            nearbyBall.Kick(direction, dribbleTouchPower * control, Vector3.right, 2f);
        }

        public void Pass(Vector3 targetDirection)
        {
            if (!CanTouchBall()) return;

            float passQuality = Mathf.Lerp(0.82f, 1.15f, motor.Attributes.shortPassing / 99f);
            Vector3 direction = Vector3.ProjectOnPlane(targetDirection, Vector3.up).normalized;
            nearbyBall.Kick(direction, passPower * passQuality, Vector3.up, 4f);
        }

        public void Shoot(Vector3 targetDirection, float charge01, bool finesse)
        {
            if (!CanTouchBall()) return;

            float finishing = Mathf.Lerp(0.85f, 1.18f, motor.Attributes.finishing / 99f);
            float power = Mathf.Lerp(shotPower * 0.45f, shotPower, Mathf.Clamp01(charge01));
            Vector3 direction = targetDirection.normalized;
            direction.y += chipLift * Mathf.Clamp01(charge01);

            Vector3 spinAxis = finesse ? Vector3.up : Vector3.right;
            float spin = finesse ? 18f : 8f;
            nearbyBall.Kick(direction, power * finishing, spinAxis, spin);
        }

        private bool CanTouchBall()
        {
            if (nearbyBall == null) return false;
            return Vector3.Distance(footPoint.position, nearbyBall.transform.position) <= controlRadius;
        }
    }
}

