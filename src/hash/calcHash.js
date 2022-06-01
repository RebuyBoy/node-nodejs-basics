import crypto from 'crypto'
import {readFile} from 'fs/promises'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'

const {createHash} = await import('crypto');

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  try {

    const file = await readFile(filePath, 'utf-8');
    const hash = createHash('sha256');
    hash.update(file);
    console.log(hash.digest('hex'));
  } catch (err) {
    throw new Error('Something wrong');
  }
};

calculateHash();
