import {rename as renameFile} from 'fs/promises'

const dirname = new URL('./', import.meta.url);
const filePathOld = new URL('files/wrongFilename.txt', dirname);
const filePathNew = new URL('files/properFilename.md', dirname);

export const rename = async () => {
  try {
    await renameFile(filePathOld, filePathNew);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

rename();