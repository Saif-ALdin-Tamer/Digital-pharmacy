import express from 'express' ;
import {creatProduct, deleteProduct, getAllProduct,
        updateProduct, getSpecificProduct} 
        from '../controllers/prodectController.js'

const router = express.Router();

router.get('/', getAllProduct);

router.get('/:id', getSpecificProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;