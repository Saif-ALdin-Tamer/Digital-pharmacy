import mongoose from 'mongoose' ;
import bcrypt from 'bcrypt' ;

const supplierSchema = new mongoose.Schema(
    {
        supplierCompanyName: {
            type: string ,
            required: true 
        } ,
        supplierCompanyEmail: {
            type: string ,
            unique: true ,
            required: true 
        } ,
        addresOfSupplierCompany: {
            required: true ,
        } ,
        password: {
            required: true
        } ,
        phone: {
            required: true ,
            type: Number
        }
    } ,
    {
        timestamps: true 
    } 
) ;

supplierSchema.pre('save', async function () {
    if (!this.isModified('password')) return ;
    const salt = await bcrypt.genSalt(10) ;
    this.password = await bcrypt.hash(this.password, salt)
} )

supplierSchema.methods.matchPassword = async function ( enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
    
}
export default mongoose.model('Supplier', supplierSchema) ;