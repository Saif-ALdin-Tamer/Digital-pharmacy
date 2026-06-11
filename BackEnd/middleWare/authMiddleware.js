import jwt from 'jsonwebtoken'
import admin from '../models/adminModel.js'

const protect = async function (req, res, next) {
    let token = req.header.authorization ;
    if (token && token.startsWith('Bearer') ) {
        try {
            token.split(' ') [1] ;
            const decode = jwt.verify(token, process.env.JWT_SECRET ) ;
            req.admin = await findById(decode.id).select('-password' ) ;
            next()
        } catch ( error ) {
                console.error('Token verification faild', error.message)
                return res.status(401).json({
                    message: 'faild verification '
                })
            }
        } else {
            console.error('No authorization No token', error.message)
        }
    }

export default protect ;