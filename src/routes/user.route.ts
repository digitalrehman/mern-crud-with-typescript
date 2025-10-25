import express from "express";
import { createUser, getAllUser, getById } from "../controllers/user.controller.ts";
const route = express.Router();

route.post("/create", createUser)
route.get("/alluser", getAllUser)
route.get("/getById/:id", getById)

export default route;
