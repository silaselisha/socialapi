/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction} from 'express'

interface ErrorTypes extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
}

const errorHandler = (err: ErrorTypes, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'Error'
   
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        stack: err.stack,
        message: err.message,
    })
}

export default errorHandler