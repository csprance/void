import { Command } from "clipanion";
import * as fs from "fs";
import { promises as fsp } from "fs";
import path from "path";
import * as t from "typanion";

import cli, { type VoidConfig } from "./cli";

export enum CommandName {
  Start = "start",
  Stop = "stop",
  Reset = "reset",
  Restart = "restart",
  Clean = "clean",
  Prune = "prune",
  Volumes = "volumes",
  Network = "network",
}

/**
 * Read the void.json config file in the root where the
 * CLI is run
 */
export function getConfig(configPath?: string): VoidConfig {
  // Read and parse the void.json file
  try {
    const configFile = fs.readFileSync(
      configPath ? configPath : path.join(process.cwd(), "void.json"),
      "utf8",
    );
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error("Failed to read or parse void.json");
  }
}

export const loadCommands = async (commandsDir: string): Promise<void> => {
  try {
    const files = await fsp.readdir(commandsDir);

    for (const file of files) {
      const fullPath = path.join(commandsDir, file);

      // Only import TypeScript or JavaScript files
      if (fullPath.endsWith(".ts") || fullPath.endsWith(".js")) {
        const module = await import(fullPath);

        // Check if the default export or named export is a Command
        const command = module.default || module.Command;
        if (command && command.prototype instanceof Command) {
          cli.register(command);
        }
      }
    }
  } catch (err) {
    console.error(`Error loading commands: ${(err as Error).message}`);
  }
};

/**
 * Takes an imported or required object and converts it to an array of its own properties.
 */
export function importToArray<Key extends string, PropType>(
  importObject: Record<Key, PropType>,
): PropType[] {
  const keys = Object.getOwnPropertyNames(importObject);

  // ES6 / TypeScript exports contain a __esModule property. Don't include that.
  return keys
    .filter((key) => key.indexOf("__") !== 0)
    .map((key) => (importObject as any)[key]);
}

export const isVoidEnvironment = t.cascade(t.isString(), [
  t.isOneOf([t.isLiteral("dev"), t.isLiteral("prod"), t.isLiteral("staging")]),
]);
