import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import checkRole from "../middlewares/check-auth-role.middleware.js"
import { createNewCourses, getInstructorCourses } from "../controllers/instructor.controller.js";
const instructorRoute = express.Router();

instructorRoute.get("/courses", authorization, checkRole("USER_INSTRUCTOR"), getInstructorCourses)
instructorRoute.post("/new-courses", authorization, checkRole("USER_INSTRUCTOR"), createNewCourses)
instructorRoute.get("/student", authorization, checkRole("USER_INSTRUCTOR"), )

export default instructorRoute