import express from "express";
import { create, Delete, getAll, getOne, Update } from "../controllers/empController.js";

const route = express.Router();


// Api EndPoints
route.post("/create", create);
route.get("/get",getAll);
route.get("/getone/:id", getOne);
route.get("/delete/:id", Delete);
route.put("/update/:id", Update);

export default route;