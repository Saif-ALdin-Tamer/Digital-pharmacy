import jwt from 'jsonwebtoken' ;
import admin from '../models/adminModel.js' ;


const generateTokrn = ( id ) => {
    return jwt.sign( {id}, process.env.JWT_SECRET, expiresIn({date:'10days'})
        ) ;
} ;

export const register = async (req, res) => {
    const name = req.body ;
    const email= req.body ;
    const password = req.body ;
    const userAlreadyExist = await admin.findOne({email})
    if ( userAlreadyExist ) {
        res.status(404).json({
            success: false ,
            message: 'user already exist'
        }) ;
    } ;
    const user = await admin.create({ name, email, password }) 
    res.status(201).json({
        _id = user.name ,
        email= user.email ,
        token: generateTokrn(user._id)
    }) ;
} ;


export const logIn = async (req, res) => {
    const {email, password } = req.body ;
    const user= await admin.findOne({email}) ;
    if( user && await user.matchassword( password ) ) {
        res.json({
            _id= user.id, 
            name= user.name ,
            email= user.email ,
            token= generateTokrn(user._id)
        }) ;
    } 
    else {
        res.status(404).json({
            success: false, 
            message: 'Invalid email Or password'
        })
    }
}