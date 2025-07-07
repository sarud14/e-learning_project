import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";

const coursesService = {};

coursesService.checkInstructorCourseOwnership = async (
  courseId,
  instructorId
) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { account_id: true },
  });
  if (!course || course.account_id !== instructorId) {
    return false;
  } else {
    return true;
  }
};

coursesService.getAllCourses = async () => {
  const courses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      Instructor: { select: { first_name: true, last_name: true } },
    },
  });
  return courses;
};

coursesService.deleteCourse = async (courseId) => {
  const existingCourse = await prisma.course.findUnique({
    where: { id: +courseId },
  });

  if (!existingCourse) {
    createError(404, "Course not found.");
  }
  const deletedCourse = await prisma.course.delete({
    where: { id: +courseId },
  });

  return deletedCourse;
};

export default coursesService;
