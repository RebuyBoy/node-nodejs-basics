import {Transform} from "stream";
import {pipeline} from "stream/promises";
import {open} from "fs/promises"
import {join, dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

export const transform = async () => {
  try {
    const rs = (await open(filePath, "r")).createReadStream();
    const reverseText = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, String(chunk).split("").reverse().join(""));
      },
    });
    await pipeline(rs, reverseText, process.stdout);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
};

transform();