
const ErrorHandler = require('../utils/errorhandler');
const Synn=require('./asyncError');
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')
const secretKey="4875475487AAAAA";

const isAuthenticatedUser=Synn(async (req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorHandler("please login to access this token",401))
    }
    const decodedData=jwt.verify(token,secretKey)
  req.user=  await User.findById(decodedData.id)
  next();
})

const authorizeRoles= (...roles)=>{
    console.log(roles)
return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
     return next(new ErrorHandler("tis user is not allowed ",403));
    }
    next();
}
}

module.exports={isAuthenticatedUser,authorizeRoles}
