import express from "express";
import { getLessonById, getPublishedLessons } from "../controllers/non-auth.controller.js";
import authorization from "../middlewares/authorization.middleware.js";
import checkRole from "../middlewares/check-auth-role.middleware.js"
import { createLesson, deleteLesson, updateLesson } from "../controllers/lesson.controller.js";

const lessonRoute = express.Router()

lessonRoute.get("/courses/:id/lessons", getPublishedLessons)
lessonRoute.post("/courses/:id/lessons",authorization , checkRole("ADMIN"), createLesson)
lessonRoute.get("/lessons/:id", getLessonById)
lessonRoute.put("/lessons/:id", authorization, checkRole("ADMIN"), updateLesson)
lessonRoute.delete("/lessons/:id", authorization,checkRole("ADMIN"), deleteLesson)


export default lessonRoute