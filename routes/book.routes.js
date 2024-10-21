import { Router, router } from 'express'

const router = Router();

router.post('/books', createBook);

export default router;