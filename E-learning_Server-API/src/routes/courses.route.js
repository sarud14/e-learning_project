import express from "express";
import { getCourseById, getPublishedCourses } from "../controllers/non-auth.controller.js";

const courseRoute = express.Router()

courseRoute.get("/courses", getPublishedCourses)
courseRoute.get("/courses/:id", getCourseById)


export default courseRoute