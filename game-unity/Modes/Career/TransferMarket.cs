using System;
using System.Collections.Generic;
using UnityEngine;

namespace KairatProFootball.Modes.Career
{
    public sealed class TransferMarket : MonoBehaviour
    {
        [SerializeField] private List<TransferPlayer> listedPlayers = new();

        public IReadOnlyList<TransferPlayer> ListedPlayers => listedPlayers;

        public TransferOffer CreateOffer(string buyingClubId, TransferPlayer player, int offeredFee)
        {
            int expectedValue = EstimateMarketValue(player);
            float acceptanceChance = Mathf.InverseLerp(expectedValue * 0.75f, expectedValue * 1.35f, offeredFee);

            return new TransferOffer
            {
                buyingClubId = buyingClubId,
                sellingClubId = player.clubId,
                playerId = player.playerId,
                offeredFee = offeredFee,
                acceptedByClub = UnityEngine.Random.value <= acceptanceChance
            };
        }

        public int EstimateMarketValue(TransferPlayer player)
        {
            float ageFactor = player.age <= 24 ? 1.25f : player.age >= 31 ? 0.72f : 1f;
            float potentialFactor = Mathf.Lerp(0.85f, 1.4f, player.potential / 99f);
            float overallFactor = Mathf.Pow(player.overall / 60f, 3f);
            return Mathf.RoundToInt(250_000 * overallFactor * ageFactor * potentialFactor);
        }
    }

    [Serializable]
    public sealed class TransferPlayer
    {
        public string playerId;
        public string clubId;
        public string fullName;
        public int age;
        public int overall;
        public int potential;
        public string position;
    }

    [Serializable]
    public sealed class TransferOffer
    {
        public string buyingClubId;
        public string sellingClubId;
        public string playerId;
        public int offeredFee;
        public bool acceptedByClub;
    }
}

