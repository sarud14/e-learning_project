import studentService from "../services/students.service.js";
import createError from "../utils/create-error.util.js";

export const getStudentById = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    console.log('req.user', req.user)
    const users = await studentService.getStudentById(req.user.id);
    console.log(users);
    res.json({ message: "Student detail", result: users });
  } catch (error) {
    console.log("getStudentById err", error);
    next(error);
  }
};