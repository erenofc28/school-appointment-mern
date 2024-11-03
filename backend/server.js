import express from "express";
import {adminModel} from "./models/adminModel.js";
import {connectDB} from "./config/db.js";
import dotenv from 'dotenv';
import cors from "cors"
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";

const jwt = jsonwebtoken;
const secret = "ieafn3rrgr"
const app = express()
app.use(cors())
app.use(cookieParser())
dotenv.config()
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(201).json({message:"hii bro how are you"})
})

// app.post("/admin",async(req,res)=>{
//     const data = req.body //data that users provided
//     if(!data.email || !data.password){
//         res.status(404).json({
//             success:false,
//             message:"please provide all informations"
//         })
//         return;
//     }
//     const newData =  new adminModel(data)
//      try{
//         await newData.save();
//         res.status(200).json({success:true,data:newData})
//         console.log("product successfully added to the database")
//      }
//      catch(error){
//         res.status(404).json({success:false})
//         console.log(error.message)
//      }
// }
//     )
app.post("/admin",async(req,res)=>{
    const data = req.body
    const userDoc = await adminModel.findOne({email:data.email})
//    console.log(userDoc,"user doc")

   if(userDoc === null){
    res.status(201).json({status:false,message:"wrong email"})
    return;
   }
    if(userDoc != null && data.email && data.password && userDoc.email === data.email && userDoc.password === data.password){
        console.log("email and pass matched (admin)")

        const token = jwt.sign({
            email:data.email,
            password:data.password
        }, secret, { expiresIn: '1h' });

        res.status(201).json({status:true,token:token,message:"email and password matched"})
    }
    else{
        res.status(500).json({status:false,message:"wrong email or password"})
    }

})

app.listen(5000,()=>{
    connectDB();
    console.log("server started")
})