import {fork} from "child_process";
import {fileURLToPath} from "url";
import {join, dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = join(__dirname, "files", "script.js");

export const spawnChildProcess = async (args) => {
  const cp = fork(scriptPath, args);

  cp.on("close", (code) => {
    console.log("child_process exited with code " + code);
  });
};

const args = ["aa", "bb", "cc", "dd"];
spawnChildProcess(args);
