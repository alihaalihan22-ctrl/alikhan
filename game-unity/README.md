# Unity Football Simulator Code Samples

This folder contains portable C# examples for a Unity football simulator.

Suggested destination in a Unity project:

```text
Assets/_Game/Scripts/
```

The scripts are intentionally engine-native and small enough to study:

- `Match/Ball/BallPhysicsController.cs` - realistic kick, spin, curve, drag.
- `Match/Player/PlayerMotor.cs` - acceleration, sprint, stamina, turning.
- `Match/Player/PlayerBallInteraction.cs` - dribble, pass, shoot.
- `Match/MatchManager.cs` - match clock, states, goals, replay trigger.
- `Match/Replay/ReplayRecorder.cs` - rolling replay buffer.
- `Modes/Career/CareerManager.cs` - player/manager career progression.
- `Modes/Career/TransferMarket.cs` - simple transfer valuation and offers.
- `Presentation/Weather/WeatherController.cs` - rain, wet pitch, physics effects.
- `Presentation/Commentary/CommentaryDirector.cs` - event-driven commentary.
- `Multiplayer/LocalMultiplayerInputRouter.cs` - same-PC multiplayer setup.
- `Multiplayer/NetworkMatchSession.cs` - server-authoritative online skeleton.
- `Data/FootballDataDefinitions.cs` - ScriptableObject data models.
- `Data/sample-*.json` - sample FC Kairat, Kazakhstan Premier League, stadium, and tournament data.
