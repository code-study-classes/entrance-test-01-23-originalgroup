import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';
import reader from "./file-reader.js";

const filePath = getPath('data/regions.csv');
const newData = readlineSync.question('New region:').toLowerCase().trim();
const oldData = reader('data/regions.csv').split('\n').length;
//console.log(oldData);
fs.appendFileSync(filePath, `\n${id}|${newData}`, 'utf-8');