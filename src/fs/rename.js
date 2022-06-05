import {access, rename as renameFile} from 'fs/promises'

const dirname = new URL('./', import.meta.url);
const filePathOld = new URL('files/wrongFilename.txt', dirname);
const filePathNew = new URL('files/properFilename.md', dirname);

export const rename = async () => {
  try {
    if (!await isExists(filePathOld) || await isExists(filePathNew)) {
      throw new Error('FS operation failed');
    }
    await renameFile(filePathOld, filePathNew);
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

rename();