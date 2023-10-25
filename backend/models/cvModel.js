const mongoose =require('mongoose');

const cvShema=new mongoose.Schema({
    name:{
      type:String,
      required:[true,"Enter your name"],
      trim:true
    },
    email:{
        type:String,
        required:[true,"please enter mail"]
    },
    description:{
        type:String,
        required:[true,"please enter product Descrition "]
    },
    cgpa:{
        type:Number,
        required:[true,"Enter your cgpa "],
        maxLength:[4,"please enter valid cgpa"]
    },
    experience:
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
    university:{
  type:String,
  required:[true," enter university name"]
    },
    mobile:{
        type:String,
    required:[true,"please enter correct mobile number"]
    },
    idCard:{
        type:String,
        required:[true,"please enter cnic"]

    },
    
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

module.exports=mongoose.model("CV",cvShema)