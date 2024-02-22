const mongoose=require("mongoose");
const {objectId}=mongoose.Schema.Types
const postSchema=new mongoose.Schema({
   
  title:{

    
      type:String, require:true
  },
  body:{
      type:String, require:true
  },
  photo:{
       type:String,  require:true
  },
  likes:[{
      type:objectId, ref:"User"
  }],
 comments:[{
         text:String,
         postedBy:{type:objectId,ref:"User"}

    }],
 saved:[{
        savedBy:{type:objectId,ref:"User"}
        postId:{type:ObjectId,ref:"Post"}
  }],
 postedBy:{
        type:objectId,ref:"User"
     },
     pic:{
         type:String,
         ref:"User"
     }
},{timestamps:true})

 const Post = mongoose.model("Post",postSchema);
 module.exports =Post