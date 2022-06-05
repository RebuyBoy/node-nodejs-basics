import path from 'path'
import {access, rm} from 'fs/promises'

const dirname = new URL('./', import.meta.url).pathname;
const filePath = path.join(dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  try {
    if (!await isExists(filePath)) {
      throw new Error('FS operation failed');
    }
    await rm(filePath)
  } catch (err) {
    console.log(err);
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

remove();