import { Option } from "clipanion";

import { VoidCommand } from "../VoidCommand";
import { CommandName, isVoidEnvironment } from "../lib";

export class Restart extends VoidCommand {
  static paths = [[CommandName.Restart]];

  static usage = VoidCommand.Usage({
    category: "Utility",
    details: "Re-Start void in the specified environment",
    description:
      "Re-start the specified environment bringing down any services and bringing them back up fresh while keeping all temp data",
  });

  environment = Option.String({ validator: isVoidEnvironment });

  async execute() {
    this.log(`Re-Starting ${this.environment} environment...`);
    await this.cli.run([CommandName.Stop]);
    await this.cli.run([CommandName.Start, this.environment]);
  }
}
