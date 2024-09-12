import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from "readline-sync";

const setRegion = (fPath) => {
    const newRegion = readlineSync.question('New region: ').toLowerCase().trim();
    const id = getId(fPath);

    updater('data/regions.csv', `\n${id}|${newRegion}`);
    return true;
}

setRegion('data/regions.csv');