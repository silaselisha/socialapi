import express from 'express'
import { getAllTweets } from '../controllers/tweet-handler'
const router = express.Router()

router.route('/')
    .get(getAllTweets)

export default router