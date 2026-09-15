
export function createError(statusCode, message) {
    const error = new Error(message)
    error.statusCode = statusCode
    return error
}

export function errorHandler(err, req, res, next) {
    console.log(err)
    if(err.statusCode){
        res.status(err.statusCode).json({result : err.message})
    }
    else{
        res.status(500).json({result : "something went wrong"})
    }
}