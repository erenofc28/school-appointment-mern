import express from "express";
import {
  forLogout,
  studentDelete,
  studentUpdate,
  teacherUpdate,
  teacherDelete,
  studentGetAll,
  teacherGetAll,
  studentAdd,
  adminLogin,
  teacherLogin,
  studentLogin,
  teacherAdd,
  userTypeFind,
  teacherBooking,
  getAllAppointments,
  updateAppointment,
  studentIdToData,
  teacherIdToData,
} from "../controllers/controller.js";

const router = express.Router();

//for Admin Log in
router.post("/admin", adminLogin);

//for teacher log in
router.post("/teacherLogin", teacherLogin);

//for student log in
router.post("/studentLogin", studentLogin);

// for teacher sign up and add method
router.post("/teacher", teacherAdd);

//for student sign up
router.post("/student", studentAdd);

// for getting all teachers method
router.get("/teacher", teacherGetAll);

//for getting all students method
router.get("/studentAll", studentGetAll);

//for teacher delete method
router.delete("/teacher/:id", teacherDelete);

//for teacher update method
router.put("/teacher/:id", teacherUpdate);

//for student update method
router.put("/student/:id", studentUpdate);

//for student delete method
router.delete("/student/:id", studentDelete);

//for finding user type with JWT
router.post("/typeFind", userTypeFind);

//for teacher appointment booking
router.post("/book", teacherBooking);

//for getting all appointments
router.post("/bookGet", getAllAppointments);

//for updating appointment status (approved ,rejected and pending)
router.put("/book/:id", updateAppointment);

//for getting student details from student id
router.get("/studentGet/:id", studentIdToData);

//for getting teacher details from teacher id
router.get("/teacherGet/:id", teacherIdToData);

//for Log out
router.get("/logout", forLogout);
export default router;
