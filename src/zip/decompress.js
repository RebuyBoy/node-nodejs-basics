import {createGunzip} from "zlib";
import {open} from "fs/promises";
import {join, dirname} from 'path';
import {fileURLToPath} from 'url'
import {pipeline} from 'stream/promises';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const archivePath = join(__dirname, 'files', 'archive.gz');
const destinationPath = join(__dirname, 'files', 'fileToCompress.txt');

export const decompress = async () => {
  try {
    const gunzip = createGunzip();
    const rs = (await open(archivePath, 'r')).createReadStream();
    const ws = (await open(destinationPath, 'w')).createWriteStream();
    await pipeline(rs, gunzip, ws);
  } catch (err) {
    console.error(`${err.name}: ${err.message}`)
  }
}
decompress();