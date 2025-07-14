import Footer from "../components/Footer";
import HeaderNavbar from "../components/Navbar/HeaderNavbar";
import useUserStore from "../stores/userStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validators/validators";
import { useNavigate } from "react-router";


function Login() {
  const navi = useNavigate()
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });
  const { isSubmitting, errors } = formState;
  const login = useUserStore((state) => state.login);
  const token = useUserStore((state) => state.token);
  console.log(token);
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = await login(data);

      console.log(resp);

      alert(resp.data.message);

      reset();
      navi("/dashboard")
    } catch (err) {
      const errMsg = err.message || "An error occurred during login.";
      alert(`Error: ${errMsg}`);
      console.error(err);
    }
  };

  return (
    <div className="h-screen">
      <HeaderNavbar />
      <div className="pt-18 h-fit flex justify-center items-center">
        <div className="bg-info rounded-box border p-10 text-primary mt-10 w-lg">
          <p className="text-4xl text-center font-bold mt-4">Login</p>
          <p className="text-lg text-center mt-4">
            Welcome back! Please log in to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
              <label>Email</label>
              <input
                type="email"
                className="input bg-white w-full mt-4"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-error mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input
                type="password"
                className="input bg-white w-full mt-4"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-error mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-end mt-2">
              <a href="/" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex gap-2 justify-start items-center">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <button
              className="btn btn-primary w-full mt-6 text-info"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="divider divider-primary mt-8">Or</div>
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <a href="/register" className="hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
export default Login;
