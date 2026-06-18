const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopGame', {
  toggleFullscreen: () => ipcRenderer.invoke('desktop:toggle-fullscreen'),
});
