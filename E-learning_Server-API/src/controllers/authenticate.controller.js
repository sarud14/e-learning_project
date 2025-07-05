import authenticateService from "../services/authenticate.service.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/create-error.util.js";

export const register = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name } = req.body;
    const user = await authenticateService.findByEmail(email);
    // console.log(user);
    if (user) {
      createError(400, "Email already been used");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    const data = { email, password: hashPassword, first_name, last_name };
    const result = await authenticateService.createUser(data);

    res.status(201).json({ message: `Register ${result.first_name} success` });
  } catch (error) {
    console.log("register err", error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authenticateService.findByEmail(email);
    if (!user) {
      createError(400, "Email or Password is invalid");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      createError(400, "Email or Password is invalid");
    }
    const payload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
      algorithm: "HS256"
    });
    res.json({
      message: `Welcome back ${user.first_name}`,
      payload,
      token,
    });
  } catch (error) {
    console.log("login err", error);
    next(error);
  }
};
