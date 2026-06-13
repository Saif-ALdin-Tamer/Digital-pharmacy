import express from 'express';
import { registerSupplier, loginSupplier, getSupplierProfile } from '../controllers/supplierController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/register', registerSupplier);
router.post('/login', loginSupplier);


router.get('/profile', protect, getSupplierProfile);

export default router;