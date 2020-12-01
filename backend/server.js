import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddelware.js'
import productRoute from './routes/productRouter.js'

dotenv.config()


// Initializing Mongoose database
connectDB()

const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/products', productRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
