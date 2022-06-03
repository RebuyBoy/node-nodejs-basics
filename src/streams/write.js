import {pipeline,Transform} from 'stream/promises'
import {join, dirname} from 'path'
import {open} from 'fs/promises'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToWrite.txt');


// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream


export const write = async () => {
  const ws = (await open(filePath, 'w')).createWriteStream();
  await pipeline(process.stdin, ws);
};

write()