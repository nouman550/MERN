const mongoose=require('mongoose');
const validator=require('validator');
const bcryptjs =require('bcryptjs');
const jwt=require('jsonwebtoken');
const crypto=require("crypto");

const JWT_SECRET="4875475487AAAAA";
const JWT_EXPIRE="5d";

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"name cannot be empty"],
    maxLength:[30,"name cannot exceed tan 30"],
    minLength:[4,"atleaset 4 words"]
},
email:{
    type:String,
    required:[true,"please enter mail"],  
    unique:[true,"mail is not unique"],
    validate:[validator.isEmail,"please enter a valid email"]
},
password:{
    type:String,
    required:[true,"please enter password"],
    minLength:[4,"atleaset 8 words"] ,
    select:false
},
avatar:{
    public_id:{
        type:String,
        required:[true,"image id is required and cannot be undonw"]
    },
    url:{
        type:String,
        required:[true,"image id is required and cannot be undonw"]
    }
},
role:{
    type:String,
     default:"user"
},

resetPasswordToken:String,
resetPasswordExpire:Date

}) 
userSchema.pre("save",async function(next){
    if(!this.isModified( "password"))
    {
        next();
    }
this.password=await bcryptjs.hash(this.password,10)
})

//jwt token  for user authentication.....
userSchema.methods.getJWTToken=function(){
return jwt.sign({id:this._id},JWT_SECRET,{
    expiresIn:JWT_EXPIRE
})
}

//compare password...
userSchema.methods.comparePassword=async function(enteredPassword){
return await bcryptjs.compare(enteredPassword,this.password);
}

//build passwrd reset from o
userSchema.methods.getPasswordresetToken=function() {
    const resetToken=crypto.randomBytes(20).toString("hex")
   this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")

   this.resetPasswordExpire=Date.now()+15*60*1000;
   return resetToken;
}
module.exports=mongoose.model("user",userSchema)
