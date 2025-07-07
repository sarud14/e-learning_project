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






export default coursesService