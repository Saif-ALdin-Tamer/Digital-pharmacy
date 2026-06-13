import express from 'express' ;
import {createdCategory, getAllCategory, getCategoryById,
        updateCategory, deletedCategory } 
        from '../controllers/categoryController.js' ;

const router = express.Router()


router.put('/:id', updateCategory) ;

router.delete('/:id', deletedCategory) ;

router.post('/', createdCategory) ;

router.get('/:id', getCategoryById) ;

router.get('/', getAllCategory) ;



export default router ;