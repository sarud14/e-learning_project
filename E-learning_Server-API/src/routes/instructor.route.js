import express from "express";
import authorization from "../middlewares/authorization.middleware.js";

const instructorRoute = express.Router();

instructorRoute.get("/courses", ()=> {})

export default instructorRoute