import express from "express";
import authorization from "../middlewares/authorization.middleware.js";

const enrollmentRoute = express.Router()

enrollmentRoute.get("/my-courses", ()=> {})

export default enrollmentRoute