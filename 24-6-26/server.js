import express from "express";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config({ path: "./.env" });
import connectDB from "./src/config/db.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const port = 8000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send("server running...");
});

const startServer = async () => {
  try {
    await connectDB(); // Wait for the database to connect first
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
};

startServer();
