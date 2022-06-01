import {writeFile} from 'fs/promises';

const filePath = new URL('./files/fresh.txt', import.meta.url);

export const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", {flag: "wx"})
  } catch (err) {
    throw new Error("FS operation failed");
  }
};
create();