import createError from "../utils/create-error.util.js"

const checkAuthRole = (role) => (req, res, next) => {
  console.log(req.user)
  console.log(req.user.role)
  if(!req.user) {
    createError(401, "Unauthorized")
  }
  if(role.includes(req.user.role)){
    next()
  } else {
    createError(403, "Forbidden")
  }
}

export default checkAuthRole