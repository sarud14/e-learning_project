import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import checkRole from "../middlewares/check-auth-role.middleware.js"
import { getAllUsers, registerInstructor } from "../controllers/admin.controller.js";
import { deleteCourse, editCourseStatus, getAllCourses } from "../controllers/courses.controller.js";
import {getAllTransaction} from "../controllers/payment.controller.js"
import { deleteUser, editUser } from "../controllers/user.controller.js";


const adminRoute = express.Router()

adminRoute.post("/register-instructor", authorization, checkRole("ADMIN"), registerInstructor)
adminRoute.get("/all-user", authorization, checkRole("ADMIN"), getAllUsers)
adminRoute.patch("/users/:id", authorization, checkRole("ADMIN"), editUser)
adminRoute.delete("/users/:id", authorization, checkRole("ADMIN"), deleteUser)
adminRoute.get("/all-courses", authorization, checkRole("ADMIN"), getAllCourses)
adminRoute.patch("/courses/:id/status", authorization, checkRole("ADMIN"), editCourseStatus)
adminRoute.delete("/courses/:id", authorization, checkRole("ADMIN"), deleteCourse)
adminRoute.get("/transactions", authorization, checkRole("ADMIN"), getAllTransaction)


export default adminRoute