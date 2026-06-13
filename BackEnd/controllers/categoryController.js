import Category from '../models/categoryModel.js'
import admin from '../models/adminModel.js'

export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find() ;
        res.status(200).json({
            success: true ,
            data: category
        }) ;
    } catch( error ) {
        console.error('Internal server error'. error.message) ;
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    })
    } ;
}

export const getCategoryById = async (req, res ) => {
    try {
        const category = await Category.findById (req.params.id) ;
        if( ! category ) {
            return res.status(404).json({
                success: false ,
                message: 'Category not found'
            }) ;
        } 
        else {
            return res.status(200).json({
                success: true ,
                data: category ,
            }) ;
        } ;
    } catch ( error ) {
        res.status(500).json({
            success: false ,
            message: 'Internal server error '
        }) ;
    } ;
}

export const createdCategory = async ( req, res ) => {
    try {
        const { name, description,  image } = req.body ;
        const slug = name.toLowerCase().replace(/\s+/g, '-'); 
        const creatInCategory = await Category.create({
            name: name ,
            slug: slug ,
            description: description ,
            image: image 
        })
        res.status(201).json({ 
            success: true ,
            data: createdCategory
        })
    } catch ( error ) {
        if (error.code === 11000) {
        return res.status(400).json({ 
            success: false, 
            message: 'This category already exist ' 
        });
    } else {
        res.status(500).json({
            success: false, 
            message: 'internal server error ', 
            error: error.message 
        });
    }
  } 
} ;

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate( req.params.id ) ;
        if (!category ) {
            return res.status(404).json({
                success: false , 
                message:'Category is not exist'
            }) ;
        } else {
            return res.status(201).json({
                data: category ,
                success: true 
            }) ;
        }
    } catch ( error ) {
        res.status(400).json({ 
            success: false,
            message: 'Update failed'
        });
    }
}

export const deletedCategory = async (res, res ) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id) ;
        if ( !category) {
            return res.status(404).json({
                success: false ,
                message: 'Category not found'
            }) ;
        } else {
            return res.status(201).json({
                success: true ,
                data: category ,
                messgae: 'Category Deleted '
            })
        }
    } catch ( error ) {
        return res.status (404).json({
            success:false, 
            message: 'Server error '
        })
    } 
}