import express from 'express' ;

import authRoutes from './authRoutes' ;
import categoryRoutes from './categoryRoutes' ;
import orderRoutes from './orderRoutes' ;
import prodectRoutes from './productRoutes';
import supplierRoutes from './supplierRoutes' ;


const router = express.Router() ;

router.user('/auth', authRoutes) ;
router.user('/category', categoryRoutes) ;
router.user('/order', orderRoutes) ;
router.user('/product', prodectRoutes) ;
router.use('/supplier', supplierRoutes) ;


export default router;