import express from 'express';

import auth from '../controllers/auth';
import productsController from '../controllers/products';

const router = express.Router();

router.get('/api/products', auth.authApi('user'), productsController.getList);
router.post('/api/products', auth.authApi('admin'), productsController.addOne);
router.delete('/api/products/:id', auth.authApi('admin'), productsController.delete);

export default router;
