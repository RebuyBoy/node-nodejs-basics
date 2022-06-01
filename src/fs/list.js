import path from "path";
import {readdir} from "fs/promises";

const dirname = new URL("./", import.meta.url).pathname;
const filePath = path.join(dirname, "files");

export const list = async () => {
  try {
    const files = await readdir(filePath);
    files.forEach(file => console.log(file));
  } catch (err) {
    throw new Error("FS operation failed");
  }
};
list();