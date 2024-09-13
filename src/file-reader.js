import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';

const reader = (fPath) => {
    const filePath = getPath(fPath);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    //console.log(fileData);
    return fileData.split('\n');
};

export default reader;
