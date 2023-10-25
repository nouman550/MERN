const mongoose=require('mongoose');




const conectDatabase=()=>{
    const url="mongodb://rizwan2021:rizwan2021@cluster0-shard-00-00.4elpr.mongodb.net:27017,cluster0-shard-00-01.4elpr.mongodb.net:27017,cluster0-shard-00-02.4elpr.mongodb.net:27017/myProject?ssl=true&replicaSet=atlas-ec7k7t-shard-0&authSource=admin&retryWrites=true&w=majority";
   
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
        console.log("database connected");
    })
}

module.exports=conectDatabase;