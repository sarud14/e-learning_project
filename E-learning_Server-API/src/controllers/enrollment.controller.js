import enrollmentService from "../services/enrollments.service.js";
import createError from "../utils/create-error.util.js";




export const getMyCourses = async (req, res, next) => {
  try {
    const accountId = req.user.id;
    if (!accountId) {
      createError(401, "Unauthorized");
    }
    const enrollments = await enrollmentService.studentGetEnroll(accountId);
    console.log(enrollments);
    res.json({ message: "enrollment detail", result: enrollments });
  } catch (error) {
    console.log("getMyCourses err", error);
    next(error);
  }
};

export const createEnrollmentByStudent = async (req, res, next) => {
  try {
    const courseId = req.params.courseId;
    const accountId = req.user.id;

    if (!courseId) {
      throw createError(400, "Course ID is required to enroll.");
    }

    const newEnrollment = await enrollmentService.enrollUserInCourse(
      courseId,
      accountId
    );

    res.json({
      message: "Successful enrolled in the course.",
      result: newEnrollment,
    });
  } catch (error) {
    console.error("createEnrollmentByStudent err", error);
    next(error);
  }
};
