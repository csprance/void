import { Cli } from "clipanion";

import { name, version } from "../package.json";

export interface VoidConfig {
  // The docker-compose files
  composeFiles: {
    [key: string]: string[]; // Allow any string as an index
    // What to run for dev
    dev: string[];
    // What to run for prod
    prod: string[];
    // What to run for staging
    staging: string[];
  };
  // The volumes that are used in the deployment
  volumes: {
    // What volumes can be reset
    reset: string[];
    // What volumes should never be reset
    persistent: string[];
  };
  // The services that need to be run for the deployment
  services: {
    [key: string]: string[]; // Allow any string as an index
    // The services that should be run for development
    dev: string[];
    // The services that should be run for production
    prod: string[];
    // The services that should be run for staging
    staging: string[];
  };
}

const cli = new Cli({
  binaryLabel: `${name}`,
  binaryName: `void`,
  binaryVersion: `${version}`,
});

export default cli;
