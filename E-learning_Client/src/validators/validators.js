import { string, object, ref} from "yup"

export const registerSchema = object({
  email: string().email("email invalid ").required("Please put your email"),
  password: string().min(6, "Password need more than 6 character"),
  first_name: string().min(3, "Name need more than 3 character"),
  last_name: string().min(3, "Name need more than 3 character"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password not match"
  ),
}).noUnknown();;

export const loginSchema = object({
  email: string().email("email invalid ").required("Please put your email"),
  password: string().min(6, "Password need more than 6 character"),
}).noUnknown();;
