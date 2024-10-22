import { Option } from "clipanion";

import { VoidCommand } from "../VoidCommand";
import { CommandName, isVoidEnvironment } from "../lib";

export class Reset extends VoidCommand {
  static paths = [[CommandName.Reset]];

  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Reset the given environment",
    description:
      "Resets the specified environment bringing down any services and removing any volumes and deleting any data",
  });

  environment = Option.String({ validator: isVoidEnvironment });

  async execute() {
    this.log(`Resetting ${this.environment} environment...`);
    await this.cli.run([CommandName.Stop]);
    await this.cli.run([CommandName.Clean]);
    await this.cli.run([CommandName.Volumes, "delete"]);
    await this.cli.run([CommandName.Start, this.environment]);
  }
}
