import {readFile} from 'fs/promises'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'
const {createHash} = await import('crypto');


export const calculateHash = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const file = await readFile(filePath, 'utf-8');
    const hash = createHash('sha256');
    hash.update(file);
    const hashHex = hash.digest('hex');
    console.log(hashHex);
    return hashHex;
  } catch (err) {
    throw new Error('Something wrong');
  }
};

calculateHash();
