const mongoose =require('mongoose');

const productShema=new mongoose.Schema({
    name:{
      type:String,
      required:[true,"please enter product name"],
      trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product Descrition "]
    },
    price:{
        type:Number,
        required:[true,"please enter product price "],
        maxLength:[8,"please enter valide price"]
    },
    ratings:
    {
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required:[true,"image id is required and cannot be undonw"]
        },
        url:{
            type:String,
            required:[true,"image id is required and cannot be undonw"]
        }
    }],
    category:{
  type:String,
  required:[true,"please enter product category"]
    },
    stock:{
        type:Number,
        required:[true,"please enter number of product in stock"],
        maxLength:[4,"please enter correct stock"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0,

    },
    reviews:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true
    
        },
        name:{
            type:String,
            required:[true,"please enter your name"]
        },
        rating:{
            type:Number,
            required:true
            

        },
        comment:{
            type:String,
            required:true
        }
    }],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productShema)