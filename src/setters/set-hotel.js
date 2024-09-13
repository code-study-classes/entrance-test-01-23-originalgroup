import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync';
import reader from '../file-reader.js';
import setRegion from './set-region.js';

const setHotel = (name = '') => {
    let newHotel
    if (name === '') {
        newHotel = readlineSync.question('New hotel: ').toLowerCase().trim();
    } else newHotel = name;
    const id = getId('data/hotels.csv');
    const regionToAdd = readlineSync.question('Region: ').toLowerCase().trim();
    const regions = reader('data/regions.csv');
    const filtered = regions.filter((string) => {
        const [, name] = string.split(';');
        return name === regionToAdd ? true : false;
    });
    console.log(filtered);

    let regionId;
    if (filtered.length !== 0) {
        regionId = filtered.at(0).split(';').at(0);
    } else {
        console.log(`Region ${regionToAdd} does not exist.`);
        const markToAdd = readlineSync.question('Would you like to add region? [y/n]')
        .toLowerCase().trim();
        if (markToAdd === 'y') {
            regionId = setRegion(regionToAdd);
        } else {
            return false;
        }
    }
    updater('data/hotels.csv', `\n${id};${newHotel};${regionId}`)
    return id; 
};

export default setHotel;