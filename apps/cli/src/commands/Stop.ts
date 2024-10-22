import { VoidCommand } from "../VoidCommand";
import { CommandName } from "../lib";

export class Stop extends VoidCommand {
  static paths = [[CommandName.Stop]];

  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Stop Void and bring down all the services",
    description: "Runs docker-compose down --remove-orphans",
  });

  async execute() {
    const composeFiles = [
      ...this.config.composeFiles.dev,
      ...this.config.composeFiles.staging,
      ...this.config.composeFiles.prod,
    ]
      .map((x) => `-f ${x}`)
      .join(" ");
    this.log("Stopping Void");
    await this.exec(`docker-compose ${composeFiles} down --remove-orphans`);
  }
}
