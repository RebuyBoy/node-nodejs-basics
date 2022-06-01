import path from 'path'
import {rm} from 'fs/promises'

const dirname = new URL('./', import.meta.url).pathname;
const filePath = path.join(dirname, 'files-copy', 'fileToRemove.txt');

export const remove = async () => {
  try {
    await rm(filePath)
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

remove();