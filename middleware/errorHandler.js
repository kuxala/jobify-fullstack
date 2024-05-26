import { StatusCodes } from "http-status-codes";


const errorHandler = (err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    res.status(statusCode).json({ message: "Something went wrong", err});
  }

export default errorHandler