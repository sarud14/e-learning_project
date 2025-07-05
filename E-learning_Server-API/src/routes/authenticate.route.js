import express from "express";
import { register, login} from "../controllers/authenticate.controller.js";
import validator  from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../validation/schema.js";
 
const authenticateRoute = express.Router();

authenticateRoute.post("/register", validator(registerSchema),register);
authenticateRoute.post("/login", validator(loginSchema) ,login);

export default authenticateRoute;
