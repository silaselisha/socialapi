import express, { Request, Response, NextFunction } from 'express'

interface AsyncHandlerType {
    (req: Request, res: Response, next: NextFunction): Promise<void>
}

const catchAsync = (cb: AsyncHandlerType) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        return cb(req, res, next).catch((err: Error) => next(err))
    }
}

export default catchAsync