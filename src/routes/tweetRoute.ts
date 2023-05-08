import express from 'express'
import { getAllTweets, getTweet, createTweet, deleteTweet } from '@controllers/tweet-handler'
const router = express.Router()

router.route('/')
    .get(getAllTweets)

router.route('/:authId')
    .post(createTweet)

router.route('/:id')
    .get(getTweet)
    .delete(deleteTweet)

export default router