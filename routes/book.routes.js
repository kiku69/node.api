import { Router, router } from 'express'
import { createBook } from '../controller/book.controller.js'
const router = Router();

router.post('/books', createBook);

export default router;