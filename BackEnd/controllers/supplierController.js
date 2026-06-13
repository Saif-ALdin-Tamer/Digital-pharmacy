import Supplier from '../models/supplierModel.js';
import jwt from 'jsonwebtoken';

const generateToken = ( Id ) => {
    return jwt.sign({ Id }, process.env.JWT_SECRET ,{
        expiresIn: '10d'
    })
}


export const registerSupplier = async (req, res) => {
    try {
        const { supplierCompanyName, supplierCompanyEmail, addresOfSupplierCompany, password, phone } = req.body;
        const supplierExists = await Supplier.findOne({ supplierCompanyEmail });
        if (supplierExists) {
            return res.status(400).json({ 
                success: false,
                message: 'Supplier email already exists' 
            });
        } ;
        const supplier = await Supplier.create({
            supplierCompanyName,
            supplierCompanyEmail,
            addresOfSupplierCompany,
            password,
            phone
        });
        return res.status(201).json({
            success: true,
            message: 'Supplier registered successfully',
            data: {
                _id: supplier._id,
                supplierCompanyName: supplier.supplierCompanyName,
                supplierCompanyEmail: supplier.supplierCompanyEmail,
                token: generateToken(supplier._id)
            }
        });
    } catch ( error ) {
        console.error('Error in supplier registration:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message 
        });
    }
};


export const loginSupplier = async (req, res) => {
    try {
        const { supplierCompanyEmail, password } = req.body;
        const supplier = await Supplier.findOne({ supplierCompanyEmail });
        if (supplier && (await supplier.matchPassword(password))) {
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                data: {
                    _id: supplier._id,
                    supplierCompanyName: supplier.supplierCompanyName,
                    supplierCompanyEmail: supplier.supplierCompanyEmail,
                    token: generateToken(supplier._id)
                }
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password' 
            });
        }
    } catch ( error ) {
        console.error('Error in supplier login:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message 
        });
    }
};


export const getSupplierProfile = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.user.id).select('-password');
        
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found' 
            });
        } ;
        return res.status(200).json({
            success: true,
            data: supplier
        });
    } catch ( error ) {
        console.error('Error fetching supplier profile:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message 
        });
    }
};