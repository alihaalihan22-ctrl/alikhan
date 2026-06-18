using System;
using System.Collections.Generic;
using UnityEngine;

namespace KairatProFootball.Modes.Career
{
    public enum CareerType
    {
        Player,
        Manager
    }

    public sealed class CareerManager : MonoBehaviour
    {
        [SerializeField] private CareerSave save = new();

        public CareerSave Save => save;

        public void AdvanceWeek()
        {
            save.week++;
            DevelopAcademyPlayers();
            ApplyTrainingGrowth();
        }

        public void AddResult(string competitionId, int points, int goalsFor, int goalsAgainst)
        {
            save.clubPoints += points;
            save.goalsFor += goalsFor;
            save.goalsAgainst += goalsAgainst;
            save.recentResults.Add($"{competitionId}:{goalsFor}-{goalsAgainst}");
        }

        private void DevelopAcademyPlayers()
        {
            foreach (YouthProspect prospect in save.academy)
            {
                prospect.overall += UnityEngine.Random.Range(0, 2);
                prospect.potential = Mathf.Max(prospect.potential, prospect.overall);
            }
        }

        private void ApplyTrainingGrowth()
        {
            save.createdPlayerOverall = Mathf.Min(99, save.createdPlayerOverall + save.trainingFocusPoints / 100);
            save.trainingFocusPoints = 0;
        }
    }

    [Serializable]
    public sealed class CareerSave
    {
        public CareerType type = CareerType.Manager;
        public string clubId = "kairat";
        public int season = 2026;
        public int week = 1;
        public int clubPoints;
        public int goalsFor;
        public int goalsAgainst;
        public int createdPlayerOverall = 62;
        public int trainingFocusPoints;
        public List<string> recentResults = new();
        public List<YouthProspect> academy = new();
    }

    [Serializable]
    public sealed class YouthProspect
    {
        public string name;
        public int age;
        public string position;
        public int overall;
        public int potential;
    }
}

