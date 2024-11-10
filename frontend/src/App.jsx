import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import CommonLogin from "./pages/CommonLogin";
import CommonSignup from "./pages/CommonSignup";
import Login from "./forms/Login";
import { createContext, useContext } from "react";
import Signup from "./forms/signup";
import Teachers from "./pages/Teachers";
import Students from "./pages/students";
import About from "./pages/about";
import AddTeacher from "./adminControlls/AddTeacher";
import Home2 from "./pages/Home2";
import UpdateTeacher from "./adminControlls/UpdateTeacher";
import RequestTeacher from "./adminControlls/RequestTeacher";
import Wait from "./pages/wait";
import Booking from "./forms/Booking";
import AppointmentDisplay from "./pages/AppointmentDisplay";
import Schedule from "./pages/schedule";
import ProtectedRoutes from "./ProtectedRoutes";

export const form_context = createContext(null);
function App() {
  return (
    <>
      <Routes>

        <Route element={<ProtectedRoutes/>}>

        <Route path="/students" element={<Students />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/requestteacher" element={<RequestTeacher />} />
        <Route path="/updateteacher" element={<UpdateTeacher />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointmentdisplay" element={<AppointmentDisplay />} />
       
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/commonSignup" element={<CommonSignup />} />
        <Route path="/commonLogin" element={<CommonLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/wait" element={<Wait />} />
        
      </Routes>
    </>
  );
}

export default App;
