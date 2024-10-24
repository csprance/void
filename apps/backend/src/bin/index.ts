#!/usr/bin/env node
import { CliCore } from "@tsed/cli-core";
import { config } from "~/config";

CliCore.bootstrap({
  ...config,
  commands: [],
}).catch(console.error);
