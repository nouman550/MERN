const mongoose =require('mongoose');

const myShema=new mongoose.Schema({
 
    description:{
        type:String,
        required:[true,"please enter product Descrition "]
    },
   
    createdAt:{
        type:Date,
        default:Date.now
    },
   
})

module.exports=mongoose.model("My",myShema)