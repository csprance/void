import { Option } from "clipanion";
import * as t from "typanion";

import { VoidCommand } from "../VoidCommand";
import { CommandName } from "../lib";

export class Volumes extends VoidCommand {
  static paths = [[CommandName.Volumes]];

  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Create or Delete the needed volumes for the application to run",
    description:
      "Creates or deletes the needed volumes for the application to run",
  });

  operation = Option.String({
    validator: t.cascade(t.isString(), [
      t.isOneOf([t.isLiteral("create"), t.isLiteral("delete")]),
    ]),
  });

  async execute() {
    if (this.operation === "create") {
      await this.createVolumes();
    } else {
      await this.removeVolumes();
    }
  }

  async createVolumes() {
    this.log("Creating Docker volumes...");
    for (const volume of [
      ...this.config.volumes.reset,
      ...this.config.volumes.persistent,
    ]) {
      await this.exec(`docker volume create ${volume}`);
      this.log(`Volume ${volume} created.`);
    }
  }

  async removeVolumes() {
    try {
      this.log(`Removing Volumes: ${this.config.volumes.reset.join(" ")}`);
      await this.exec(
        `docker volume rm ${this.config.volumes.reset.join(" ")}`,
      );
      this.log("Volumes removed.");
    } catch (e) {
      this.log("Failed removing Docker Volumes");
    }
  }
}
