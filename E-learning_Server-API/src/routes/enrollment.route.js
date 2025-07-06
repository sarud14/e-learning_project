import express from "express";
import authorization from "../middlewares/authorization.middleware.js";
import { getMyCourses } from "../controllers/enrollment.controller.js";

const enrollmentRoute = express.Router()

enrollmentRoute.get("/my-courses", authorization, getMyCourses)

export default enrollmentRoute