import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import { getStudentById } from "../controllers/student.controller.js";
import { getAdminById } from "../controllers/admin.controller.js";
import { getInstructorById } from "../controllers/instructor.controller.js";
import checkRole from "../middlewares/check-auth-role.middleware.js";

const dashboardRoute = express.Router();

dashboardRoute.get("/student", authorization, checkRole(["USER"]),getStudentById);
dashboardRoute.get("/instructor", authorization, getInstructorById);
dashboardRoute.get("/admin", authorization, getAdminById);

export default dashboardRoute;
