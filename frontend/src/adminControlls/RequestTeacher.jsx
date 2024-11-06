import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import "../App.css"
import axios from 'axios'
const RequestTeacher = () => {
   const [details,setDetails]= useState([])
   const [empty,setEmpty] = useState(true)

const inside = () => {
    console.log("inside")
}
   const handleApprove = async(id) => {
    const data = {
        status:true
    }
    await axios.put(`http://localhost:5000/teacher/`+id,data)
    .then((r)=>{
        console.log("successfuly approved")
        setDetails(details.filter((arr)=>{
            if(arr.id != id){
                return arr
            }
        }))
    })
   }
   const handleReject = async(id) => {
    await axios.delete(`http://localhost:5000/teacher/`+id)
    .then((res)=>{
        console.log("successfuly rejected",)
        setDetails(details.filter((arr)=>{
            if(arr.id != id){
                return arr
            }
        }))
    checkEmpty()
    
    })
    .catch((err)=>{
      console.log("error")
    })
   }
    useEffect(()=>{
        const c = axios.get("http://localhost:5000/teacher")
        .then((res)=>{
          setDetails( res.data.map((r)=>{
            
            return{ name:r.username,
              role:r.department,
              profile:r.profile,
              id:r._id,
              status:r.status}
          }
          ))
        
          console.log(details,'details')
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])


const checkEmpty = () => {
    const c = axios.get("http://localhost:5000/teacher")
    .then((res)=>{
    res.data.map((arr)=>{
        if(!arr.status){
            setEmpty(false)
        }
    })
    })
    .catch((err)=>{
      console.log(err)
    })

}

    useEffect(()=>{
 checkEmpty();
    },[])
  return (
    <>
      <Header/>
      <div className=' border div_req flex justify-center items-center flex-col'>
 
<h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Pending Registrations</h1>
{!(empty)?details.map((arr,ind)=>{
   
    return !arr.status?(
    <>
    
    <div key={ind} class="small_box items-center bg-white-500 text-white text-sm font-bold px-4 py-3" role="alert">
  {/* <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg> */}
  <p className='text-emerald-950 text-base text-bold'>{arr.name}</p>
  <div className="btns">
  <button onClick={(e)=>{handleReject(arr.id)}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-4">
  Reject
</button>
<button  onClick={(e)=>{handleApprove(arr.id)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
  Approve
</button>
  </div>
 
</div>
    </>):""
})  :<p className='text-emerald-950 text-base text-bold'>No Pending Requests</p>
}


      </div>
    </>
  )
}

export default RequestTeacher

