import { Option } from "clipanion";

import { VoidCommand } from "../VoidCommand";
import { CommandName, isVoidEnvironment } from "../lib";

export class Start extends VoidCommand {
  static paths = [[CommandName.Start]];
  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Start void in a specified environment",
    description:
      "Start the specified environment making sure not to disrupt any running services",
  });

  environment = Option.String({
    validator: isVoidEnvironment,
    required: true,
  });
  noBuild = Option.Boolean("--no-build");

  async execute() {
    this.log(`Starting ${this.environment} environment...`);
    await this.cli.run([CommandName.Network]);
    await this.cli.run([CommandName.Volumes, "create"]);

    const composeFiles = this.config.composeFiles[this.environment];
    const services = this.config.services[this.environment];

    await this.exec(
      `docker-compose ${composeFiles
        .map((x) => `-f ${x}`)
        .join(
          " ",
        )} up -d ${services.join(" ")} ${this.noBuild ? "" : "--build"}`,
    );
    this.log(`${this.environment} environment started.`);
  }
}
