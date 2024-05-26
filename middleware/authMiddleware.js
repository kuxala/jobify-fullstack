import {verifyJWT} from "../utils/tokenUtils.js"
import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/costumError.js";

export const authenticateUser =  (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError("Authentication invalid");

  try {
    const {userId, role} = verifyJWT(token)
    const testUser = userId === '6651dcc8a6e95dfcff46797a'  
    req.user = {userId, role, testUser}
    
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export const authorizePermissions = (...roles) =>{
  return (req,res,next) => {
    if(!roles.includes(req.user.role)){
      throw new UnauthorizedError("unauthorized")
    }
    console.log(roles);
    next()
  }
  
}


export const checkForTestUser = (req,res, next) => {
  if (req.user.testUser) throw new BadRequestError("You can not perform this action as a test user")
    next()
}