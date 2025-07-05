import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import { getAllUsers, updateUserRole } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.get("/me", authorization, getAllUsers);
userRoute.put("/me/update/:id", authorization, updateUserRole );

export default userRoute;
