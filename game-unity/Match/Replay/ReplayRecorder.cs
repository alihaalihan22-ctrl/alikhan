using System.Collections.Generic;
using UnityEngine;

namespace KairatProFootball.Match.Replay
{
    public sealed class ReplayRecorder : MonoBehaviour
    {
        [SerializeField] private Transform ball;
        [SerializeField] private Transform[] players;
        [SerializeField] private float bufferSeconds = 25f;
        [SerializeField] private float sampleRate = 12f;

        private readonly Queue<ReplayFrame> frames = new();
        private float sampleTimer;

        public IReadOnlyCollection<ReplayFrame> Frames => frames;

        private void Update()
        {
            sampleTimer += Time.deltaTime;
            if (sampleTimer < 1f / sampleRate) return;

            sampleTimer = 0f;
            RecordFrame();
        }

        public void PlayGoalReplay()
        {
            Debug.Log($"Goal replay started with {frames.Count} frames.");
            // Production path: disable live controllers, switch to replay camera,
            // interpolate recorded frames, then return control to MatchManager.
        }

        private void RecordFrame()
        {
            ReplayFrame frame = new(ball, players, Time.time);
            frames.Enqueue(frame);

            int maxFrames = Mathf.CeilToInt(bufferSeconds * sampleRate);
            while (frames.Count > maxFrames)
            {
                frames.Dequeue();
            }
        }
    }

    public readonly struct ReplayFrame
    {
        public readonly float time;
        public readonly Pose ballPose;
        public readonly Pose[] playerPoses;

        public ReplayFrame(Transform ball, Transform[] players, float time)
        {
            this.time = time;
            ballPose = new Pose(ball.position, ball.rotation);
            playerPoses = new Pose[players.Length];

            for (int i = 0; i < players.Length; i++)
            {
                playerPoses[i] = new Pose(players[i].position, players[i].rotation);
            }
        }
    }
}

