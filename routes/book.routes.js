import { Router, router } from 'express'
import { createBook, updateBook } from '../controller/book.controller.js'
const router = Router();

router.post('/books', createBook);
router.put('/book/:id', updateBook)

export default router;