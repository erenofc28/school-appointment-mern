import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Header from './Header'

const CommonSignup = () => {
  const setData = (name) => {
    localStorage.setItem('signup_type',name.toLowerCase())
  }
  const arr = [
  {name:"Teachers",src:"https://cdn.iconscout.com/icon/free/png-512/free-office-staff-icon-download-in-svg-png-gif-file-formats--team-business-officials-and-internet-flat-icons-pack-1184344.png?f=webp&w=256"},{name:"Students",src:"https://th.bing.com/th?q=Student+Login+Icon.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.2&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"}]
  return (
    <>
     <Header/>
    <div className='main flex flex-wrap main_login '>
{
  arr.map((user)=>{
    return <>
        <div className="   shadow-lg flex-1 single_card text-center pb-5">
  <img className="w-40 h-30 ml-auto mr-auto" src={user.src} />

  <div className="px-6 py-4 ">
    <div className="font-bold text-xl mb-2 ">{user.name}</div>
  </div>
  <Link to="/signup">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-60 mx-auto" onClick={()=>{setData(user.name)}}>
  Sign up
</button>
</Link>

</div>
    </>
  })
}
    </div>
    
    </>
  )
}

export default CommonSignup;
