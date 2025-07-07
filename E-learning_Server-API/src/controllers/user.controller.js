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
    console.log(req.params);
    const id = +req.params.id;
    const { role } = req.body;
    console.log(id);
    console.log(req.body);

    const updateUser = await userService.updateUserRole(id, role);
    res.json({ message: `Update role success`, result: updateUser });
  } catch (error) {
    console.log("update role err", error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await userService.deleteUser(id);

    res.json({
      message: `User ID: ${id} deleted successful.`,
      result: deletedUser,
    });
  } catch (error) {
    console.error("deleteUser err", error);
    next(error);
  }
};

export const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const editedUser = await userService.editUser(id, data);

    res.json({
      message: `User ID: ${id} edited successful.`,
      result: editedUser,
    });
  } catch (error) {
    console.error("editUser err", error);
    next(error);
  }
};
