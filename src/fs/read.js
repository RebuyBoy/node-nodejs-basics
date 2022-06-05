import {access, readFile} from 'fs/promises'
import path from 'path'

const dirname = new URL('./', import.meta.url).pathname;
const filePath = path.join(dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  try {
    if (!await isExists(filePath)) {
      throw new Error('FS operation failed');
    }
    const file = await readFile(filePath, 'utf-8');
    console.log(file);
  } catch (err) {
    console.error(err);
  }
};

async function isExists(path) {
  try {
    await access(path)
    return true;
  } catch {
    return false;
  }
}

read();