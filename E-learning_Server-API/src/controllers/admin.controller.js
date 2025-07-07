import adminService from "../services/admin.service.js";
import userService from "../services/users.service.js";
import createError from "../utils/create-error.util.js";

export const getAdminById = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    // console.log('req.user', req.user)
    const users = await adminService.getAdminById(req.user.id);
    console.log(users);
    res.json({ message: "admin detail", result: users });
  } catch (error) {
    console.log("getStudentById err", error);
    next(error);
  }
};

export const registerInstructor = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name } = req.body;
    if (!email || !password || !first_name || !last_name) {
      createError(400, "All fields (email, password, firstName, lastName) are required.");
    }
    const newInstructor = await adminService.registerInstructor(email, password, first_name, last_name)
    res.status(201).json({
      message: "Instructor registered successfully.",
      instructor: {
        id: newInstructor.id,
        email: newInstructor.email,
        first_name: newInstructor.first_name,
        last_name: newInstructor.last_name,
        role: newInstructor.role,
        createAt: newInstructor.createAt,
      }
    });
  } catch (error) {
    console.log('registerInstructor err', error)
    next(error)
  }
}

export const getAllUsers = async (req, res, next) => {
   console.log("--- getAllUsers Controller hit! ---")
  try {
    const users = await userService.getAllUsers();

    if (!users || users.length === 0) {
      createError(404, "Not have user in system")
    }
    res.json({
      message: "All users retrieved successful.",
      result: users
    });
  } catch (error) {
    console.error("getAllUsers err", error);
    next(error);
  }
};