// cbliSyyjk6rUg0qZ
import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// console.log("mongoDB connected",process.env.MONGO_URI);
export const connectDB = async ()=>{
try{
const conn = await mongoose.connect(process.env.MONGO_URI);
console.log("mongoDB connected ",process.env.MONGO_URI);
}
catch(error){
    console.log(error.message);
    process.exit(1); // 1 means end with an error
}
}