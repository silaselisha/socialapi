import catchAsync from "src/utils/catch-async";
// import CustomError from "../../utils/errors";

export const getAllUsers = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: 'success',
        results: '200000000',
        data: {

        }
    })
})

