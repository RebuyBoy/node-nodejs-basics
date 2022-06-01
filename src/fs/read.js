import {readFile} from 'fs/promises'
import path from 'path'

const dirname = new URL('./', import.meta.url).pathname;
const filePath = path.join(dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  try {
    const file = await readFile(filePath,'utf-8');
    console.log(file);
  } catch (err) {
    throw new Error('FS operation failed')
  }
};

read();