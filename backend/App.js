const express=require('express')
const app=express()
const cookieParser=require("cookie-parser")
app.use(express.json())
app.use(cookieParser())
const product=require("./routes/productRoute")
const user=require("./routes/userRoutes");
const errormiddleware=require("./middleware/error")
const order=require("./routes/orderRoute")
const My=require("./routes/myRoute")
const cv=require("./routes/cvRoute")

/*const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload")
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(fileUpload)
*/

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order);
app.use("/api/v1/user",My);
app.use("/api/v1/",cv);
//error midlerweare

app.use(errormiddleware);
module.exports=app