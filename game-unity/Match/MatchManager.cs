using System;
using KairatProFootball.Match.Replay;
using UnityEngine;

namespace KairatProFootball.Match
{
    public enum MatchPhase
    {
        PreMatch,
        Kickoff,
        InPlay,
        Stoppage,
        GoalReplay,
        HalfTime,
        FullTime
    }

    public sealed class MatchManager : MonoBehaviour
    {
        [SerializeField] private ReplayRecorder replayRecorder;
        [SerializeField] private float halfLengthSeconds = 300f;

        public event Action<int, int> ScoreChanged;
        public event Action<MatchPhase> PhaseChanged;

        public MatchPhase Phase { get; private set; } = MatchPhase.PreMatch;
        public float MatchClockSeconds { get; private set; }
        public int HomeScore { get; private set; }
        public int AwayScore { get; private set; }

        private void Start()
        {
            SetPhase(MatchPhase.Kickoff);
        }

        private void Update()
        {
            if (Phase != MatchPhase.InPlay) return;

            MatchClockSeconds += Time.deltaTime;

            if (MatchClockSeconds >= halfLengthSeconds && MatchClockSeconds < halfLengthSeconds + 1f)
            {
                SetPhase(MatchPhase.HalfTime);
            }
            else if (MatchClockSeconds >= halfLengthSeconds * 2f)
            {
                SetPhase(MatchPhase.FullTime);
            }
        }

        public void StartKickoff()
        {
            SetPhase(MatchPhase.InPlay);
        }

        public void RegisterGoal(bool homeTeamScored)
        {
            if (homeTeamScored) HomeScore++;
            else AwayScore++;

            ScoreChanged?.Invoke(HomeScore, AwayScore);
            SetPhase(MatchPhase.GoalReplay);
            replayRecorder.PlayGoalReplay();
        }

        public void FinishReplayAndResetKickoff()
        {
            SetPhase(MatchPhase.Kickoff);
        }

        private void SetPhase(MatchPhase nextPhase)
        {
            Phase = nextPhase;
            PhaseChanged?.Invoke(Phase);
        }
    }
}

