import express from 'express';
import upload from './../scripts/multer';

const router = express.Router();

// Component

import {getBoard} from "../api/boards/controller";

//Routes

router.route('/boards')
    .get(getBoard)
    .post()
    
export default router;