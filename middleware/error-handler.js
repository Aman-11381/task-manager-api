// this is the custom error handler that we can set according to our needs...this is provided to us by express (documentation) 

const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({message: err.message});
}

module.exports = errorHandlerMiddleware;