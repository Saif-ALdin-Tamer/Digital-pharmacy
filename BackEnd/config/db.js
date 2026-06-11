
import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;

dotenv.config()
let cachedConnection= null ;

const connectToMongoDB = async () => {
    if (cachedConnection && mongoose.connection.readyState === 1) {
        return cachedConnection 
    }
    try {
        cachedConnection = await mongoose.connect( process.env.MONGO_URL )
        console.log('Database is Connected Successfully') ;
        return cachedConnection 
    } catch ( error ) {
        cachedConnection = null ;
        console.log('MongoDb failed to connect', error.message )
    }
}


export default connectToMongoDB