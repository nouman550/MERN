const My=require('../models/myModel');
const ErrorHandler = require('../utils/errorhandler');
const Synn=require('../middleware/asyncError');
const ApiFeatures = require('../utils/apifeatures');


//add comment by any user...
exports.createComment=Synn(async(req,res,next)=>{
  console.log("fine");
const product= await My.create(req.body);
console.log("fine"+product)
res.status(200).json({
  success:true,
  product
})

});

//delete comment by user.........

exports.deleteComment=Synn(async(req,res,next)=>{
  console.log("delete product...")

  const product= await My.findById(req.params.id);
  if(!product){
    return next(new ErrorHandler("cannot find product",404));
  }
  
   await product.remove();

  res.status(200).json({
    success:true,
    Message:"product deleted successfully"
  })

})

//update comment.....

exports.updateComment=Synn(async(req,res,next)=>{
console.log("update product....");
let product=await My.findById(req.params.id);
if(!product){
  return  next(new ErrorHandler("product is not available",404))
}

product=await My.findByIdAndUpdate(req.params.id,req.body,{
  new:true,runValidators:true,useFindAndModify:false
})
res.status(200).json({
  success:true,
  product
})
})

//search a comment....

exports.searcComment=Synn(async(req,res,next)=>{
  console.log("find product...")

  const product= await My.findById(req.params.id);
  if(!product){
    return next(new ErrorHandler("cannot find product",404));
  }
  

   

  res.status(200).json({
    success:true,
    product,
    Message:"product find successfully"
  })

})
