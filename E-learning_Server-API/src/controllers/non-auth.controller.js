import coursesService from "../services/courses.service.js";
import createError from "../utils/create-error.util.js";

export const getPublishedCourses = async (req, res, next) => {
  try {
    const courses = await coursesService.getAllCourses({ isPublic: true });
    if (!courses || courses.length === 0) {
      createError({ message: "No published courses found." });
    }

    res.json({
      message: "Published courses retrieved successful.",
      result: courses,
    });
  } catch (error) {
    console.error("getPublishedCourses err", error);
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await coursesService.getCourseById(id);

    res.json({
      message: `Course ID: ${id} retrieved successfully.`,
      result: course,
    });
  } catch (error) {
    console.error("getCourseById err", error);
    next(error);
  }
};
