const {app, BrowserWindow } = require('electron')
require('./app');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration:true
    }
  })

  
  win.loadURL('http://localhost:3000/');
  
}

app.whenReady().then(createWindow);