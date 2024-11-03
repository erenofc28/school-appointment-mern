import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <>
 <Header/>
          <div className="main">

          
    <div className='body'>
      
    </div>
    <div className="welcome">
      <h1 className='font-sans '>Welcome to Student-Teacher Booking Appointment System </h1>
      <p className='font-sans text-xl py-5'>Steamline student-teacher appointment management system and add students and faculty.seamlessly track appointments,schedule start date and end date and communicate effortlessly</p>
   <Link to="/commonLogin">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-60 mr-12">
  Login
</button>
</Link> 
 <Link to="/commonSignup">
 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-60">
  Sign up
</button>
</Link>  

      </div>
    </div>
    </>
  )
}

export default Home;
