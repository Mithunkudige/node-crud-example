import express from 'express';

import { createBook, getBooks, getBook, updateBook, deleteBook, patchBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/books', createBook);

router.put('/books/:id', updateBook);

router.patch('/books/:id', patchBook);

router.delete('/books/:id', deleteBook);

export default router;