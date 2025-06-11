import mongoose from "mongoose"
const MONGO_URI = "mongodb://localhost:27017/Sports_Management_System"

const connectDB = async () =>{
    try {
        const conn =  await mongoose.connect(MONGO_URI)
        console.log("Connected Successfully") 
    } catch (error) {
        console.log(error)
    }
} 

export default connectDB;