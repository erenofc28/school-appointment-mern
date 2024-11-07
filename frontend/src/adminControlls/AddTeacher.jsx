import React, { useState } from 'react'
import Header from '../pages/Header'
import "../App.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
const navigate = useNavigate()
const [name,setName] = useState();
const [class_,setClass_] = useState();
const [dep,setDep] = useState();
const [profile,setProfile] = useState();
const [email,setEmail] = useState();
const [pass,setPass] = useState();
const [vali,setVali] = useState();

const handleSignUp = async() => {
  if(!name){
    setVali("name")
    return
  }
  if(!class_){
    setVali("class")
    return
  }
  if(!dep){
    setVali("dep")
    return
  }
  if(!profile){
    setVali("profile")
    return
  }
  if(!email){
    setVali("email")
    return
  }
  if(!pass){
    setVali("pass")
    return
  }
  setVali("")
  const data = {
    username:name,
    class:class_,
    department:dep,
    profile,
    email,
    password:pass,
    status:true,
    time:"empty",
    date:"empty"
  }
 await axios.post("http://localhost:5000/teacher",data)
.then((res)=>{
  console.log(data,"d")
  if(res.data.message==="email already exists"){
    setVali("email already exists")
   return
  }
  navigate("/teachers")
  console.log("successfuly added",res.data)
})
.catch((err)=>{
  console.log("error")
})
}
console.log(name?"name":"false")

  return (
    <>
    <Header/>
    <div className="body-form mb-10" style={{height:'160vh'}}>

    <div class="w-full max-w-xs co-form mt-10">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-210" >
    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Username
      </label>
      <input onChange={(e)=>{setName(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username"/>
  {vali==="name"?<>
  <p class="text-red-500 text-xs italic mt-3">Please enter valid username</p>
  </>:"" }
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Class
      </label>
      <input onChange={(e)=>{setClass_(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Class"/>
      {vali==="class"?<>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid class</p>
  </>:"" }
    
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Department
      </label>
      <input onChange={(e)=>{setDep(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Department"/>
      {vali==="dep"?<>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid department</p>
  </>:"" }
 
     
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Profile
      </label>
      <input onChange={(e)=>{setProfile(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Image URL"/>
      {vali==="profile"?<>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid Image URL</p>
  </>:"" }
  
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input onChange={(e)=>{setEmail(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
      {vali==="email"?<>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid email</p>
  </>:"" }
  {
    vali==="email already exists"?<p class="text-red-500 text-xs italic mt-3">Email already exists</p>:""
  }
   
      
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={(e)=>{setPass(e.target.value)}}  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
      {vali==="pass"?<>
      <p class="text-red-500 text-xs italic">Password must contain atleast 8 characters</p>
  </>:"" }
      
    </div>
    <div class="flex items-center justify-between">
      <button onClick={handleSignUp} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline login-btn" type="button">
        Add 
      </button>
      {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2024 Snippetz institute.All rights reserved.
  </p>
</div>

    </div>

    </>
  )
}

export default AddTeacher;
