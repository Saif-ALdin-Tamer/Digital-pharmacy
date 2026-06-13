import express from 'express' ;
import {getMyOrder, getOrder, createOrder} from '../controllers/orderController.js'

const router = express.Router()

router.get('/', getOrder)

router.get('/myOrder', getMyOrder)

router.post('/', createOrder)

export default router ;