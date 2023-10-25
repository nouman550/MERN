const Cv=require('../models/cvModel');
const ErrorHandler = require('../utils/errorhandler');
const Synn=require('../middleware/asyncError');
const ApiFeatures = require('../utils/apifeatures');
//create cv
exports.createCv=Synn(async(req,res,next)=>{
    req.body.user=req.user.id
const cv= await Cv.create(req.body);
console.log(product)
res.status(200).json({
    success:true,
    cv
})
});












