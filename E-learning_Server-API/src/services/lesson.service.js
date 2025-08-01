import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";

const lessonService = {};

lessonService.getAllLessons = async (options = {}) => {
  const whereClause = {};
  if (options.isPublic) {
    whereClause.Course = {
      isPublished: true,
    };
    whereClause.isPublished = true;
  }
  const lessons = await prisma.lesson.findMany({
    where: whereClause,
    select: {
      id: true,
      title: true,
      description: true,
      video_url: true,
      order_in_course: true,
      isPublished: true,
      createAt: true,
      updateAt: true,
      Course: {
        select: {
          id: true,
          title: true,
          price: true,
          isPublished: true,
        },
      },
    },
    orderBy: {
      order_in_course: "asc",
    },
  });
  return lessons;
};

lessonService.getLessonById = async (lessonId) => {
  const lesson = await prisma.lesson.findUnique({
    where: {
      id: +lessonId,
      isPublished: true,
      Course: {
        isPublished: true,
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      video_url: true,
      order_in_course: true,
      isPublished: true,
      createAt: true,
      updateAt: true,
      Course: {
        select: {
          id: true,
          title: true,
          description: true,
          price: true,
          picture_url: true,
          difficulty: true,
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
          // comment ไว้ เผื่อ อนาคต ต้องใช้
          // lessons: { /* ... */ }
        },
      },
    },
  });
  if (!lesson) {
    createError(404, "Lesson not found or not published.");
  }

  return lesson;
};

lessonService.createLesson = async (data) => {
  const {
    courseId,
    title,
    description,
    video_url,
    order_in_course,
    isPublished,
  } = data;

  const existingCourse = await prisma.course.findUnique({
    where: { id: +courseId },
  });

  if (!existingCourse) {
    createError(404, "Course not found.");
  }

  const newLesson = await prisma.lesson.create({
    data: {
      title,
      description,
      video_url,
      order_in_course: order_in_course !== undefined ? +order_in_course : 0,
      isPublished: isPublished !== undefined ? Boolean(isPublished) : false,
      Course: {
        connect: {
          id: +courseId,
        },
      },
    },
  });

  return newLesson;
};

lessonService.updateLesson = async (lessonId, updateData) => {
  const existingLesson = await prisma.lesson.findUnique({
    where: { id: +lessonId },
  });
  if (!existingLesson) {
    createError(404, "Lesson not found");
  }
  const dataToUpdate = {
    title: updateData.title,
    description: updateData.description,
    video_url: updateData.video_url,
    order_in_course:
      updateData.order_in_course !== undefined
        ? +updateData.order_in_course
        : undefined,
    isPublished:
      updateData.isPublished !== undefined
        ? Boolean(updateData.isPublished)
        : undefined,
  };
  Object.keys(dataToUpdate).forEach((key) => {
    if (dataToUpdate[key] === undefined) {
      delete dataToUpdate[key];
    }
  });
  if (Object.keys(dataToUpdate).length === 0) {
    return existingLesson; 
  }
  const updatedLesson = await prisma.lesson.update({
    where: {
      id: +lessonId,
    },
    data: dataToUpdate,
  });

  return updatedLesson;
};

lessonService.deleteLesson = async (lessonId) => {
  const existingLesson = await prisma.lesson.findUnique({
    where: { id: +lessonId },
  });

  if (!existingLesson) {
    createError(404, "Lesson not found.");
  }
  const deletedLesson = await prisma.lesson.delete({
    where: { id: +lessonId },
  });

  return deletedLesson;
};



export default lessonService;
