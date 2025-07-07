import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import checkRole from "../middlewares/check-auth-role.middleware.js"
import { getAllUsers, registerInstructor } from "../controllers/admin.controller.js";
import { getAllCourses } from "../controllers/courses.controller.js";

const adminRoute = express.Router()

adminRoute.post("/register-instructor", authorization, checkRole("ADMIN"), registerInstructor)
adminRoute.get("/all-user", authorization, checkRole("ADMIN"), getAllUsers)
adminRoute.patch("/users/:id", authorization, checkRole("ADMIN"), () => { })
adminRoute.delete("/users/:id", authorization, checkRole("ADMIN"), () => { })
adminRoute.get("/all-courses", authorization, checkRole("ADMIN"), getAllCourses)
adminRoute.patch("/courses/:id/status", authorization, checkRole("ADMIN"), () => { })
adminRoute.delete("/courses/:id", authorization, checkRole("ADMIN"), () => { })
adminRoute.get("/transactions", authorization, checkRole("ADMIN"), () => { })


export default adminRoute