# Shesterochka Horror - Steam/Desktop Build

This project can be built as a Windows desktop game with Electron.

## Run as a desktop game

```bash
npm run desktop
```

## Build a portable Windows game

```bash
npm run desktop:pack
```

Output goes to:

```text
release/
```

## Build a Windows installer

```bash
npm run desktop:installer
```

## For Steamworks

1. Create a Steamworks app.
2. Build the game with `npm run desktop:pack`.
3. Upload the generated Windows build from `release/`.
4. In Steamworks, set the launch executable from the uploaded build.
5. Add store capsule images, trailer, screenshots, tags, description, and age settings.

Do not upload copied assets from other Steam games. This project is configured as an original indie horror game.
