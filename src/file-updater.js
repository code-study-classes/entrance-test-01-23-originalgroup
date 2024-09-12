import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';

const updater = (fPath, pattern) => {
    const filePath = getPath('data/regions.csv');
    // const newData = readlineSync.question('New region:').toLowerCase().trim();
    // const id = reader('data/regions.csv').split('\n').length;
    // console.log(oldData);
    fs.appendFileSync(filePath, pattern, 'utf-8');
    return true;
}
// `\n${id}|${newData}`