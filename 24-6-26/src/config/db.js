import mongoose from "mongoose";

const connectDB = async() => {
    try{
        let connect = await mongoose.connect(process.env.MONGODB_URI,{
            serverSelectionTimeoutMS:5000,
            socketTimeoutMS:45000,
        })

        console.log(`mongodb connected!! ${connect.connection.host}`);
    }catch(error){
        console.log("mongodb connetion error ",error.message);
        process.exit(1)
    }
}

export default connectDB