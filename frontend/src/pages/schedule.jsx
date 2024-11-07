import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import "../App.css"

const Schedule = () => {

const navigate = useNavigate();
const [id,setId] =useState([]);
const [date,setDate] = useState([]);
const [time,setTime] = useState([]);
//to handle not available btn
const handleNotAvailable = () => {
// console.log(id)
const data = {date:"empty",time:"empty"}
axios.put(`http://localhost:5000/teacher/${id}`,data)
.then(()=>{
    console.log('successfully updated')
    navigate("/teachers")
})
.catch((err)=>{
    console.log(err)
})
}
//to handle save btn
const handleSave = () => {
    const data = {date,time}
    axios.put(`http://localhost:5000/teacher/${id}`,data)
    .then(()=>{
        console.log('successfully updated')
        navigate("/teachers")
    })
    .catch((err)=>{
        console.log(err)
    })
    }

  //to get user id
  useEffect(()=>{
    getType();
},[])
  const getType = async()=>{
    const token =  localStorage.getItem("token")
    // console.log(token,'token')
    if(!token){
      return;
    }
  const r = await axios.post("http://localhost:5000/typeFind",{token})
  .then((res)=>{
  setId(res.data.data.id)
  })
  .catch((err)=>{
    console.log(err)
  })
  
  }

  return (
    <>
      <Header/>
      <div className='main_book'>
       {/* <textarea   className='textarea_book' name="box" cols="30" rows="10"></textarea> */}
       <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Date
      </label>
      <input onChange={(e)=>{setDate(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="ex : 08/12/2022"/>
      {/* <p class="text-red-500 text-xs italic mt-3">Please enter valid Date</p> */}
    </div>
    <div class="mb-1">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Time
      </label>
      <input onChange={(e)=>{setTime(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="ex : 14:00 to 16:00"/>
      {/* <p class="text-red-500 text-xs italic mt-3">Please enter valid Time</p> */}
    </div>

       <div className='div_schedule '>
       <button onClick={()=>{handleSave()}} className="s btn_book_send bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Save
</button>
<button onClick={()=>{handleNotAvailable()}}  className="btn_book_clear n bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Not Available
</button>
       </div>

       </div>
    </>
  )
}

export default Schedule