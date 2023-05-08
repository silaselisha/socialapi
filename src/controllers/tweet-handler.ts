/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'

import catchAsync from "@utils/catch-async";
import CustomError from "@utils/errors";

const prisma = new PrismaClient()

/**
 * @TODO
 * Perform CRUD operations on Resource /tweets
 */

export const getAllTweets = catchAsync(async (req, res, next) => {
    const tweets = await prisma.tweet.findMany()

    res.status(200).json({
        status: 'success',
        results: tweets.length,
        data: {
            tweets
        }
    })
})

export const getTweet = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const tweet = await prisma.tweet.findUnique({where: {id: Number(id)}})

    res.status(200).json({
        status: 'success',
        data: {
            tweet
        }
    })
})

export const createTweet = catchAsync(async (req, res, next) => {
    const { title, content } = req.body
    const { authId } = req.params

    const tweet = await prisma.tweet.create({
        data: {
            title,
            content,
            authorId: Number(authId)
        }
    })

    res.status(200).json({
        status: 'success',
        data: {
            tweet
        }
    })
})

export const deleteTweet = catchAsync(async (req, res, next) => {
    const { id } = req.params
    await prisma.tweet.delete({where: {id: Number(id)}})

    res.status(204).json({
        status: 'success',
        data: null
    })
})



