import express from 'express';
import { book } from '../controller/book.js';

const router = express.Router();

router.get('/', book);


export default router;
