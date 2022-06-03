import {pipeline} from 'stream/promises'
import {join, dirname} from 'path'
import {open} from 'fs/promises'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  try {
    const rs = (await open(filePath, 'r')).createReadStream();
    await pipeline(rs, process.stdout);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`)
  }
};

read();
