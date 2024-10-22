import { execSync } from "child_process";

try{
  execSync("git config core.hooksPath .githooks");
}catch (e) {
  console.error(`[VOID] - Error Running: ./scripts/preinstall.ts: ${e}`);
}

