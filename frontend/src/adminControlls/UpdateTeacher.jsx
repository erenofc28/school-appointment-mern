import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import "../App.css"
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateTeacher = () => {
const navigate = useNavigate()
const [name,setName] = useState();
const [class_,setClass_] = useState();
const [dep,setDep] = useState();
const [profile,setProfile] = useState();
const [email,setEmail] = useState();
const [pass,setPass] = useState();
const location = useLocation();
const [id,setId] = useState();
const [vali,setVali] = useState();


const handleUpdate = async() => {
let data = {}
if(name){
    data["username"] = name
}
if(class_){
    data["class"] = class_
}
if(dep){
    data["department"] = dep
}
if(profile){
    data["profile"] = profile
}
if(email){
    data["email"] = email
}
if(pass){
    data["password"] = pass
}
// console.log("curr",data)
    
 await axios.put(`http://localhost:5000/teacher/`+id,data)
.then((res)=>{
    console.log("successfuly updated",res.data)
    if(res.data.message === "email already exists"){
      setVali("email already exists")
     return;
    }
  navigate("/teachers")

})
.catch((err)=>{
  console.log("error")
})
}



useEffect(()=>{
    setId(location.state.id)
},[])

  return (
    <>
    <Header/>
    <div className="body-form mb-10 form-add" style={{height:'160vh'}}>

    <div class="w-full max-w-xs co-form mt-10">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-210" >
    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Username
      </label>
      <input onChange={(e)=>{setName(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username"/>

    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Class
      </label>
      <input onChange={(e)=>{setClass_(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Class"/>
 
    
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Department
      </label>
      <input onChange={(e)=>{setDep(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Department"/>

 
     
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Profile
      </label>
      <input onChange={(e)=>{setProfile(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Image URL"/>

  
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input onChange={(e)=>{setEmail(e.target.value)}}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
{vali?<> <p class="text-red-500 text-xs italic mt-3">Email already exists</p></>:""}
      
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input onChange={(e)=>{setPass(e.target.value)}}  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
   
      
    </div>
    <div class="flex items-center justify-between">
      <button onClick={handleUpdate} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline login-btn" type="button">
        Update
      </button>

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

export default UpdateTeacher;
