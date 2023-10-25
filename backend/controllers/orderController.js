const Order=require('../models/orderModel');
const Product=require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const Synn=require('../middleware/asyncError');


//create new order
exports.newOrder=Synn(async(req,res,next)=>{
const{shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice}=req.body;

    const order=await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id
    });
  
  
    res.status(201).json({
        success:true,
        order
       
    });
 
})

//find one order  details....only logged in users can see it

exports.findOneOrder=Synn(async(req,res,next)=>{
    const order=await Order.findById(req.params.id).populate("user","name  email");

    if(!order){
        return next(new ErrorHandler("order is not found",404))
    }

    res.status(200).json({
        succes:true,
        order
    })
})


exports.myOrders=Synn(async(req,res,next)=>{
    const order=await Order.find({
        user:req.user._id
    })

  

    res.status(200).json({
        succes:true,
        order
    })
})

//find all orders by admin
exports.allOrders=Synn(async(req,res,next)=>{
    const order=await Order.find()

  let totalAmout=0;
  order.forEach(orders=>{
    totalAmout +=orders.totalPrice;
  })

    res.status(200).json({
        succes:true,
        totalAmout,
        order
    })
})

//update status of  orders by admin......
exports.updateOrders=Synn(async(req,res,next)=>{
    const order=await Order.findById(req.params.id)


    if(order.orderStatus==="Delivered"){
        return next(new ErrorHandler("you  deliverd order alread",400));
    }

order.orderItems.forEach(async(o)=>{
    await updateStock(o.product,o.quantity)
})
  
order.orderStatus=req.body.status;


if(req.body.status==="Delivered"){
order.deliveredAt=Date.now();
}

await order.save({validateBeforeSave:false});

    res.status(200).json({
        succes:true,
       
        order
    })
})


async function updateStock(id,quantity){
const product=await Product.findById(id);

product.Stock=product.Stock-quantity;

await product.save({validateBeforeSave:false})
}



//delete  orders by admin......
exports.deleteOrder=Synn(async(req,res,next)=>{
    const order=await Order.findById(req.params.id);

    if(!order){
        return next(new ErrorHandler("order is not found",404))
    }
    await order.remove();



    res.status(200).json({
        succes:true,
       
      
    })
})

