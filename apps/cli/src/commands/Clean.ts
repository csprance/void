import { rimraf } from "rimraf";

import { VoidCommand } from "../VoidCommand";
import { CommandName } from "../lib";

export class Clean extends VoidCommand {
  static paths = [[CommandName.Clean]];
  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Cleans up temp and data files",
    description:
      "Cleans up temp and data files that void creates during its run",
  });

  async execute() {
    this.log("Cleaning up temp and data files...");
    const folders = [
      "./.data/thumbnails",
      "./.data/gallery",
      "./.data/tmp",
      "./.data/logs",
      "./.data/video-thumbnails",
    ];

    for (const folder of folders) {
      try {
        await rimraf(folder);
        this.log(`Folder ${folder} deleted.`);
      } catch (e) {
        this.log(e);
      }
    }
  }
}
