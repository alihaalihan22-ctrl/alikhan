using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

namespace KairatProFootball.Multiplayer
{
    public sealed class LocalMultiplayerInputRouter : MonoBehaviour
    {
        [SerializeField] private PlayerInputManager inputManager;
        [SerializeField] private List<PlayerInput> joinedPlayers = new();

        public IReadOnlyList<PlayerInput> JoinedPlayers => joinedPlayers;

        private void OnEnable()
        {
            inputManager.onPlayerJoined += HandlePlayerJoined;
            inputManager.onPlayerLeft += HandlePlayerLeft;
        }

        private void OnDisable()
        {
            inputManager.onPlayerJoined -= HandlePlayerJoined;
            inputManager.onPlayerLeft -= HandlePlayerLeft;
        }

        private void HandlePlayerJoined(PlayerInput playerInput)
        {
            joinedPlayers.Add(playerInput);
            AssignSide(playerInput, joinedPlayers.Count % 2 == 1);
        }

        private void HandlePlayerLeft(PlayerInput playerInput)
        {
            joinedPlayers.Remove(playerInput);
        }

        private static void AssignSide(PlayerInput playerInput, bool homeSide)
        {
            playerInput.gameObject.name = homeSide ? "Local Player Home" : "Local Player Away";
            // Hook this into team selection UI and controlled-player switching.
        }
    }
}

