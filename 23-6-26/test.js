import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/studentdb";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
    console.log("MongoDB Connected Successfully.");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    console.warn("Continuing without MongoDB. Set MONGO_URI to connect to your database.");
  }
};

export default connectDB;


