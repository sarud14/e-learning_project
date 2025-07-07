import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import checkRole from "../middlewares/check-auth-role.middleware.js"
import { getAllUsers, registerInstructor } from "../controllers/admin.controller.js";

const adminRoute = express.Router()

adminRoute.post("/register-instructor", authorization, checkRole("ADMIN"), registerInstructor)
adminRoute.get("/all-user", authorization, checkRole("ADMIN"), getAllUsers)
adminRoute.patch("/users/:id", authorization, checkRole("ADMIN"), () => { })
adminRoute.delete("/users/:id", authorization, checkRole("ADMIN"), () => { })
adminRoute.get("/courses", authorization, checkRole("ADMIN"), () => { })
adminRoute.patch("/courses", authorization, checkRole("ADMIN"), () => { })
adminRoute.delete("/courses", authorization, checkRole("ADMIN"), () => { })
adminRoute.get("/courses", authorization, checkRole("ADMIN"), () => { })


export default adminRoute