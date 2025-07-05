import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import { getUserById, updateUserRole } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.get("/me", authorization, getUserById);
userRoute.put("/me/update/:id", authorization, updateUserRole );

export default userRoute;
