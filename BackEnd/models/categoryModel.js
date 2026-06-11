import mongoose from 'mongoose' ;

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String ,
            unique: true ,
            required: true
        } ,
        slug: {
            type: String,
            unique: true,
    },
        description: {
            type: String,
    },
    image: {
        type: String,
    }
    },
    { timestamps: true }
    
)

export default mongoose.model('Category', categorySchema ) ; 