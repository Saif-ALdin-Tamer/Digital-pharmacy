import Order from '../models/orderModel.js' ;
import Product from '../models/prodectModel.js' ;

export const createOrder = async (req, res) => {
    try {
    const { pharmacyId, shipmentAddress, paymentMethod, items } = req.body;
    const customerId = req.user._id; 
    if (!items || items.length === 0) {
        return res.status(400).json({ message: 'No items to order' });
    }
    let totalPrice = 0;
    const orderItems = []; 
    for (let everyItem of items) {
        const item = everyItem; 
        const product = await Product.findById(item.product);
        if (!product) {
        return res.status(404).json({ message: 'No product to order' });
            }
        totalPrice += product.price * item.quantity;
        orderItems.push({
            product: product._id,
            quantity: item.quantity,
            price: product.price
        });
    }
    const newOrder = await Order.create({
        user: customerId,
        items: orderItems, 
        totalPrice,
        shipmentAddress,
        pharmacyId,
    });
    return res.status(200).json({
        success: true,
        message: 'Order created.',
        data: newOrder
    });
    } catch (error) {
    console.error('Error creating order:', error.message);
    return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message
    });
    }
};

export const order = async (req, res ) => {
    try {
        const getMyOrder = await Order.find({ user: req.user._id })
        .populate('items.product', 'name image price'); 
        return res.status(200).json({
            success: true , 
            data: order ,
            count: order.length
        }) ;
    } catch ( error ) {
        console.error ('', error.message ) ;
        return res.status(500).json({
            success: false, 
            message: 'internal server error'
        })
    }
} ;

export const getMyOrder = async (req, res ) => {
    try {
        const order = await Order.findById({user: req.params.id})
        .populate('user', 'name email')
        .populate('items.product', 'name image price'); 
        if (!order ) {
            return res.status(404).json({
                success: false ,
                message: 'order not found  ' 
            }) 
        }
        res.status(200).json({
            success: true ,
            data: getMyOrder 
        })
    } catch ( error ) {
        res.status(500).json({
            message: 'internal server error ' ,
            success: false
        })
    }
}