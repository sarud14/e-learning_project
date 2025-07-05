import adminService from "../services/admin.service.js";
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