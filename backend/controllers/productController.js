const Product=require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const Synn=require('../middleware/asyncError');
const ApiFeatures = require('../utils/apifeatures');
//create product
exports.createProduct=Synn(async(req,res,next)=>{
    req.body.user=req.user.id
const product= await Product.create(req.body);
console.log(product)
res.status(200).json({
    success:true,
    product
})
});

//find product in databaee.....
exports.getAllProducts=Synn(async(req,res,next)=>{
 
    const resultPerpae=8;

    const apiFeature=new ApiFeatures(Product.find(),req.query).search().
    filter().
    pagination(resultPerpae);
    const productCount=await Product.countDocuments()
    
    const products= await apiFeature.query
    res.status(200).json({
        success:true,
        products,
        productCount,

    })
    
});

//find only required product....
exports.findSingleProduct=Synn(async(req,res,next)=>{
 const oneProduct=await Product.findById(req.params.id);
 if(!oneProduct){
    return  next(new ErrorHandler("product not found",404))
   
 }

 res.status(200).json({
    success:true,
    oneProduct
})

});
///now we will develop for update products..
exports.updateProducts=Synn(async(req,res,next)=>{
    let product= await Product.findById(req.params.id);

    if(!product){
        return  next(new ErrorHandler("product not found",404))
    }

    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
        runValidators:true,useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    })
    
}
);
//delete product by admin

exports.deleteProducts=Synn(async(req,res,next)=>{
    const product=await Product. findById(req.params.id);
    if(!product){
        return  next(new ErrorHandler("product not found",404))
    }
    await product.remove()

    res.status(200).json({
        success:true,
        Message:"product is deleted peramatnely"
    })
    console.log(product)
});

//user can add review of relevant products

exports.addReviews=Synn(async(req,res,next)=>{
    const {rating,comment,productId}=req.body
    const review={
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment,
       
    };
    console.log(review)
    const product=await Product.findById(productId)

    const isReviewed=product.reviews.find(
        (rev)=>rev.user.toString()===req.user._id.toString());
    console.log(isReviewed)
    if(isReviewed){
    product.reviews.forEach(rev=>{
        if(rev.user.toString()===req.user._id.toString())
        (rev.rating=rating),
        (rev.comment=comment)
    })
    }
    else{
        console.log(review)
        product.reviews.push(review)
        product.numofReviews=product.reviews.length
    }
let avg=0;
    product.reviews.forEach((rev)=>{
     avg+=rev.rating
    })

    product.ratings=avg/product.reviews.length

    await product.save({validateBeforeSave:false })
      
    res.status(200).json({
        success:true,
        message:"reviews addedd"

    })
})

//delete a review as a admin

exports.deleteReview=Synn(async(req,res,next)=>{
 const product=await Product.findById(req.query.productId);

 if(!product){
    return  next(new ErrorHandler("product not found",404))
 }
 const reviews=product.reviews.filter(rev=>rev._id.toString()!==req.query.id.toString());
 
 let avg=0;
    reviews.forEach((rev)=>{
     avg+=rev.rating
    });
    const ratings=avg/reviews.length;

const numofReviews=reviews.length;

await Product.findByIdAndUpdate(req.query.productId,{
    reviews,
    ratings,
    numofReviews
},
{
    new:true,
    runValidators:true,
    useFindAndModify:false
}
)
 res.status(200).json({

 
     success:true,
     message:"revies is deleted"
 })

})

//visible all reviews

exports.findReview=Synn(async(req,res,next)=>{
const product=await Product.findById(req.query.id)

if(!product){
    return  next(new ErrorHandler("product not found",404))
 }


res.status(200).json({

 
     success:true,
     reviews:product.reviews,
     
 })
}) 

