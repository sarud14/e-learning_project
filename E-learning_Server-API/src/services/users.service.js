import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";

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

userService.getAllUsers = async () => {
  return await prisma.account.findMany({
    omit: {
      password: true,
      createAt: true,
      updateAt: true,
    },
  });
};

userService.updateUserRole = async (id, role) => {
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

userService.deleteUser = async (userId) => {
  const existingUser = await prisma.account.findUnique({
    where: { id: +userId },
  });

  if (!existingUser) {
    createError(404, "User not found.");
  }
  const deletedUser = await prisma.account.delete({
    where: { id: +userId },
  });

  return deletedUser;
};

userService.editUser = async (userId, data) => {
  const existingUser = await prisma.account.findUnique({
    where: { id: +userId },
  });
  if (!existingUser) {
    createError(404, "User not found.");
  }
  const editedUser = await prisma.account.update({
    where: { id: +userId },
    data: {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      role: data.role,
    },
    omit: {
      password: true,
      createAt: true,
      updateAt: true,
    },
  });
  return editedUser;
};

export default userService;
