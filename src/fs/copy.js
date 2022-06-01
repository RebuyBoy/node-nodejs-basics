import {readdir, copyFile, mkdir} from 'fs/promises'
import path from 'path'

const dirname = new URL('./', import.meta.url).pathname;
const source = path.join(dirname, 'files');
const destination = path.join(dirname, 'files-copy');

export const copy = async () => {
  try {
    await mkdir(destination);
    const files = await readdir(source);
    for (let file of files) {
      const sourceFile = path.join(source, file);
      const destinationFile = path.join(destination, file);
      await copyFile(sourceFile, destinationFile);
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

copy();