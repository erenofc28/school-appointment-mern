import React, { useState } from 'react'
import Header from '../pages/Header'
import "../App.css"
import  axios  from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  let name = localStorage.getItem('login_type')
  const [email,setEmail] = useState([]);
  const [password,setPassword] = useState([]);
  const [validEmail,setValidEmail] = useState(true);
  const [validPass,setValidPass] = useState(true)
  const cookies = Cookies.get()
  const navigate = useNavigate()
  const loginHandler = async(e) => {
    console.log(localStorage.getItem("token"))
    if(!email || !password){
      return;
    }
    console.log(cookies,"cookies")
    e.preventDefault();
    if(name === "teachers"){
      name = "teacherLogin"
      
    }
    if(name === "students"){
      name = "student"
    }
    await axios.post(`http://localhost:5000/${name}`,{
      email,
      password
    })
   .then((r)=>{
    
      if(r.data.message === "wrong email" || r.data.message === "email already exists"){
        setValidEmail(false)
        console.log(r.data.token)
      }
      else{
        setValidPass(true)
        setValidEmail(true)
        
        console.log(r.data,'aaa')
        if(r.data.status){
          localStorage.setItem("token",r.data.token)
          navigate("/home2")
        }
        else{
          navigate("/wait")
        }
      }
      
    
    
    })
    .catch((e)=>{
      setValidEmail(true)
      setValidPass(false)
      console.log(e,'tt')
    })
    toggleClass()
  }

const toggleClass = () => {

}

  return (
    <>
    <Header/>
    <div className="body-form">

    <div class="w-full max-w-xs co-form">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-210" >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    {validEmail?"":
    <>
     <p class=" text-red-500 text-xs italic mt-3">Please enter your email.</p>
    </>} 
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
     {validPass?"":<>
     <p class="text-red-500 text-xs italic">Please enter your password.</p>
     </>} 
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline login-btn" type="button" onClick={(e)=>{loginHandler(e)}}>
        Login
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

export default Login
