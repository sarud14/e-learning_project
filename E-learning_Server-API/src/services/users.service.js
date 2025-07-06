import prisma from "../config/prisma.config.js";

const userService = {};

userService.getUserById = async (column, value) => {
    return await prisma.account.findFirst({
      where: { [column]: value },
      omit: {
        password: true,
        createAt: true,
        updateAt: true,
      },
    });
  };

userService.updateUserRole = async (id, role ) => {
  
  console.log(id, role);
  const user = await prisma.account.update({
    where: {
      id: +id,
    },
    data: {
      role: role,
    },
  });
};

export default userService;
