//main.ts
import * as path from "path";
import { app, BrowserWindow, globalShortcut, ipcMain } from "electron";
// import activeWindow from "active-win";
// import { Region, screen } from "@nut-tree/nut-js";
let window;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  window.loadFile("index.html");

  globalShortcut.register("CommandOrControl+Alt+D", async () => {
    console.log("CommandOrControl+Shift+D is pressed");
    // const result = await activeWindow();
    // console.log(result);
    // await screen.highlight(new Region(100, 200, 300, 400));
  });
});
