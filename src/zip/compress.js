import {createGzip} from "zlib";
import {open} from "fs/promises";
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {pipeline} from 'stream/promises';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = join(__dirname, 'files', 'archive.gz');

export const compress = async () => {
  try {
    const gzip = createGzip();
    const rs = (await open(sourcePath, 'r')).createReadStream();
    const ws = (await open(archivePath, 'w')).createWriteStream();
    await pipeline(rs, gzip, ws);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`);
  }
}
compress();