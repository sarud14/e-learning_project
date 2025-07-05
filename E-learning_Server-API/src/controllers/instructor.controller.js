import instructorService from "../services/instructors.service.js";
import createError from "../utils/create-error.util.js";

export const getInstructorById = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    // console.log('req.user', req.user)
    const users = await instructorService.getInstructorById(req.user.id);
    console.log(users);
    res.json({ message: "Instructor detail", result: users });
  } catch (error) {
    console.log("getStudentById err", error);
    next(error);
  }
};