import mongoose from "mongoose"



 const DB_Connection = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connection Successfull.")
        
    } catch (error) {
        console.log("ERROR WHILE CONNECTION TO DB:", error);
    }
}

export default DB_Connection;