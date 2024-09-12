import { fileURLToPath } from 'url'; 
import path from 'path';

const getPath = (fpath) => {
    const __filename = fileURLToPath(import.meta.url);
    //console.log(__filename);
    const __dirname = path.dirname(__filename);
    //console.log(__dirname);
    const filePath = path.join(__dirname, '..', fpath); 
    //console.log(filePath);
    return filePath;
};

export default getPath;