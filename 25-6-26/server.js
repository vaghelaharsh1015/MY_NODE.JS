import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import Student from "./src/models/studentModel.js";

import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config({ path: "./.env" });
const app = express();
const port = 8001;

connectDB();

app.get("/", (req, res) => {
    res.send("Server Running...");
});

app.get('/add-student' , async(req , res) => {
    const student = await Student.create()  
    res.send(student)
})

app.get('/students' , async(req , res) => {
    const students = await Student.find();

    res.send(students)
})

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
