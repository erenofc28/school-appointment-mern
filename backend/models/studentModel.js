import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
     },
     class:{
        type:String,
        required:true,
     },
     department:{
        type:String,
        required:true,
     },
     profile:{
        type:String,
        required:true,

     },
     status:{
      type:Boolean
   },
   email:{
      type:String,
      required:true,
   },
   password:{
      type:String,
      required:true,
   },

 },{timestamps:true});
 
 export const Student = mongoose.model('Student', userSchema)