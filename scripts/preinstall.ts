import { exec, execSync } from "child_process";

exec("git --version", (err) => {
  if (!err) {
    execSync("git config core.hooksPath .githooks");
  } else {
    console.log("Git is not installed, skipping hook setup.");
  }
});
