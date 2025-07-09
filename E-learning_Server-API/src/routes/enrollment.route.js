import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import { createEnrollmentByStudent, getMyCourses } from "../controllers/enrollment.controller.js";
import checkRole from "../middlewares/check-auth-role.middleware.js";

const enrollmentRoute = express.Router()

enrollmentRoute.get("/my-courses", authorization, getMyCourses)
enrollmentRoute.post("/:courseId", authorization, checkRole("USER","ADMIN"), createEnrollmentByStudent)

export default enrollmentRoute


