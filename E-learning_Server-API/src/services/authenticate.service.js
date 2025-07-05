import prisma from "../config/prisma.config.js";

const authenticateService = {};

authenticateService.findByEmail = (email) => {
  return prisma.account.findUnique({
    where: {
      email,
    },
  });
};

authenticateService.createUser = (data) => {
  return prisma.account.create({ data });
};


export default authenticateService;
