import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';

const updater = (fPath, pattern) => {
    const filePath = getPath(fPath);
    // console.log(oldData);
    fs.appendFileSync(filePath, pattern, 'utf-8');
    return true;
}
// `\n${id}|${newData}`

export default updater;