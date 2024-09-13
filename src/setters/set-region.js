import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from "readline-sync";

const setRegion = (name='') => {
    let newRegion
    if (name === '') {
        newRegion = readlineSync.question('New region: ').toLowerCase().trim();
    } else newRegion = name;
    const id = getId('data/regions.csv');
    updater('data/regions.csv', `\n${id};${newRegion}`);
    return id;
}

export default setRegion;