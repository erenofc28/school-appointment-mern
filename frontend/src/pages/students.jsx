const people = [
    {
      name: 'Leslie Alexander',
      role: 'II-Bsc.CS-A',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        role: 'I-BCA-C',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leslie Alexander',
        role: 'II-BE CSE-B',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
import { useEffect, useState } from "react"
import "../index.css"
import Header from "./Header"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
 
const Students=()=> {
const [details,setDetails] = useState([]);
const [userType,setUserType] = useState([]);
const navigate = useNavigate();
const location = useLocation();
//to handle requst page navgation
const handleRequest = () =>{
  navigate("/requestteacher",{state:{reqType:"student"}})
}


//to get available data from database
useEffect(()=>{
  const c = axios.get("http://localhost:5000/studentAll")
  .then((res)=>{
    setDetails( res.data.map((r)=>{
     
      return { name:r.username,
        role:r.class,
        profile:r.profile,
        id:r._id,
        status:r.status}
    }))

    })
    .catch((err)=>{
      console.log(err)
    })
   getType();
  },[])  

  //to get user type
const getType = async()=>{
  const token =  localStorage.getItem("token")
  console.log(token,'token')
  if(!token){
    return;
  }
const r = await axios.post("http://localhost:5000/typeFind",{token})
.then((res)=>{
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
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
          <div className="t-div">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
             Students
            </h2>
            {userType==="admin"?<>
            <button onClick={handleRequest}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 plus-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>

 </button>
</>:""}
</div>
<p className="mt-6 text-lg/8 text-gray-600 para-teacher">
            Learn with passion, grow with purpose,
Embrace knowledge, and its power unleash.
Dream big, strive far, and never cease,
Your potential awaits, release.
            </p>

          </div>


          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {details.map((person,ind) => {
               return person.status?(<li key={ind}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.profile} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
                 </li>):"";
            })}
          </ul>
        </div>
      </div>
      </>
    )
  }

  export default Students;
  