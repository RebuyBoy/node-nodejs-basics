
// You should refactor file (you can add additional imports if needed)
// cjsToEsm.js - rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const path = require('path');
const { release, version } = require('os');
const { createServer: createServerHttp } = require('http');
require('./files/c');
const __filename = fileURLToPath(import.meta.url)

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

module.exports = {
    unknownObject,
    createMyServer,
};

