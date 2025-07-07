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

export const editCourseStatus = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const { isPublished } = req.body;
        if (typeof isPublished !== 'boolean') {
            createError(400, "Invalid status provided. 'isPublished' need to true or false.");
        }

        const editedCourseStatus = await coursesService.editStatusCourses(id, isPublished);

        res.status(200).json({
            message: `Course ID: ${id} status updated to ${isPublished}.`,
            result: editedCourseStatus,
        });
    } catch (error) {
        console.error("editCourseStatus err", error);
        next(error);
    }
};