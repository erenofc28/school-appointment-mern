import express from "express";
import {adminModel} from "./models/adminModel.js";
import {connectDB} from "./config/db.js";
import dotenv from 'dotenv';
import cors from "cors"
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";
import { Teacher } from "./models/teacherModel.js";
import { Student } from "./models/studentModel.js";

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


//admin get method
app.post("/admin",async(req,res)=>{
    const data = req.body
    const userDoc = await adminModel.findOne({email:data.email})

   if(userDoc === null){
    res.status(201).json({status:false,message:"wrong email"})
    return;
   }
    if(userDoc != null && data.email && data.password && userDoc.email === data.email && userDoc.password === data.password){
        console.log("email and pass matched (admin)")

        const token = jwt.sign({
            email:data.email,
            password:data.password
        }, secret, { expiresIn: '20h' });

        res.status(201).json({status:true,token:token,message:"email and password matched"})
    }
    else{
        res.status(500).json({status:false,message:"wrong email or password"})
    }

})
//teacher get method (login validation)
app.post("/teacherLogin",async(req,res)=>{
    const data = req.body
    const userDoc = await Teacher.findOne({email:data.email})

   if(userDoc === null){
    res.status(201).json({status:userDoc.status,message:"wrong email"})
    return;
   }
    if(userDoc != null && data.email && data.password && userDoc.email === data.email && userDoc.password === data.password){
        console.log("email and pass matched (teacher)")

        const token = jwt.sign({
            email:data.email,
            password:data.password
        }, secret, { expiresIn: '20h' });

        res.status(201).json({status:userDoc.status,token:token,message:"email and password matched"})
    }
    else{
        res.status(500).json({status:userDoc.status,message:"wrong email or password"})
    }

})
//student get method (login validation)
app.post("/studentLogin",async(req,res)=>{
    const data = req.body
    const userDoc = await Student.findOne({email:data.email})
console.log(userDoc)
   if(userDoc === null){
    res.status(201).json({status:userDoc.status,message:"wrong email"})
    return;
   }
    if(userDoc != null && data.email && data.password && userDoc.email === data.email && userDoc.password === data.password){
        console.log("email and pass matched (student)")

        const token = jwt.sign({
            email:data.email,
            password:data.password
        }, secret, { expiresIn: '20h' });

        res.status(201).json({status:userDoc.status,token:token,message:"email and password matched"})
    }
    else{
        res.status(500).json({status:userDoc.status,message:"wrong email or password"})
    }

})


//teacher post method (sign up and add )
app.post("/teacher",async(req,res)=>{
    console.log("ii bro")
  const data = req.body
  const userDoc3 = await Student.findOne({email:data.email})
  const userDoc = await Teacher.findOne({email:data.email})
  const userDoc2 = await adminModel.findOne({email:data.email})
  if(userDoc != null || userDoc2 != null || userDoc3 != null){
    console.log("email already exists")
   return res.status(201).json({
        status:data.status,
        message:"email already exists"
    })
    
    // return;
  }

  if(!data.status || !data.username || !data.class || !data.department || !data.profile || !data.email || !data.password)
{ console.log("please fill all the fields")
   return res.status(500).json({
        status:data.status,
        message:"please fill all the fields"
    })
   
  
}
const newData = new Teacher(data)
try {
    await newData.save();
    const token = jwt.sign({
        username:newData.name,
        class:newData.class,
        department:newData.department,
        profile:newData.profile,
        email:newData.email,
        password:newData.password
    }, secret, { expiresIn: '20h' });
console.log("successfully added into db")
   return res.status(201).json({
        status:data.status,
        token:token,
        message:"successfully added into db"
    })
    

} catch (error) {
    res.status(500).json({
        status:data.status,
        message:"server error"
    })
    
}
})

//student post method (sign up and add )
app.post("/student",async(req,res)=>{
    console.log("ii bro")
  const data = req.body
  const userDoc = await Student.findOne({email:data.email})
  const userDoc3 = await Teacher.findOne({email:data.email})
  const userDoc2 = await adminModel.findOne({email:data.email})
  if(userDoc != null || userDoc2 != null || userDoc3 != null){
    console.log("email already exists")
   return res.status(201).json({
        status:data.status,
        message:"email already exists"
    })
    
    // return;
  }

  if( !data.status ||!data.username || !data.class || !data.department || !data.profile || !data.email || !data.password)
{ console.log("please fill all the fields")
   return res.status(500).json({
        status:data.status,
        message:"please fill all the fields"
    })
   
  
}
const newData = new Teacher(data)
try {
    await newData.save();
    const token = jwt.sign({
        username:newData.name,
        class:newData.class,
        department:newData.department,
        profile:newData.profile,
        email:newData.email,
        password:newData.password
    }, secret, { expiresIn: '20h' });
console.log("successfully added into db")
   return res.status(201).json({
        status:data.status,
        token:token,
        message:"successfully added into db"
    })
    

} catch (error) {
    res.status(500).json({
        status:data.status,
        message:"server error"
    })
    
}
})


//all teachers get method
app.get("/teacher",async(req,res)=>{
    const data = await Teacher.find();
    console.log(data)
    if(data === null || data.length === 0){
       return res.status(500).json({status:false,message:"no data found"})
    }
   return res.status(201).json(data)
})
//student post method
app.post("/student",async(req,res)=>{

    const data = req.body
    if(!data.username || !data.password || !data.email || !data.profile || !data.department || !data.class ){
return res.status(500).json({status:false,message:"please fill all the details"})
   
}
const newData = new Student(data)
try {
    await newData.save();
    return res.status(201).json({status:true,data:newData});
    
} catch (error) {
    console.log("error occured")
    return res.status(500).json({status:false,message:"internal server error"})

}
})

app.delete("/teacher/:id",async(req,res)=> {
    console.log(req.params.id,)
const id = req.params.id
const result = await Teacher.findByIdAndDelete(id)
// console.log(result)

if(result === null){
    res.status(500).json({success:false,message:"not deleted"})
    return;
}
res.status(201).json({success:true,message:"successfully deleted"})



})

//teacher update 
app.put("/teacher/:id",async(req,res)=>{
    const {id} = req.params
    const data = req.body

    try {
const updated = await Teacher.findByIdAndUpdate(id,data,{new:true})
res.status(200).json({
    success:true,
    updated:updated
})

    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            success:false,
            message:"product not updated"
})
}

})

//get user type from token
app.post("/typeFind",async(req,res)=>{
    const token = req.body.token
    let decoded = ''
    try {
        decoded = await jwt.verify(token,secret);
        console.log(decoded); // Decoded payload
      } catch (err) {
        console.error(err);
      }
      console.log("decoded",decoded,'confirm')
    if(decoded === ''){
        return res.status(505).json({status:false,message:"invalid token"})
    }
      console.log(decoded.email)
      const TeacherDoc = await Teacher.findOne({email:decoded.email})
      const StudentDoc = await Student.findOne({email:decoded.email})
      const adminDoc = await adminModel.findOne({email:decoded.email})
    if(TeacherDoc != null){
        console.log("success")
        return res.status(201).json({success:true,type:"teacher"})
    }
    if(adminDoc != null){
        console.log("success")
        return res.status(201).json({success:true,type:"admin"})
    }
    if(StudentDoc != null){
        console.log("success")
        return res.status(201).json({success:true,type:"student"})
    }
    return res.status(501).json({status:false,message:"invalid token"})
    
    
      
})

app.listen(5000,()=>{
    connectDB();
    console.log("server started")
})