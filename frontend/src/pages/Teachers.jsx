
import "../index.css"
import Header from "./Header"
import {Link, Navigate, useNavigate} from "react-router-dom"
import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { useLayoutEffect } from 'react';

import fs from 'fs';
import setTimeout from 'timers'



// const people = [
//     {
//       name: 'Leslie Alexander',
//       role: 'Zoology',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         name: 'Leslie Alexander',
//         role: 'Computer Science',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Leslie Alexander',
//         role: 'Accounts',
//         imageUrl:
//           'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
    
//   ]


// console.log(people,'',data)
let people = []



const Teachers =()=> {
  const navigate = useNavigate();
  const [name,setName] = useState();
  const [role,setRole] = useState();
  const [profile,setProfile] = useState();
  const [id,setId] = useState();
  const [people2,setPeople2] = useState([]);
  const [details,setDetails] = useState([]);
  const [search,setSearch] = useState([]);
  const [userType,setUserType] = useState([]);
  const [reset,setReset] = useState([]);

//to handle seacrch box
const handleSearch = () => {
  console.log('search',search)
  setDetails(
    details.filter((person)=>{
      console.log(person.name.toLowerCase().includes(),'check')
       if(person.name.toLowerCase().includes(search.toLowerCase())){
        return person
       }
    })
  )

  console.log(details)
}

//to handle requst page navgation
const handleRequest = () =>{
  navigate("/requestteacher",{state:{reqType:"teacher"}})
}
//to handle booking appointment navigation
const handleBooking = (id,teacherName) => {
  navigate("/booking",{state:{id,teacherName}})
}
//to handle bookings display navigation
const handleAppointmentDisplay = () => {
  navigate("/appointmentdisplay",{state:{id,type:userType}})
}

//to handle delete method for teacher
  const handleDelete = async(id,e) => {
    e.preventDefault();
await axios.delete('http://localhost:5000/teacher/'+id)
.then(()=>{
  console.log("successfully deleted")
  
  setDetails(details.filter((arr)=>{
    if (arr.id != id){
      return {arr}
    }
  }))
  console.log(details)

})
.catch(()=>{
  console.log("not able to delete")
})
  }
//method for navigate to the update method page for(teacher) 
const handleUpdate = (id) => {
  // console.log("mavi")
 navigate("/updateteacher",{state:{id}})

}
//to get available data from database
    useEffect(()=>{
      const c = axios.get("http://localhost:5000/teacher")
      .then((res)=>{
        setDetails( res.data.map((r)=>{
        
          return { name:r.username,
            role:r.department,
            profile:r.profile,
            id:r._id,
            status:r.status,
          time:r.time,
        date:r.date}
        }))

        })
        .catch((err)=>{
          console.log(err)
        })
        getType();
      },[reset])

//to get user type
const getType = async()=>{
  const token =  localStorage.getItem("token")
  console.log(token,'token')
  if(!token){
    return;
  }
const r = await axios.post("http://localhost:5000/typeFind",{token})
.then((res)=>{
setId(res.data.data.id)
setUserType(res.data.type)
})
.catch((err)=>{
  console.log(err)
})

}

    return (
  
  <>
  <Header/>
 
      <div className="bg-white py-24 sm:py-32">
        <div className=" mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl ">
            <div className="t-div">

            <div className="flex flex-row items-center justify-evenly teacher-box ">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl ">
             Teachers
            </h2>

            {userType === "admin"?<>
            <Link to="/addteacher">            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 plus-icon ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> </Link>  
            </>:""}
            {userType === "teacher"?<>
            <Link to="/schedule">            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 plus-icon ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> </Link>  
            </>:""}


            <div className="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        
        </div>
        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Teacher" required />
    </div>

    <button onClick={handleSearch} type="submit" className="search-btn p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 search-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>

    <button onClick={()=>{setReset(Math.random())}} type="submit" className="search-btn p-2.5 ms-2 text-sm font-medium text-blue-500 bg-white-700 rounded-lg border border-blue-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
  <p>⟳</p>  
    </button>

</div>


            </div>
{userType==="admin"?<>
<button onClick={handleRequest}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 plus-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>

 </button>
</>:""}
{
  userType !="admin"?<>
  <button onClick={()=>{handleAppointmentDisplay()}}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
  </button>

  </>:""
}



            </div>



 

            <p className="mt-6 text-lg/8 text-gray-600">
            Teaching is not a profession,
It's a passion that makes a difference.
With every lesson, a heart beats,
Shaping minds, a lifelong treasure
            </p>
          </div>


          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {details.map((person,ind) =>{
              return person.status?(
                <>
                            <li key={ind} >
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.profile} className="h-16 w-16 rounded-full" />
                    <div>
                  
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    {person.time!="empty"?
                    (<>
                    Available : {person.time}<br />
                    </>):"Not Available" } 
                    {person.date != "empty" && <>
                    {person.date}
                    </>}
                    
                      <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                   
                    </div>
   
  
                  </div>

                  {userType==="admin"?<>
                  
                  <button onClick={(e)=> {handleDelete(person.id,e)} } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-4">
    Delete
  </button>
  <button onClick={()=>{
          handleUpdate(person.id)
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
    Update
  </button>
                  </>:""}

                  {userType === "student"?<>
          
            <button onClick={()=>{
          handleBooking(person.id,person.name)
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full m-4">
    Book an appointment
  </button>

            </>:""}
 
                </li>
                </>
              ):""
             
            }
  
            
            )}
          </ul>
        </div>
      </div>
      
      </>
    )
  }
  export default Teachers;