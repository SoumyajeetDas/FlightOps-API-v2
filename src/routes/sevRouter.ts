import express from 'express';
import {
  addSev,
  deleteSev,
  getSev,
  getStats,
  updateSev,
} from '../controller/sevController';

const router = express.Router();

router.use(express.json());

router.route('/').post(addSev).get(getSev);

router.route('/:id').put(updateSev).delete(deleteSev);

router.get('/stats', getStats);

export default router;
