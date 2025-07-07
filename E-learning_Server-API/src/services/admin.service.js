import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";
import bcrypt from "bcryptjs";
import authenticateService from "../services/authenticate.service.js"

const adminService = {};

adminService.getAdminById = async (id) => {
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

adminService.registerInstructor = async (email, password, first_name, last_name) => {
  const existingAccount = await authenticateService.findByEmail(email);
  if(existingAccount){
    createError(400,"Email already been registered.")
  }
  const hashPassword = await bcrypt.hash(password, 10)
  const instructorData = {
            email: email,
            password: hashPassword,
            first_name: first_name,
            last_name: last_name,
            role: "USER_INSTRUCTOR",
        };
  const newInstructor = await authenticateService.createUser(instructorData)
  return newInstructor
}

export default adminService