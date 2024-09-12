import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';

const filePath = getPath('data/regions.csv');
const newData = readlineSync.question('New region: ').toLowerCase().trim();
fs.appendFileSync(filePath, `\n${newData}`, 'UTF-8');
