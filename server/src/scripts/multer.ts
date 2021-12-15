import multer from 'multer';
import path from 'path';
import {v4} from 'uuid';

// Settings
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname))
    }
});
export default multer({storage});