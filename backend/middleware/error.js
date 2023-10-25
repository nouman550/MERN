const ErrorHandler = require('../utils/errorhandler');
const errorHandler=require('../utils/errorhandler');

module.exports=(err,req,res,next)=>{
err.statusCode=err.statusCode || 500;
err.message=err.message || "internal server errr";

//error
if(err.name==="CastError"){
    const message="resources not found";
}
if(err.code===11000){
    const message=`Duplicate email ${Object.keys(err.keyValue)} entered`
    err=new ErrorHandler(message,400)
}
res.status(err.statusCode).json({
    success:false,
    error:err.stack,
})
}