import express from 'express';

import productsController from '../controllers/products';

const router = express.Router();

router.get('/api/products', productsController.getList);
router.post('/api/products', productsController.addOne);
router.delete('/api/products/:id', productsController.delete);

export default router;
