const ErrorHandler = require('../utils/errorhandler');
const Synn = require('../middleware/asyncError');
//const cloudinary=require("cloudinary");
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require("../utils/sendEmail")
const crypto = require('crypto')
//Register a user...
exports.registerUser = Synn(async (req, res, next) => {
   /* const myCloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"avatars",
        width:150,
        crop:"scale"
    })

    */
    
    const { name, email, password } = req.body;

    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: 12345677,
            url: 1234567
         
 
        }
    })
    sendToken(user, 201, res);
})

//login  users////
exports.loginUser = Synn(async (req, res, next) => {
    const { email, password } = req.body;
    //check if user has given both mail and password and they are correct to
    if (!email || !password) {
        return next(new ErrorHandler("please enter password and mail", 400));
    }
    const user = await User.findOne({
        email
    }).select("+password")

    if (!user) {
        return next(new ErrorHandler("we cannot find user with this details", 401))
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("we cannot find user with this details", 401))
    }

    sendToken(user, 200, res);




})


//logout user proceddure
exports.logoutUser = Synn(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(
            Date.now()
        ),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "logout successfully.."
    })
})


//forot password or reset passwrod  for use and admin

exports.forgotPassword = Synn(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("user does nto exist", 404))
    }
    //reset passwrod token from email

    const resetToken = user.getPasswordresetToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/ ${resetToken}`;
    const message = `your password reset token is available now:\n\n ${resetPasswordUrl}
   if you have not requested this email then you should ignore it`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce password recovery`,
            message: `email sent to ${user.email}successfully\n\n${resetPasswordUrl}`,

        })
        res.status(200).json({
            success: true,
            message: `email sent to ${user.email}successfully`
        })
    }
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500))
    }

})

//reset password

exports.resetPassword = Synn(async (req, res, next) => {
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
        
       

    const user = User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Reset password token is invalid or as been expireed", 404))
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("passwornd does not matc", 404))
    }
     
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    console.log(user.password);
    
     await user.save();
      res.status(200).json({
        success:true,
        user,
    })
})


//user details,,........
exports.getUserDetails=Synn(async(req,res,next)=>{
    const user=await User.findById(req.user.id);
   
    res.status(200).json({
        success:true,
        user,
    })
})

//update user details,,........
exports.updateUserDetails=Synn(async(req,res,next)=>{
    const user=await User.findById(req.user.id).select("+password");
 
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect..sorry ", 400))
    }
    if(req.body.newPassword!==req.body.confirmPassword){
        return next(new ErrorHandler("password does not matc..sorry ", 400))
    }
    user.password=req.body.newPassword;
    await user.save();
    res.status(200).json({
        success:true,
        user,
    })
})

//update user profile....

exports.updateUserProfile=Synn(async(req,res,next)=>{
   

   const newUserData={
       name:req.body.name,
       email:req.body.email,

   }
   //we will add cloundanary information at end ..just keep in mind
   const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
    new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true
        
    })
});


//admin can fid number of user t your website wit profile et ..

exports.findAllUsers=Synn(async(req,res,next)=>{

const users=await User.find()
res.status(200).json({
    success:true,
    users,
})
});


//user details fro admin purpose...
exports.findAllUsersAdmin=Synn(async(req,res,next)=>{

    const user=await User.findById(req.params.id)

    if(!user){
        return next (new ErrorHandler("we cannot find requested user",404)) 
    }
    res.status(200).json({
        success:true,
        user,
    })
    });


    //update user role.... by admin

exports.updateUserRole=Synn(async(req,res,next)=>{
   

    const newUserData={
        name:req.body.name,
        email:req.body.email,
        role:req.body.role,
 
    }
    //we will add cloundanary information at end ..just keep in mind
    const user=await User.findByIdAndUpdate(req.params.id,newUserData,{
     new:true,runValidators:true,useFindAndModify:false});
     res.status(200).json({
         success:true,
         user
         
     })
 });

 //delete user profile by admin....

exports.deleteUserProfile=Synn(async(req,res,next)=>{
   

   const user=await User.findById(req.params.id)
   if(!user){
       return next(new ErrorHandler("sorry user could not find ",404))
   }
   await user.remove()
     res.status(200).json({
         success:true,
         message:"user delted successfully"
         
     })
 });