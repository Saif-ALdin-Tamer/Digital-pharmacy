import dotenv from 'dotenv'
dotenv.config() 
import express from 'express' ;
import connectDB from './config/db.js'
import mainRouter from './routes/index.js'
PORT = 5000 ;
const app =  express()

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('api', mainRouter)