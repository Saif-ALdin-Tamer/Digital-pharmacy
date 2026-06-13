import Product from '../models/prodectModel.js'

export const creatProduct = async (req, res) => {
    try{
    const { name, price, description, category,
            quantityInStock, pharmacyId } = req.body;
    if( !name && !price ) {
        return res.status(400).json({
            message: 'please add a name and price of product'
        })
    }
    const createNewProduct = Product.create({
        name, 
        quantity,
        category,
        price,
        description ,
        pharmacy: pharmacyId
        })
        return res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: newProduct
    });
    } catch (error ) {
        console.error('Error creating order ', error.message) 
        res,status(500).json({
            success: false ,
            message: 'internal server error'
        })
    }
}



export const getAllProduct =  async (req, res) => {
    try{
        const product = await Product.find() ;
        res.status(200).json({
            data: product ,
            success: true ,
        })
    } catch (error ) {
        console.error('Error creating order ', error.message) 
        res,status(500).json({
            success: false ,
            message: 'internal server error'
        })
    }
}



export const getSpecificProduct =  async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        .populate('user', 'fullName email')
        if( !product ) {
                return res.status(404).json({
                success: false,
                message: 'No product found'
            });
        }
        res.status(200).json({
            data: product ,
            success: true ,
        })
    } catch (error ) {
        console.error('Error creating order ', error.message) 
        res.status(500).json({
            success: false ,
            message: 'internal server error'
        })
    }
}



export const updateProduct =  async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate( req.params.id, req.body,  {
            new: true,
            runValidation: true 
        })
        if( !product ) {
            res.status(404).json({
                succes: false ,
                message: 'Updated faild'
            })
        }
        res.status(200).json({
            message: 'Product updated successfully' ,
            succes: true ,
            data: product
        })
    } catch (error ) {
        console.error('Error updating order ', error.message) 
        res,status(500).json({
            success: false ,
            message: 'internal server error'
        })
    }
}



export const deleteProduct =  async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete( req.params.id) ;
        if ( !product ) {
            res.status(404).json({
                succes: false ,
                message: 'Product not found'
            }) ;
        } 
        res.status(200).json({
            succes: true ,
            message: 'product deleted successfully' ,
            data: product 
        })
    } catch (error ) {
        console.error('Error creating order ', error.message) 
        res,status(500).json({
            success: false ,
            message: 'internal server error'
        })
    }
}