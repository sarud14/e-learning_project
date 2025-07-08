import coursesService from "../services/courses.service.js";
import lessonService from "../services/lesson.service.js";
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

export const getPublishedLessons = async (req, res, next) => {
  try {
    const lessons = await lessonService.getAllLessons({ isPublic: true });
    if (!lessons || lessons.length === 0) {
      createError(404, "No published lessons found.");
    }
    res.json({
      message: "Published lessons retrieved successful.",
      result: lessons,
    });
  } catch (error) {
    console.error("getPublishedLessons err", error);
    next(error);
  }
};

export const getLessonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const lesson = await lessonService.getLessonById(id);

    res.status(200).json({
      message: `Lesson ID: ${id} retrieved successful.`,
      result: lesson,
    });
  } catch (error) {
    console.error("getLessonById err", error);
    next(error); 
  }
};
