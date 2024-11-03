// import mongoose from "mongoose";
// const Schema = mongoose.Schema;
// const modelSchema = new Schema(
// {
//  email:{
//     type:String,
//     required:true,
//  },
//  password:{
//     type:String,
//     required:true,
//  }   
// },{timestamps:true})

// export default adminModel = mongoose.model("adminModel",modelSchema)
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
   email:{
      type:String,
      required:true,
   },
   password:{
      type:String,
      required:true,
   }
 },{timestamps:true});
 
 export const adminModel = mongoose.model('adminModel', userSchema)