import userService from "../services/users.service.js";
import createError from "../utils/create-error.util.js";


export const getUserById = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    const users = await userService.getUserById("id", req.user.id);
    console.log(users);
    res.json({ message: "User Info", result: users });
  } catch (error) {
    console.log("getUserById err", error);
    next(error);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    console.log(req.params)
    const id = +req.params.id;
    const { role } = req.body;
    console.log(id);
    console.log(req.body);

    const updateUser = await userService.updateUserRole(id,role);
    res.json({ message: `Update role success`, result: updateUser });
  } catch (error) {
    console.log("update role err", error);
    next(error);
  }
};
