import fs from 'fs';
import getPath from './get-path.js';

const filePath = getPath('data/regions.csv');
const fileData = fs.readFileSync(filePath, 'UTF-8');
console.log(fileData);
