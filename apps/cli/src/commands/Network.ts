import { VoidCommand } from "../VoidCommand";
import { CommandName } from "../lib";

export class Network extends VoidCommand {
  static paths = [[CommandName.Network]];
  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Creates the docker networks for Void",
    description:
      "Creates the docker network for void to use with traefik (web)",
  });

  async execute() {
    this.log("Creating network (web)");
    try {
      await this.exec("docker network create web");
    } catch (e) {
      this.log("Network already exists");
    }
  }
}
