using UnityEngine;

namespace KairatProFootball.Presentation.Weather
{
    public enum WeatherType
    {
        Clear,
        Cloudy,
        Rain,
        HeavyRain
    }

    public sealed class WeatherController : MonoBehaviour
    {
        [SerializeField] private Light sun;
        [SerializeField] private ParticleSystem rainParticles;
        [SerializeField] private Renderer pitchRenderer;
        [SerializeField] private string wetnessProperty = "_Wetness";

        public WeatherType CurrentWeather { get; private set; }
        public float BallRollMultiplier { get; private set; } = 1f;
        public float PlayerSlideMultiplier { get; private set; } = 1f;

        public void ApplyWeather(WeatherType weather, bool nightMatch)
        {
            CurrentWeather = weather;

            float rainAmount = weather == WeatherType.Rain ? 0.55f : weather == WeatherType.HeavyRain ? 1f : 0f;
            BallRollMultiplier = Mathf.Lerp(1f, 1.18f, rainAmount);
            PlayerSlideMultiplier = Mathf.Lerp(1f, 1.35f, rainAmount);

            if (rainParticles != null)
            {
                if (rainAmount > 0f) rainParticles.Play();
                else rainParticles.Stop();
            }

            if (pitchRenderer != null)
            {
                pitchRenderer.material.SetFloat(wetnessProperty, rainAmount);
            }

            if (sun != null)
            {
                sun.intensity = nightMatch ? 0.15f : Mathf.Lerp(1.25f, 0.65f, rainAmount);
            }
        }
    }
}

