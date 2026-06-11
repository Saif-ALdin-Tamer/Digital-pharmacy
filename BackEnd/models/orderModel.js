import mongoose from 'mongoose' ;


const orderSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'Admin' ,
            required: true
        } ,
        pharmacyId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Admin' ,
            unique: true ,
            required: true 
        } ,
        status: {
            default: pending ,
            type: String , 
            enum: ['pending', 'shipped', 'confirmed' ,
                'delivered', 'cancelled']
        } ,
        shipmentAddres: {
            required: true ,
            type: String
        } ,
        items: [ {
            product: {
                required: true ,
                type : mongoose.Schema.Types.ObjectId ,
                ref: 'Product'
            } ,
            quantity: {
                required: true ,
                type: Number ,
                min: 1 ,
            } ,
            price: {
                required: true ,
                type: Number ,
            }
        } ] , 
        paymentMethod: {
            required: true ,
            enum: ['cash', 'online',] ,
            type: String ,
        } ,
        totalAmount: {
            required: true,
            type: Number
        } 
    } ,
    { 
        timestamps: true
    }
) ;

export default mongoose.model('Order', orderSchema)