import { Router } from 'express';
import pilotController from './controllers/pilot';

const router = Router();

router.use('/pilot', pilotController);

export default router;
