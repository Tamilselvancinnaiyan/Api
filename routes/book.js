import express from 'express';
import { book, getPosts, createPost } from '../controller/book.js';

const router = express.Router();

router.get('/', book);
router.get('/', getPosts);
router.post('/', createPost);


export default router;
