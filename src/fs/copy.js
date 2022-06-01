import {readdir, copyFile, mkdir} from 'fs/promises'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'


export const copy = async () => {

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const source = join(__dirname, 'files');
  const destination = join(__dirname, 'files-copy');

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