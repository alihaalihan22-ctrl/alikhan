using System;
using UnityEngine;

namespace KairatProFootball.Match.Player
{
    [Serializable]
    public sealed class PlayerAttributes
    {
        [Range(1, 99)] public int pace = 70;
        [Range(1, 99)] public int acceleration = 70;
        [Range(1, 99)] public int stamina = 70;
        [Range(1, 99)] public int dribbling = 70;
        [Range(1, 99)] public int shortPassing = 70;
        [Range(1, 99)] public int finishing = 70;
        [Range(1, 99)] public int shotPower = 70;
        [Range(1, 99)] public int defending = 70;
        [Range(1, 99)] public int goalkeeping = 10;

        public float PaceMultiplier => Mathf.Lerp(0.82f, 1.22f, pace / 99f);
        public float AccelerationMultiplier => Mathf.Lerp(0.75f, 1.25f, acceleration / 99f);
        public float StaminaMultiplier => Mathf.Lerp(0.8f, 1.25f, stamina / 99f);
    }
}

