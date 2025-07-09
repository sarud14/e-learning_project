import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";

const enrollmentService = {};

enrollmentService.studentGetEnroll = async (accountId) => {
  const enrollments = await prisma.enrollment.findMany({
    where: {
      accountId: accountId,
      status: "ACTIVE",
    },
    include: {
      Course: true,
    },
    orderBy: {
      enrollment_date: "desc",
    },
  });
  const formattedEnrollments = enrollments.map((enrollment) => ({
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
    },
  }));

  return formattedEnrollments;
};

enrollmentService.enrollUserInCourse = async (course_id, accountId) => {
  const course = await prisma.course.findUnique({
    where: { id: +course_id },
    select: { id: true, title: true, price: true },
  });
  if (!course) {
    createError(404, `Course ID: ${course_id} not found.`);
  }
  const account = await prisma.account.findUnique({
    where: { id: +accountId },
    select: { id: true },
  });
  if (!account) {
    throw createError(404, `Account ID: ${accountId} not found.`);
  }
  const existingEnrollment = await prisma.enrollment.findFirst({
    where: {
        accountId: +accountId,
        course_id: +course_id,
      },
  });
  if (existingEnrollment) {
    createError(409, `You are already enrolled in this course.`);
  }

  const newEnrollment = await prisma.enrollment.create({
    data: {
      accountId: +accountId,
      course_id: +course_id,
      enrollment_date: new Date(),
      status: "ACTIVE"
    },
    include: {
      Account: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      },
      Course: {
        select: {
          id: true,
          title: true,
          price: true,
        },
      },
    },
  });

  return newEnrollment;
};

export default enrollmentService;
