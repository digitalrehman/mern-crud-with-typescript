import express from "express";
import { createUser, deleteUser, getAllUser, getById, updateUser } from "../controllers/user.controller.ts";
const route = express.Router();

route.post("/create", createUser)
route.get("/alluser", getAllUser)
route.get("/getById/:id", getById)
route.put("/updateUser/:id", updateUser)
route.delete("/deleteUser/:id", deleteUser)

export default route;
