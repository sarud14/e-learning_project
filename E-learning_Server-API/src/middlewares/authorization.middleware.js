import jwt from "jsonwebtoken";
import createError from "../utils/create-error.util.js";
import userService from "../services/users.service.js";

export default async function (req, res, next) {
  try {
    const authorization = req.headers.authorization;
    console.log(authorization);
    if (!authorization || !authorization.startsWith("Bearer")) {
      createError(401, "don't have header");
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      createError(401, "Unauthorized");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const foundUserById = await userService.getUserById("id", payload.id);
    if (!foundUserById) {
      createError(401, "Unauthorized");
    }
    const { password, createAt, updateAt, ...userData } = foundUserById;
    req.user = userData;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}
