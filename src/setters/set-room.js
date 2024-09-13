import updater from '../file-updater.js';
import getId from '../getters/get-id.js';
import readlineSync from 'readline-sync';
import reader from '../file-reader.js';
import setHotel from './set-hotel.js';

const setRoom = () => {
    const id = getId('data/rooms.csv');
    const name = readlineSync.question('New name: ').toLowerCase().trim();
    const category = readlineSync.question('Choose category:\n1 | Стандарт\n2 | Люкс\n3 | Апартаменты\n').toLowerCase().trim();
    if (category > 3 || category < 1) {
        console.log('Wrong Category');
        return false;
    }
    const beds = category > 2 ? 4 : 2;
    const status = 'free';
    const hotels = reader('data/hotels.csv');
    const hotelToAdd = readlineSync.question('Hotel: ').toLowerCase().trim();
    const filtered = hotels.filter((string) => {
        const [, name] = string.split(';');
        return name === hotelToAdd ? true : false;
    });
    console.log(filtered);

    let hotelId;
    if (filtered.length !== 0) {
        hotelId = filtered.at(0).split(';').at(0);
    } else {
        console.log(`Hotel ${hotelToAdd} does not exist.`);
        const markToAdd = readlineSync.question('Would you like to add hotel? [y/n]')
        .toLowerCase().trim();
        if (markToAdd === 'y') {
            hotelId = setHotel(hotelToAdd);
        } else {
            return false;
        }
    }
    updater('data/rooms.csv', `\n${id};${name};${category};${beds};${status};${hotelId}`)
    return true; 
};

setRoom();