import coursesService from "../services/courses.service.js";
import createError from "../utils/create-error.util.js";

export const getAllCourses = async (req, res, next) => {
    try {
        const courses = await coursesService.getAllCourses();

        if (!courses || courses.length === 0) {
            createError(404, "Not have courses in system")
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