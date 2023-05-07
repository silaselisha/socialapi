/**
 * @TODO
 * define operational and non-operational errors
 * define the status
 * define the status code
 */

class CustomError extends Error {
    public status: string
    public statusCode: number
    public isOperational: boolean

    constructor(message: string, statusCode: number) {
        super(message)
        this.status = statusCode.toString().startsWith('4') ? 'Fail' : 'Error'
        this.statusCode = statusCode
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)
    }
}

export default CustomError