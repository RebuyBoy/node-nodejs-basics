import {access, writeFile} from 'fs/promises';

const filePath = new URL('./files/fresh.txt', import.meta.url);

export const create = async () => {
  try {
    if (await isExists(filePath)) {
      throw new Error('FS operation failed');
    }
    await writeFile(filePath, "I am fresh and young", {flag: "wx"});
  } catch (err) {
    console.error(err);
  }
};
create();

async function isExists(path) {
  try {
    await access(path)
    return true;
  } catch {
    return false;
  }
}