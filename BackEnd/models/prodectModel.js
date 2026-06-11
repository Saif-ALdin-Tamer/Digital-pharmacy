import mongoose from 'mongoose' ;


const productSchema = new mongoose.Schema (
    {
        name: {
            unique: true ,
            type: String ,
            required: true ,
        } ,
        description: {
            type: String ,
            required: true 
        } ,
        Id: {
            unique: true, 
            required: true ,
            type: Number ,
        } ,
        isAvaliable: {
            default: true,
            
        } ,
        stock: {
            default: 0 ,
            type: Number 
        } ,
        category: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Category' ,
            required: true ,
            type: String
        } ,
        price: {
            required: true ,
            type: Number
        } ,
        image: {
            type: String
        } ,
        supplier: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Supplier'
        }
    } ,
    {
        trimestamps: true ,
    }
) ;


export default mongoose.model('Product', productSchema) ;