import express, {Request, Response, NextFunction } from 'express'
import cors from 'cors'


import errorHandler from './controllers/error-handler'
import userRouter from './routes/userRoute'
import tweetRouter from './routes/tweetRoute'

const app = express()
app.use(express.json())
app.use(cors())

const PORT: number = Number(process.env.PORT) || 3000
const localhost: string = `127.0.0.1`

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success'
    })
})

app.use('/users', userRouter)
app.use('/tweets', tweetRouter)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
   return next(new Error('This route is not implemented!'))
})
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening http://${localhost}:${PORT}`)
})