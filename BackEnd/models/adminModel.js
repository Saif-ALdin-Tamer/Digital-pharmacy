import mongoose from 'mongoose' ;
import bcrypt from 'bcrypt' ;

const adminSchema = new mongoose.Schema( 
    {
        name: {
            type: String, 
            required: true
        } ,
        Id: {
            type: Number,
            unique: true,
            required: true
        } ,
        email: {
            type: String , 
            unique:true , 
            required: true
        } ,
        password: {
            type: string,
            required: true
        } ,
        role: {
            type: string ,
            default: 'pharmacist' ,
        } ,
        pharmacyName : {
            type: string
        } ,
        isVerifieed: {
            default: false 
        }
    }, 
    {
        timestamps: true
    } ,
) ;

adminSchema.pre('save', async function () {
    if (!this.isModified(password)) return ;
    const salt = await bcrypt.genSalt(10) ;
    this.password = await bcrypt.hash(this.password, salt)
}) ;

adminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare( enteredPassword, this.password ) ;
    
} ;

export default mongoose.model('Admin', adminSchema) ;
