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

export default instructorService