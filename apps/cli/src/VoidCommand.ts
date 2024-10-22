import chalk from "chalk";
import { spawn } from "child_process";
import { Command } from "clipanion";
import { Option } from "clipanion";

import { type VoidConfig } from "./cli";
import { getConfig } from "./lib";

export class VoidCommand extends Command {
  protected config: VoidConfig = {} as VoidConfig;

  configPath = Option.String("--config", {
    description: "If the void.json is somewhere else specify it here",
  });

  validateAndExecute(): Promise<number> {
    // Read the config at the working directory where the cli is run
    this.config = getConfig();
    return super.validateAndExecute();
  }

  /**
   * Executes a shell command and returns a promise that resolves when
   * the command completes.
   * @param {string} cmd - The command to execute.
   */
  protected exec(cmd: string) {
    this.context.stdout.write(chalk.bold.grey(`${cmd}\n`));
    return new Promise((resolve, reject) => {
      // Split the command into the command and its arguments
      const [command, ...args] = cmd.split(" ");

      // Spawn a new process
      const process = spawn(command, args);

      // Handle stdout data
      process.stdout.on("data", (data) => {
        this.context.stdout.write(chalk.grey(data.toString()));
      });

      // Handle stderr data
      process.stderr.on("data", (data) => {
        this.context.stderr.write(chalk.red(`${data.toString()}\n`));
      });

      // Handle process close
      process.on("close", (code) => {
        if (code !== 0) {
          reject(new Error(`Command failed with code ${code}`));
        } else {
          resolve(0);
        }
      });

      // Handle process error
      process.on("error", (error) => {
        this.context.stderr.write(`${error.message}\n`);
        reject(error);
      });
    });
  }

  /**
   * Log something to output for @void/cli
   * @param args What you want to log
   * @protected
   */
  protected log(...args: any[]) {
    const msg = chalk.blue.bold(`[VOID] ${args}\n`);
    this.context.stdout.write(msg);
  }

  execute(): Promise<number | void> {
    return Promise.resolve(0);
  }
}
