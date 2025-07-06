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

export const getInstructorCourses = async (req,res,next) => {
  try {
    const instructorId = req.user.id
    if(!instructorId) {
      createError(401, "Unauthorized");
    }
    const courses = await instructorService.getInstructorCourses(instructorId)
    res.json({ message: "Instructor's courses detail", result: courses });
  } catch (error) {
    console.log("getInstructorCourses err". error)
    next(error)
  }
}