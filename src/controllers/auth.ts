/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";

import catchAsync from "@utils/catch-async";
import CustomError from "@utils/errors";
import { EMAIL_TOKEN_EXPIRES_IN_MLS, generateToken } from '@utils/index'

interface UserData {
    email: string;
}

const prisma = new PrismaClient()

export const login = catchAsync(async (req, res, next) => {
    /**
     * @TODO 
     * ** Get user email address
     * ** Check for an existing user or create one by email address
     * ** Generate a token
     */
    const { email }: UserData = req.body
    const expiration = new Date(new Date().getTime() + EMAIL_TOKEN_EXPIRES_IN_MLS)
    const emailToken = generateToken().toString()

    const user = await prisma.token.create({
        data: {
            type: 'EMAIL',
            expiration,
            emailToken,
            user: {
                connectOrCreate: {
                    where: {email},
                    create: {email}
                }
            }
        }
    })

    res.status(200).json({
       status: 'success',
       data: {
        user
       }
    })
})