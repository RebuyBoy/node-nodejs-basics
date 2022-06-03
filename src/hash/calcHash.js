import {readFile} from 'fs/promises'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'

const {createHash} = await import('crypto');

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  try {
    const file = await readFile(filePath, 'utf-8');
    return createHash('sha256')
      .update((file))
      .digest('hex');
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
};

console.log(await calculateHash());
