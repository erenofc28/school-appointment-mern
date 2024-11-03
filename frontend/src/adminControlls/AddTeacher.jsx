import React from 'react'
import Header from '../pages/Header'
import "../App.css"

const AddTeacher = () => {

  return (
    <>
    <Header/>
    <div className="body-form mb-10" style={{height:'150vh'}}>

    <div class="w-full max-w-xs co-form mt-10">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-210" >
    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username"/>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid username</p>
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Class
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Class"/>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid class</p>
    </div>

    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Department
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Department"/>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid department</p>
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
      <p class="text-red-500 text-xs italic mt-3">Please enter valid email</p>
    </div>


    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
      <p class="text-red-500 text-xs italic">Password must contain atleast 8 characters</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline login-btn" type="button">
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
