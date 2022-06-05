import path from "path";
import {access, readdir} from "fs/promises";

const dirname = new URL("./", import.meta.url).pathname;
const folderPath = path.join(dirname, "files");

export const list = async () => {
  try {
    if (!await isExists(folderPath)) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(folderPath);
    files.forEach(file => console.log(file));
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

list();