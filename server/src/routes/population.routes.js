import express from 'express';
import { syncPopulation } from '../controllers/population.controller.js';

const router = express.Router();

router.post('/admin/sync/populations', syncPopulation);

export default router;
