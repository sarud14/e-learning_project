import prisma from "../config/prisma.config.js";

const coursesService = {}

coursesService.checkInstructorCourseOwnership = async (courseId, instructorId) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { account_id: true }
  });
  if (!course || course.account_id !== instructorId) {
    return false;
  } else {
    return true;
  }
}

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




export default coursesService