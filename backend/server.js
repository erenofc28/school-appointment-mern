import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";

const app = express();
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}));
app.use(cookieParser());
dotenv.config();
app.use(express.json());

app.use("/",router)

app.listen(5000, () => {
  connectDB();
  console.log("server started");
});


