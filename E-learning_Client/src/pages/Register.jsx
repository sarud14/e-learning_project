import Footer from "../components/Footer";
import HeaderNavbar from "../components/Navbar/HeaderNavbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authenticateApt } from "../services/authenticateService";
import { registerSchema } from "../validators/validators";

function  Register() {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });
  const { isSubmitting, errors } = formState;
  
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = await authenticateApt.post("/register", data);

      console.log(resp);

      alert(resp.data.message);

      reset();
    } catch (err) {
      const errMsg = err.message || "An error occurred during registration.";
      alert(`Error: ${errMsg}`);
      console.error(err);
    }
  };

  return (
    <div className="h-screen">
      <HeaderNavbar />

      <div className="pt-12 h-fit flex justify-center items-center">
        <div className="bg-info rounded-box border p-10 text-primary mt-18 w-lg">
          <p className="text-4xl text-center font-bold">Sign Up</p>
          <p className="text-lg text-center mt-1">
            Create an account to unlock exclusive features.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label>First Name</label>
              <input
                type="text"
                className="input bg-white w-full mt-2"
                placeholder="First Name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="text-sm text-error mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <label>Last Name</label>
              <input
                type="text"
                className="input bg-white w-full mt-2"
                placeholder="Last Name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className="text-sm text-error mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <label>Email</label>
              <input
                type="email"
                className="input bg-white w-full mt-2"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-error mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <label>Password</label>
              <input
                type="password"
                className="input bg-white w-full mt-2"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-error mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-2">
              <label>Confirm Password</label>
              <input
                type="password"
                className="input bg-white w-full mt-2"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-error mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="flex gap-2 justify-start items-center mt-2">
              <input type="checkbox" />
              <p>
                I agree with{" "}
                <a href="/" className="hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 text-info"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <div className="divider divider-primary mt-4">Or</div>
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
export default Register;
