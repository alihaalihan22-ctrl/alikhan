using System.Collections.Generic;
using UnityEngine;

namespace KairatProFootball.Presentation.Commentary
{
    public enum CommentaryEvent
    {
        Kickoff,
        Goal,
        KairatGoal,
        Save,
        Foul,
        Substitution,
        FullTime
    }

    public sealed class CommentaryDirector : MonoBehaviour
    {
        [SerializeField] private AudioSource voiceSource;
        [SerializeField] private List<CommentaryLine> lines = new();

        public void Play(CommentaryEvent eventType)
        {
            List<CommentaryLine> candidates = lines.FindAll(line => line.eventType == eventType && line.clip != null);
            if (candidates.Count == 0) return;

            CommentaryLine selected = candidates[Random.Range(0, candidates.Count)];
            voiceSource.PlayOneShot(selected.clip);
        }
    }

    [System.Serializable]
    public sealed class CommentaryLine
    {
        public CommentaryEvent eventType;
        public string subtitle;
        public AudioClip clip;
    }
}

