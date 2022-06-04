import {Worker} from "worker_threads"
import {cpus} from "os"
import {fileURLToPath} from "url"
import {dirname, join} from "path"

console.time();
export const performCalculations = async () => {
  const cpusNumber = cpus().length;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'worker.js');
  const results = [];

  for (let i = 0; i < cpusNumber; i++) {
    results.push(startWorker(filePath, i + 10));
  }
  return await Promise.all(results);
};

function startWorker(filePath, number) {
  return new Promise((resolve) => {
    const worker = new Worker(filePath);
    let result = null;
    worker.on("message", (result) => {
      result = {
        "status": "resolve",
        "data": result
      };
      resolve(result);
    });

    worker.on("error", () => {
      result = {
        "status": "error",
        "data": null
      }
      resolve(result);
    });

    worker.postMessage({"number": number})
  });
}

console.log(await performCalculations());
console.timeEnd()
