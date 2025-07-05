import createError from "../utils/create-error.util.js";

const validate = (schema, options = {}) => {
  return async function (req, res, next) {
    try {
      const cleanBody = await schema.validate(req.body, {
        abortEarly: false,
        ...options,
      });
      req.body = cleanBody;
      next();
    } catch (error) {
      let errorMessage = error.errors.join("|||");
      console.log(errorMessage);
      createError(400, errorMessage);
    }
  };
};

export default validate
