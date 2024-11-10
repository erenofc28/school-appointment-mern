import {adminModel } from "../models/adminModel.js"
import jsonwebtoken from "jsonwebtoken";
import { Teacher } from "../models/teacherModel.js";
import { Student } from "../models/studentModel.js";
import { Appointment } from "../models/AppointmentModel.js";

const jwt = jsonwebtoken;
const secret = "ieafn3rrgr";

// admin login method
export const adminLogin = async (req, res) => {
    const data = req.body;
    const userDoc = await adminModel.findOne({ email: data.email });
  
    if (userDoc === null) {
      res.status(201).json({ status: false, message: "wrong email" });
      return;
    }
    if (
      userDoc != null &&
      data.email &&
      data.password &&
      userDoc.email === data.email &&
      userDoc.password === data.password
    ) {
      console.log("email and pass matched (admin)");
  
      const token = jwt.sign(
        {
          email: data.email,
          password: data.password,
        },
        secret,
        { expiresIn: "20h" }
      );
  
      res.status(201).json({
        status: true,
        token: token,
        message: "email and password matched",
      });
    } else {
      res.status(500).json({ status: false, message: "wrong email or password" });
    }
  }

//teacher get method (login validation)
export const teacherLogin = async (req, res) => {
    const data = req.body;
    const userDoc = await Teacher.findOne({ email: data.email });
  
    if (userDoc === null) {
      res.status(201).json({ status: "", message: "wrong email" });
      return;
    }
    if (
      userDoc != null &&
      data.email &&
      data.password &&
      userDoc.email === data.email &&
      userDoc.password === data.password
    ) {
      console.log("email and pass matched (teacher)");
  
      const token = jwt.sign(
        {
          username: userDoc.username,
          class: userDoc.class,
          department: userDoc.department,
          profile: userDoc.profile,
          email: userDoc.email,
          id: userDoc._id,
          password: userDoc.password,
          time: userDoc.time,
          date: userDoc.date,
        },
        secret,
        { expiresIn: "20h" }
      );
  
      res.status(201).json({
        status: userDoc.status,
        token: token,
        message: "email and password matched",
      });
    } else {
      res
        .status(500)
        .json({ status: userDoc.status, message: "wrong email or password" });
    }
  }

  //student get method (login validation)
  export const studentLogin =  async (req, res) => {
    const data = req.body;
    const userDoc = await Student.findOne({ email: data.email });
    console.log(userDoc);
    if (userDoc === null) {
      res.status(201).json({ status: "", message: "wrong email" });
      return;
    }
    if (
      userDoc != null &&
      data.email &&
      data.password &&
      userDoc.email === data.email &&
      userDoc.password === data.password
    ) {
      console.log("email and pass matched (student)");
  
      const token = jwt.sign(
        {
          username: userDoc.username,
          class: userDoc.class,
          department: userDoc.department,
          profile: userDoc.profile,
          email: userDoc.email,
          id: userDoc._id,
          password: userDoc.password,
        },
        secret,
        { expiresIn: "20h" }
      );
  
      res.status(201).json({
        status: userDoc.status,
        token: token,
        message: "email and password matched",
      });
    } else {
      res
        .status(500)
        .json({ status: userDoc.status, message: "wrong email or password" });
    }
  }

//teacher post method (sign up and add )
  export const teacherAdd =  async (req, res) => {
    const data = req.body;
   
    const userDoc3 = await Student.findOne({ email: data.email });
    const userDoc = await Teacher.findOne({ email: data.email });
    const userDoc2 = await adminModel.findOne({ email: data.email });
    if (userDoc != null || userDoc2 != null || userDoc3 != null) {
      console.log("email already exists");
      return res.status(201).json({
        status: data.status,
        message: "email already exists",
      });
  
    }
  
    if (
      !data.username ||
      !data.class ||
      !data.department ||
      !data.profile ||
      !data.email ||
      !data.password
    ) {
      console.log("please fill all the fields");
      return res.status(500).json({
        status: data.status,
        message: "please fill all the fields",
      });
    }
    const newData = new Teacher(data);
    try {
      await newData.save();
      const token = jwt.sign(
        {
          username: newData.name,
          class: newData.class,
          department: newData.department,
          profile: newData.profile,
          id: newData._id,
          email: newData.email,
          password: newData.password,
          date: newData.date,
          time: newData.time,
        },
        secret,
        { expiresIn: "20h" }
      );
      console.log("successfully added into db");
      return res.status(201).json({
        status: data.status,
        token: token,
        message: "successfully added into db",
      });
    } catch (error) {
      res.status(500).json({
        status: data.status,
        message: "server error",
      });
    }
  }

  //student post method(sign up)
  export const studentAdd =  async (req, res) => {
    const data = req.body;
    const userDoc = await Student.findOne({ email: data.email });
    const userDoc3 = await Teacher.findOne({ email: data.email });
    const userDoc2 = await adminModel.findOne({ email: data.email });
    if (userDoc != null || userDoc2 != null || userDoc3 != null) {
      console.log("email already exists");
      return res.status(201).json({
        status: data.status,
        message: "email already exists",
      });
  
    }
  
    if (
      !data.username ||
      !data.class ||
      !data.department ||
      !data.profile ||
      !data.email ||
      !data.password
    ) {
      console.log("please fill all the fields");
      return res.status(500).json({
        status: data.status,
        message: "please fill all the fields",
      });
    }
    const newData = new Student(data);
    try {
      await newData.save();
      const token = jwt.sign(
        {
          username: newData.name,
          class: newData.class,
          department: newData.department,
          profile: newData.profile,
          id: newData._id,
          email: newData.email,
          password: newData.password,
        },
        secret,
        { expiresIn: "20h" }
      );
  
      console.log("successfully added into db");
      return res.status(201).json({
        status: data.status,
        token: token,
        message: "successfully added into db",
      });
    } catch (error) {
      res.status(500).json({
        status: data.status,
        message: "server error",
      });
    }
  }

  //all teachers get method
  export const teacherGetAll = async (req, res) => {
    const data = await Teacher.find();
    console.log(data);
    if (data === null || data.length === 0) {
      return res.status(500).json({ status: false, message: "no data found" });
    }
    return res.status(201).json(data);
  } 

  //all student get method
  export const studentGetAll = async (req, res) => {
    const data = await Student.find();
    console.log(data);
    if (data === null || data.length === 0) {
      return res.status(500).json({ status: false, message: "no data found" });
    }
    return res.status(201).json(data);
  }

  //teacher delete method
  export const teacherDelete =  async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const result = await Teacher.findByIdAndDelete(id);
  
    if (result === null) {
      res.status(500).json({ success: false, message: "not deleted" });
      return;
    }
    res.status(201).json({ success: true, message: "successfully deleted" });
  }

  //teacher update method
  export const teacherUpdate = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const userDoc = await Student.findOne({ email: data.email });
    const userDoc3 = await Teacher.findOne({ email: data.email });
    const userDoc2 = await adminModel.findOne({ email: data.email });
    if (userDoc != null || userDoc2 != null || userDoc3 != null) {
      console.log("email already exists");
      return res.status(201).json({
        status: data.status,
        message: "email already exists",
      });
    }
  
    try {
      const updated = await Teacher.findByIdAndUpdate(id, data, { new: true });
      res.status(200).json({
        success: true,
        updated: updated,
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({
        success: false,
        message: "product not updated",
      });
    }
  }

  //student update method
  export const studentUpdate = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      const updated = await Student.findByIdAndUpdate(id, data, { new: true });
      res.status(200).json({
        success: true,
        updated: updated,
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({
        success: false,
        message: "product not updated",
      });
    }
  }

  //student delete method
  export const studentDelete =  async (req, res) => {
    const id = req.params.id;
    const result = await Student.findByIdAndDelete(id);
  
    if (result === null) {
      res.status(500).json({ success: false, message: "not deleted" });
      return;
    }
    res.status(201).json({ success: true, message: "successfully deleted" });
  }

  //finding user type with JWT
  export const userTypeFind = async (req, res) => {
    const token = req.body.token;
    let decoded = "";
    try {
      decoded = await jwt.verify(token, secret);
    //   console.log(decoded, "decoded"); // Decoded payload
    } catch (err) {
      console.error(err);
    }

    if (decoded === "") {
      return res.status(500).json({ status: false, message: "invalid token" });
    }
    // console.log(decoded, "decoded");
    const TeacherDoc = await Teacher.findOne({ email: decoded.email });
    const StudentDoc = await Student.findOne({ email: decoded.email });
    const adminDoc = await adminModel.findOne({ email: decoded.email });
    if (TeacherDoc != null) {

      return res
        .status(201)
        .json({ data: decoded, success: true, type: "teacher" });
    }
    if (adminDoc != null) {
     
      return res
        .status(201)
        .json({ data: decoded, success: true, type: "admin" });
    }
    if (StudentDoc != null) {
  
      return res
        .status(201)
        .json({ data: decoded, success: true, type: "student" });
    }
    return res.status(501).json({ status: false, message: "invalid token" });
  }

  //for teacher booking post method
  export const teacherBooking = async (req, res) => {
    const data = req.body;
    if (
      !data.teacherName ||
      !data.studentName ||
      !data.status ||
      !data.message ||
      !data.to ||
      !data.from
    ) {
      return res.status(500).json({ message: "please fill all fields" });
    }
    const newData = new Appointment(data);
    try {
      await newData.save();
      return res
        .status(201)
        .json({ data: newData, message: "successfuly added (appointment)" });
    } catch (error) {
      return res.status(500).json({ message: "error occured" });
    }
  }

  //for getting all appointments
  export const getAllAppointments =  async (req, res) => {
    const id = req.body.id;
    const type = req.body.type;

    if (type === "student") {
      try {
        let data = await Appointment.find({ from: id });
        res.status(201).json({ data });
      } catch (error) {
        return res.status(500).json({ message: "server error" });
      }
    }
    if (type === "teacher") {
      try {
        let data = await Appointment.find({ to: id });
        res.status(201).json({ data: data });
      } catch (error) {
        return res.status(500).json({ message: "server error" });
      }
    }
  }

  //for updating appointment status
  export const updateAppointment =  async (req, res) => {
    const { id } = req.params;
    const data = req.body;
  
    try {
      const updated = await Appointment.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.status(200).json({
        success: true,
        updated: updated,
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({
        success: false,
        message: "product not updated",
      });
    }
  }

  //for getting student details from student id
  export const studentIdToData =  async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Student.find({ _id: id });
        console.log(data);
        if (data === null || data.length === 0) {
          return res.status(500).json({ status: false, message: "no data found" });
        }
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({message:"invalid student id"})
    }

  }

  //for getting teacher details from teacher id
  export const teacherIdToData = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Teacher.find({ _id: id });
        console.log(data);
        if (data === null || data.length === 0) {
          return res.status(500).json({ status: false, message: "no data found" });
        }
        console.log("teacher id getting successfull")
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({message:"invalid teacher id"})
        
    }

  }
