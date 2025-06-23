import express from"express";
import cors from "cors";
 import bodyParser from "body-parser";
import dotenv from "dotenv"
import DB_Connection from "./config/dbConnection.js"
import route from "./routes/empRoute.js";

const app = express();
// middlewares
app.use(cors());
dotenv.config();
app.use(bodyParser.json())
DB_Connection();


const port  = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
})


app.use("/api", route);
