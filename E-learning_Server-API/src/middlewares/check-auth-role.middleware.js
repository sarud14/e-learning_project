import createError from "../utils/create-error.util.js";

const checkRole = (...role) => (req, res, next) => {
  if (!req.user) {
    createError(401, "Unauthorized")
  }

  if (role.includes(req.user.role)) {
    next();
  } else {
      createError(403, "Forbidden")
  }
};

export default checkRole
