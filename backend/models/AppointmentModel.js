import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
     from:{
        type:String,
        required:true,
     },
   to:{
      type:String,
      required:true,
   },
   status:{
      type:String,
      required:true,
   },
   message:{
    type:String,
    required:true,
   },
   teacherName:{
      type:String,
      required:true,
     },
     studentName:{
      type:String,
      required:true,
     },
   

 },{timestamps:true});
 
 export const Appointment = mongoose.model('Appointment', userSchema)