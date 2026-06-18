using System;
using System.Collections.Generic;
using UnityEngine;

namespace KairatProFootball.Data
{
    [CreateAssetMenu(menuName = "Kairat Pro Football/Club Definition")]
    public sealed class ClubDefinition : ScriptableObject
    {
        public string clubId;
        public string displayName;
        public string city;
        public string country;
        public Color primaryColor = Color.yellow;
        public Color secondaryColor = Color.black;
        public StadiumDefinition homeStadium;
        public List<PlayerDefinition> squad = new();
        public int transferBudget;
        public int academyRating;
    }

    [CreateAssetMenu(menuName = "Kairat Pro Football/Player Definition")]
    public sealed class PlayerDefinition : ScriptableObject
    {
        public string playerId;
        public string fullName;
        public string nationality;
        public int age;
        public string position;
        public int overall;
        public int potential;
        public bool isAcademyPlayer;
        public PlayerTechnicalAttributes technical = new();
    }

    [CreateAssetMenu(menuName = "Kairat Pro Football/Competition Definition")]
    public sealed class CompetitionDefinition : ScriptableObject
    {
        public string competitionId;
        public string displayName;
        public CompetitionFormat format;
        public List<ClubDefinition> clubs = new();
        public int prizeMoney;
        public bool qualifiesToContinentalTournament;
    }

    [CreateAssetMenu(menuName = "Kairat Pro Football/Stadium Definition")]
    public sealed class StadiumDefinition : ScriptableObject
    {
        public string stadiumId;
        public string displayName;
        public string city;
        public int capacity;
        public int atmosphereRating;
        public bool supportsNightMatches = true;
        public bool supportsRain = true;
    }

    public enum CompetitionFormat
    {
        League,
        KnockoutCup,
        LeaguePhaseAndKnockout
    }

    [Serializable]
    public sealed class PlayerTechnicalAttributes
    {
        [Range(1, 99)] public int pace = 70;
        [Range(1, 99)] public int dribbling = 70;
        [Range(1, 99)] public int passing = 70;
        [Range(1, 99)] public int shooting = 70;
        [Range(1, 99)] public int defending = 55;
        [Range(1, 99)] public int physical = 68;
    }
}

