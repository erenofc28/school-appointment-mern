import React, { useEffect, useState } from 'react'
import Header from '../pages/Header'
import "../App.css"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const Booking = () => {
   const[box,setBox]= useState();
   const [studentId,setStudentId] = useState();
   const navigate = useNavigate()
   const location = useLocation();
   const [studentName,setStudentName] = useState([])
   const [teacherId,setTeacherId] = useState();




// to get (teacher's ID) 
   useEffect(()=>{
    setTeacherId(location.state.id)
    getType()
},[])

   //to display box
   useEffect(()=>{
    console.log(studentName,'student name',location.state.teacherName)
   },[box])
//to get student id
const getType = async()=>{
    const token =  localStorage.getItem("token")
    // console.log(token,'token')
    if(!token){
      return;
    }
  const r = await axios.post("http://localhost:5000/typeFind",{token})
  .then((res)=>{

  setStudentName(res.data.data.username)
  setStudentId(res.data.data.id)
  console.log(studentName,'student name',location.state.teacherName)
  })   
  .catch((err)=>{
    console.log(err)
  })
  
  }

const send = async() => {
    
    const data = {
        from:studentId,
        to:teacherId, 
        message:box,
        status:"pending",
        teacherName:location.state.teacherName,
        studentName:studentName
    }
    const r = await axios.post('http://localhost:5000/book',data)
    .then((res)=>{
        navigate("/teachers")
        console.log(res,'res')
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <>
      <Header/>
       <div className='main_book'>
       <textarea onChange={(e)=>{setBox(e.target.value)}} value={box} className='textarea_book' name="box" cols="30" rows="10"></textarea>
       <div>
       <button onClick={send} className="btn_book_send bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Send
</button>
<button onClick={()=>{setBox("")}} className="btn_book_clear bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Clear
</button>
       </div>

       </div>

    </>
  )
}

export default Booking
