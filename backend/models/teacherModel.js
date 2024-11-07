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
   email:{
      type:String,
      required:true,
   },
   password:{
      type:String,
      required:true,
   },
   status:{
      type:Boolean,
   },
   date:{
      type:String,
      required:true,
   },
   time:{
      type:String,
      required:true,
   },

 },{timestamps:true});
 
 export const Teacher = mongoose.model('Teacher', userSchema)