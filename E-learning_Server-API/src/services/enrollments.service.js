import prisma from "../config/prisma.config.js";

const enrollmentService = {}

enrollmentService.studentGetEnroll = async () => {
  return await prisma.enrollment.findMany({
    where: {
      accountId: accountId,
      status: "ACTIVE"
    },
    include: {
      course: true
    },
    orderBy: {
      enrollment_date: "desc"
    }
  })
  const formattedEnrollments = enrollments.map(enrollment => ({
    enrollmentId: enrollment.id,
    enrollmentDate: enrollment.enrollment_date,
    status: enrollment.status,
    course: {
      id: enrollment.Course.id,
      title: enrollment.Course.title,
      description: enrollment.Course.description,
      price: enrollment.Course.price,
      picture_url: enrollment.Course.picture_url,
      difficulty: enrollment.Course.difficulty,
    }
  }));

  return formattedEnrollments;
}

export default enrollmentService