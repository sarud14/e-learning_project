import prisma from "../config/prisma.config.js";

const instructorService = {};

instructorService.getInstructorById = async (id) => {
  console.log(id);
  return await prisma.account.findMany({
    where: { id: +id },
    omit: {
      password: true,
      createAt: true,
      updateAt: true,
    },
  });
};

instructorService.getInstructorCourses = async (instructorId) => {
  const courses = await prisma.course.findMany({
    where: {
      account_id: instructorId
    },
    include: {
      Instructor: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        }
      },
      Category: {
        select: {
          id: true,
          name: true,
        }
      },
      lessons: {
        orderBy: {
          order_in_course: 'asc'
        }
      }
    },
    orderBy: {
      createAt: "desc"
    }
  })
  const formattedCourses = courses.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description,
    price: course.price,
    picture_url: course.picture_url,
    difficulty: course.difficulty,
    isPublished: course.isPublished,
  }));

  return formattedCourses;
}

instructorService.createNewCourses = async (courseData) => {
  const newCourse = await prisma.course.create({
    data: {
      title: courseData.title,
      description: courseData.description,
      price: courseData.price,
      picture_url: courseData.picture_url,
      difficulty: courseData.difficulty,
      categoryId: courseData.categoryId,
      account_id: courseData.instructorId,
      isPublished: courseData.isPublished,
    },
    include: {
      Instructor: {
        select: { id: true, first_name: true, last_name: true }
      },
      Category: {
        select: { id: true, name: true }
      }
    }
  });
  return newCourse;
}

instructorService.getStudentsInCourse = async (courseId) => {
  const enrollments = await prisma.enrollment.findMany({
    where: {
      course_id: courseId
    },
    include: {
      Account: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
        }
      },
      Course: {
        select: {
          id: true,
          title: true,
        }
      },
    },
    orderBy: {
      enrollment_date: 'asc'
    }
  })
  const formattedEnrollments = enrollments.map(enrollment => ({
    enrollmentId: enrollment.id,
    enrollmentDate: enrollment.enrollment_date,
    status: enrollment.status,
    student: {
      id: enrollment.Account.id,
      firstName: enrollment.Account.first_name,
      lastName: enrollment.Account.last_name,
      email: enrollment.Account.email,
    },
    course: {
      id: enrollment.Course.id,
      title: enrollment.Course.title,
    }
  }));

  return formattedEnrollments;
}


export default instructorService