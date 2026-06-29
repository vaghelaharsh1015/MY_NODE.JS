import express from "express";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config({ path: "./.env" });
import connectDB from "./src/config/db.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

connectDB();

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("server running...");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
