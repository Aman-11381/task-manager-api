// this is the async wrapper that we are going to use to wrap every controller method to remove the try..catch blocks 

const asyncWrapper = (fn) => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next);
        } catch(error) {
            next(error);
        }
    }
}

module.exports = asyncWrapper;