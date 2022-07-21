const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({
    Author:String,
    Location:String,
    Description:String,
    Image:String
},{
    timestamps:true
})

const PostModal=mongoose.model("Post",PostSchema);
module.exports=PostModal;