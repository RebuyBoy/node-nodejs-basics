import {readdir, copyFile, mkdir, access} from 'fs/promises'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'


export const copy = async () => {

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const source = join(__dirname, 'files');
  const destination = join(__dirname, 'files-copy');

  try {
    if (await isExists(destination) || !await isExists(source)) {
      throw new Error('FS operation failed');
    }
    await mkdir(destination);
    const files = await readdir(source);
    for (let file of files) {
      const sourceFile = join(source, file);
      const destinationFile = join(destination, file);
      await copyFile(sourceFile, destinationFile);
    }
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

copy();
