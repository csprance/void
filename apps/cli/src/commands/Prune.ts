import { VoidCommand } from "../VoidCommand";
import { CommandName } from "../lib";

export class Prune extends VoidCommand {
  static paths = [[CommandName.Prune]];

  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Cleans up unused Docker resources",
    description:
      "Cleans up unused Docker resources such as containers, images, and volumes." +
      "docker container prune -f && docker image prune -f && docker volume prune -f",
  });

  async execute() {
    this.log("Cleaning up unused Docker resources...");

    await this.exec("docker container prune -f");
    await this.exec("docker image prune -f");
    await this.exec("docker volume prune -f");
    this.log("Unused Docker resources pruned.");
  }
}
