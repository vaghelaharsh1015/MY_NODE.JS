import mongoose from "mongoose";

const uri = "mongodb+srv://harsh_db_user:<db_password>@cluster0.n6te9ga.mongodb.net/?appName=Cluster0"

const connectDB = async() => {
  try{
    await mongoose.connect(uri)
    console.log("MongoDB Connected Successfully.");
  }catch(err){
    console.error("MongoDB Connection Error :", err.message);
    process.exit(1);
  }
}

export default connectDB


