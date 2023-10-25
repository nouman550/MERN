const sendToken=(user,statusCode,res)=>{
    const token=user.getJWTToken(); 
    //options for cookie
    const x=7;
    const options={
        expires:new Date(
            Date.now()+ x*24*60*60
        ),
        httpOnly:true
    } 
    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        user,
        token,
    })
}
module.exports=sendToken