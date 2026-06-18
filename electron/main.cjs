const { app, BrowserWindow, Menu, globalShortcut, ipcMain } = require('electron');
const path = require('path');

const isDev = process.env.ELECTRON_DEV === '1';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    title: 'Shesterochka Horror',
    backgroundColor: '#020304',
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  Menu.setApplicationMenu(null);

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }

  ipcMain.handle('desktop:toggle-fullscreen', () => {
    win.setFullScreen(!win.isFullScreen());
    return win.isFullScreen();
  });
}

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('F11', () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.setFullScreen(!win.isFullScreen());
  });

  globalShortcut.register('CommandOrControl+Q', () => {
    app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
