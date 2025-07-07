import coursesService from "../services/courses.service.js";
import createError from "../utils/create-error.util.js";

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await coursesService.getAllCourses();

    if (!courses || courses.length === 0) {
      createError(404, "Not have courses in system");
    }

    res.json({
      message: "All courses retrieved successful.",
      result: courses,
    });
  } catch (error) {
    console.error("getAllCourses err", error);
    next(error);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCourse = await coursesService.deleteCourse(id);
    res.json({
      message: `Course ID: ${id} deleted successful`,
      result: deleteCourse,
    });
  } catch (error) {
    console.log('deleteCourse err', error)
    next(error)
  }
};
