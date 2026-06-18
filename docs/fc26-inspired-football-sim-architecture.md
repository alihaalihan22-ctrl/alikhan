# 3D Football Simulator Architecture

> Working title: **Kairat Pro Football**
>
> Goal: a modern 3D football simulator inspired by current football games, with realistic match play, Kazakhstan Premier League content, careers, editors, local multiplayer, and an online-ready architecture.

## Engine Choice

Recommended engine: **Unity 6 LTS / Unity 2023 LTS with URP or HDRP**.

Why Unity:
- Faster prototype path for one developer or a small team.
- Strong C# workflow.
- Good controller support through the Input System.
- Netcode options: Unity Netcode for GameObjects, Fish-Networking, or Photon Fusion.
- Easier WebGL/PC build path if the project grows from the current web app.

Use **HDRP** if the target is high-end PC/console visuals. Use **URP** if performance and broader hardware support matter more.

## Product Scope

This architecture separates the game into four layers:

1. **Match Simulation**
   - Player movement, ball physics, collisions, referee rules, AI, animation, camera, replay.
2. **Presentation**
   - Stadiums, crowd, lighting, weather, UI, scoreboard, commentary, audio.
3. **Game Modes**
   - Kick-off, tournaments, cups, Champions League-style competition, player career, manager career, academy, transfers.
4. **Platform**
   - Save system, input, local multiplayer, online sessions, account/profile, content editors.

## Project Folder Structure

```text
Assets/
  _Game/
    Art/
      Characters/
        Players/
        Faces/
        Hair/
      Stadiums/
        KairatCentral/
        GenericKPL/
      Kits/
        Kairat/
        CustomClubs/
      Ball/
      UI/
    Audio/
      Commentary/
        ru/
        kk/
        en/
      Crowd/
      Sfx/
      Music/
    Data/
      Clubs/
      Competitions/
      Players/
      Stadiums/
      Tactics/
      Localization/
    Prefabs/
      Match/
      Players/
      Stadiums/
      UI/
      Weather/
    Scenes/
      Boot.unity
      MainMenu.unity
      Match.unity
      CareerHub.unity
      StadiumEditor.unity
      KitEditor.unity
    Scripts/
      Core/
      Match/
        Ball/
        Player/
        AI/
        Rules/
        Replay/
        Camera/
      Modes/
        Career/
        Tournament/
        Editor/
      Presentation/
        Crowd/
        Commentary/
        Lighting/
        UI/
        Weather/
      Multiplayer/
      Save/
      Data/
      Input/
    Settings/
      RenderPipeline/
      Input/
      Physics/
```

## Scene Flow

```text
Boot
  -> loads services: save, data catalog, input, audio, online adapter
MainMenu
  -> kick-off
  -> player career
  -> manager career
  -> tournaments
  -> editors
Match
  -> loads match context: stadium, teams, kits, rules, weather, time of day
  -> runs match loop
  -> exports result, highlights, player stats
CareerHub
  -> training, transfers, calendar, academy, squad, contracts
Editors
  -> custom club, kit editor, stadium editor
```

## Core Systems

### Match Loop

The match loop is deterministic enough for replay and online synchronization:

```text
PreMatch
  load teams, stadium, tactics, weather
Kickoff
  reset positions
InPlay
  simulate players, AI, ball, camera, rules
Stoppage
  fouls, throw-ins, corners, goal kicks, substitutions
GoalReplay
  play recorded highlight
HalfTime
FullTime
PostMatch
  write result, stats, injuries, progression
```

### Player Controller

Each footballer uses:
- `PlayerMotor` for acceleration, turning, sprinting, stamina.
- `PlayerBallInteraction` for dribble touch, pass, shot, tackle.
- `PlayerAnimationBridge` for animator parameters and animation events.
- `PlayerAttributes` for speed, acceleration, finishing, passing, vision, defending.
- `PlayerBrain` for AI decisions when not controlled by a human.

### Ball Physics

The ball is a Rigidbody with:
- Low friction rolling material.
- Magnus-like curve force for finesse shots.
- Ground drag and air drag.
- Spin derived from kick contact.
- Predictive trajectory sampling for AI and goalkeeper positioning.

### Animation

Recommended setup:
- Humanoid rig.
- Blend trees for jog, sprint, strafe, jockey, dribble.
- Animation events for foot contact.
- IK for foot planting and ball contact alignment.
- Separate upper-body additive layers for pointing, shielding, and celebrations.

### AI

Use a layered AI:
- **Team AI**: formation, pressing line, attacking width, transition behavior.
- **Role AI**: striker, winger, midfielder, defender, goalkeeper.
- **Decision AI**: pass, dribble, shoot, hold, clear, tackle.
- **Steering**: avoid teammates, mark opponents, find space.

### Stadium and Crowd

Stadium content:
- FC Kairat home stadium preset.
- Generic Kazakhstan Premier League stadiums.
- Editor-built stadiums from modular stands, pitch patterns, lighting rigs, ad boards.

Crowd:
- GPU-instanced crowd cards for far stands.
- Low-poly animated crowd clusters near camera.
- Crowd audio intensity follows match events.

### Day, Night, Weather

Weather presets:
- Clear day.
- Cloudy evening.
- Night floodlights.
- Rain.
- Heavy rain with slippery pitch.

Weather affects:
- Ball bounce and roll drag.
- Player slide distance.
- Visual particles, wet pitch shader, reflections.
- Crowd audio and commentary lines.

### Replays

Replay records compact snapshots:
- Ball position, rotation, velocity.
- Player position, rotation, animation state hash.
- Match clock and event markers.

Keep a rolling buffer of the last 20-30 seconds. On goal, freeze gameplay and play the buffer from a broadcast camera.

### Commentary

Commentary is event-driven:
- `MatchEvent.Goal`
- `MatchEvent.Save`
- `MatchEvent.Foul`
- `MatchEvent.Substitution`
- `MatchEvent.DerbyMoment`
- `MatchEvent.KairatGoal`

For production, use recorded voice packs. For prototype, use text-to-speech or subtitle-only commentary.

## Modes

### Kick-Off

Single match:
- Offline vs AI.
- Two players on one computer.
- Online friendly.
- Custom stadium, time, weather, kits.

### Player Career

Features:
- Create player.
- Position, height, dominant foot, style.
- Training drills.
- Match objectives.
- Attribute growth.
- Agent offers.
- Youth academy start.

### Manager Career

Features:
- Squad management.
- Tactics.
- Transfers.
- Contracts.
- Scouting.
- Youth academy.
- Club finances.
- Board objectives.

### Kazakhstan Premier League

Competition model:
- Clubs table.
- Season calendar.
- Domestic cup.
- FC Kairat as a licensed-inspired default club entry.
- Editable squads and created clubs.

### Champions League-Style Tournament

Use a generic name unless official licensing is acquired:
- League phase.
- Knockouts.
- Draw simulation.
- Prize money.
- Continental qualification from domestic league.

### Editors

Custom club editor:
- Name, crest, colors, home city, budget, academy level.

Kit editor:
- Base templates.
- Primary/secondary/trim colors.
- Sponsor placeholder.
- Number style.

Stadium editor:
- Stand modules.
- Seat colors.
- Roof options.
- Floodlights.
- Pitch pattern.
- Capacity and atmosphere rating.

## Multiplayer

### Local Multiplayer

Use Unity Input System:
- One keyboard player.
- Multiple gamepads.
- Player assignment screen.
- Same-team co-op and versus.

### Online

Recommended model:
- Server-authoritative for competitive modes.
- Client prediction for controlled player.
- Lag compensation for ball contact and tackles.
- Snapshot interpolation for remote players.

Prototype path:
1. Local multiplayer.
2. LAN host/client.
3. Online friendly.
4. Friend tournaments.
5. Ranked modes only after anti-cheat and server authority are stable.

## Data Model

Core ScriptableObjects:
- `ClubDefinition`
- `PlayerDefinition`
- `CompetitionDefinition`
- `StadiumDefinition`
- `KitDefinition`
- `WeatherPreset`
- `TacticDefinition`

Runtime save data:
- `CareerSave`
- `SeasonState`
- `TransferMarketState`
- `PlayerProgressionState`
- `CustomClubSave`
- `EditorAssetSave`

## Performance Targets

PC prototype:
- 60 FPS at 1080p.
- 22 active players with simplified off-camera animation.
- GPU instancing for crowd.
- LODs for players and stadium.
- Fixed timestep for physics.

Optimization rules:
- Simulate full detail only near the ball and camera.
- Use animation LOD for distant players.
- Pool particles, UI popups, replay objects.
- Keep crowd as instanced meshes/cards, not full characters.

## Vertical Slice Plan

Milestone 1: Playable Pitch
- One stadium.
- 11v11 placeholders.
- Ball physics.
- Human movement, pass, shot.
- Basic AI chase and pass.
- Scoreboard.

Milestone 2: Football Feel
- Dribbling touches.
- Sprint/stamina.
- Goalkeeper.
- Fouls/out of play.
- Replays.
- Day/night.

Milestone 3: FC Kairat + KPL
- FC Kairat data.
- Kazakhstan Premier League season.
- Kits.
- Tournament table.
- Basic career hub.

Milestone 4: Modern Presentation
- Crowd.
- Weather.
- Commentary events.
- Broadcast camera package.
- Player faces and animation polish.

Milestone 5: Multiplayer and Editors
- Two-player local.
- LAN/online prototype.
- Custom club.
- Kit editor.
- Stadium editor.

