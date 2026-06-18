using UnityEngine;

namespace KairatProFootball.Multiplayer
{
    public sealed class NetworkMatchSession : MonoBehaviour
    {
        [SerializeField] private float snapshotRate = 20f;
        private float snapshotTimer;

        public bool IsServerAuthoritative { get; private set; } = true;

        private void Update()
        {
            snapshotTimer += Time.deltaTime;
            if (snapshotTimer < 1f / snapshotRate) return;

            snapshotTimer = 0f;
            SendOrReceiveSnapshot();
        }

        public void SubmitPlayerCommand(PlayerCommand command)
        {
            // Client path: send input command to server.
            // Server path: validate stamina, position, ball contact, then simulate.
        }

        private void SendOrReceiveSnapshot()
        {
            // Server sends compact transforms and match state.
            // Clients interpolate remote players and predict the controlled player.
        }
    }

    public readonly struct PlayerCommand
    {
        public readonly int tick;
        public readonly Vector2 move;
        public readonly bool sprint;
        public readonly bool pass;
        public readonly bool shoot;

        public PlayerCommand(int tick, Vector2 move, bool sprint, bool pass, bool shoot)
        {
            this.tick = tick;
            this.move = move;
            this.sprint = sprint;
            this.pass = pass;
            this.shoot = shoot;
        }
    }
}

