import path from 'path'

import express, {Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

import errorHandler from '@controllers/error-handler'
import userRouter from '@routes/userRoute'
import tweetRouter from '@routes/tweetRoute'
import loginRouter from '@routes/authRoute'


dotenv.config({path: path.join(__dirname, '../.env')})

const app = express()
app.use(express.json())
app.use(cors())

if(typeof(process.env.NODE_ENV) === 'string' && process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}



const PORT: number = Number(process.env.PORT) || 3000
const localhost = `127.0.0.1`

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success'
    })
})

app.use('/users', userRouter)
app.use('/tweets', tweetRouter)
app.use('/account', loginRouter)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
   return next(new Error('This route is not implemented!'))
})
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening http://${localhost}:${PORT}`)
})