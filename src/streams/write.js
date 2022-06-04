import {pipeline} from 'stream/promises'
import {join, dirname} from 'path'
import {open} from 'fs/promises'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
  const ws = (await open(filePath, 'w')).createWriteStream();
  await pipeline(process.stdin, ws);
};

write()