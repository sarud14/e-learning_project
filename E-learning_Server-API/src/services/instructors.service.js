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
  return await prisma.course.findMany({
    where: {
      instructorId: instructorId
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

instructorService.createNewCourses = async () => {

}

export default instructorService