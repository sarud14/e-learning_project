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

coursesService.getAllCourses = async (options = {}) => {
  const whereClause = {};
  if (options.isPublic) {
    whereClause.isPublished = true;
  }
  const courses = await prisma.course.findMany({
    where: whereClause,
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      picture_url: true,
      difficulty: true,
      createAt: true,
      updateAt: true,
      isPublished: true,
      Instructor: {
        select: {
          first_name: true,
          last_name: true,
          instructorDetail: {
            select: {
              picture_url: true,
              job: true,
              description: true,
            },
          },
        },
      },
      Category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
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

coursesService.editStatusCourses = async (courseId, isPublished) => {
  const existingCourse = await prisma.course.findUnique({
    where: { id: +courseId },
  });
  if (!existingCourse) {
    createError(404, "Course not found.");
  }
  const editedStatusCourses = await prisma.course.update({
    where: { id: +courseId },
    data: {
      isPublished: isPublished,
    },
    select: {
      id: true,
      title: true,
      isPublished: true,
      updateAt: true,
    },
  });
  return editedStatusCourses;
};

coursesService.getCourseById = async (courseId) => {
  const course = await prisma.course.findUnique({
    where: {
      id: +courseId,
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      picture_url: true,
      difficulty: true,
      createAt: true,
      updateAt: true,
      isPublished: true,
      Instructor: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      },
      Category: {
        select: {
          id: true,
          name: true,
        },
      },
      lessons: {
        select: {
          id: true,
          title: true,
          description: true,
          video_url: true,
          order_in_course: true,
        },
        orderBy: {
          order_in_course: "asc",
        },
      },
    },
  });
  if (!course) {
    createError(404, "Course not found or not published.");
  }

  return course;
};

export default coursesService;
