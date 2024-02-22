 const mongoose=require("mongoose");
 const {ObjectId} = mongoose.Schema.Types
 const userSchema=new mongoose.Schema({
    
   name:{
           type:String, require:true
   },
   email:{
           type:String, require:true
   },
   password:{
            type:String,  require:true
   },
   number:{
            type:Number, require:true
   },
   
   pic:{
       type:String
   },
     followers:[{
          type:ObjectId, ref:"User"
     }],
     following:[{
        type:ObjectId, ref:"User"
   }],
      stories:[{
         user:{type:ObjectId,ref:"User"},
         storyPic:String,
         storyData:Date
      }],
      restToken:String,
      expireToken:String
 },{timestamps:true})

  const User = mongoose.model("User",userSchema);
  module.exports =User