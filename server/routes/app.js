import express from 'express';

import appController from '../controllers/app';

const router = express.Router();

router.get('*', appController.init);

export default router;
