import { PrismaClient } from '@prisma/client'

import catchAsync from "@utils/catch-async";
import CustomError from "@utils/errors";

/**
 * @TODO 
 * establish a connection to QUERY INTERFACE DATABASE
 */
const prisma = new PrismaClient()

interface UserData {
    email:      string;
    image?:     string;
    username:   string;
    bio?:       string;
}

export const getAllUsers = catchAsync(async (req, res, next) => {
    const users = await prisma.user.findMany()

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })
})

export const getUser = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({where: {id: Number(id)}})

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})

export const createUser = catchAsync(async (req, res, next) => {
    const {username, email, bio, image}: UserData = req.body

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            bio,
            image
        }
    })


    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    })
})

export const updateUser = catchAsync(async (req, res, next) => {
    /**
     * @TODO
     * not to update the user email address
     */
    const { username, image, bio } = req.body
    const {id} = req.params

    const user = await prisma.user.update({where: {id: Number(id)}, data: {username, bio, image}})


    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
})

export const deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({where: {id: Number(id)}})

    if(!user) {
        return next(new CustomError('user not found!', 404))
    }

    await prisma.user.delete({where: {id: Number(id)}})

    res.status(204).json({
        status: 'success',
        data: null
    })
})