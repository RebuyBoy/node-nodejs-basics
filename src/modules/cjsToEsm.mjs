import {fileURLToPath} from 'url'
import {dirname} from 'path'
import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.js';
import * as a from './files/a.json' assert {type: 'json'}
import * as b from './files/b.json' assert {type: 'json'}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a.default;
} else {
  unknownObject = b.default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
createMyServer.listen(8000);
console.log("server started on localhost:8000");
export {
  unknownObject, createMyServer
};
