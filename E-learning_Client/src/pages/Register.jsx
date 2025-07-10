import Footer from "../components/Footer";
import HeaderNavbar from "../components/HeaderNavbar";

function Register() {
  return (
    <div className="h-screen">
      <HeaderNavbar />
      <div className="pt-12 h-fit flex justify-center items-center">
        <div className="bg-info rounded-box border p-10 text-primary mt-14 w-lg h-165">
          <p className="text-4xl text-center font-bold">Sign Up</p>
          <p className="text-lg text-center mt-2">
            Create an account to unlock exclusive features.
          </p>
          <div className="mt-4">
            <label>First Name</label>
            <input
              type="text"
              className="input bg-white w-full mt-2"
              placeholder="First Name"
            />
          </div>
          <div className="mt-2">
            <label>Last Name</label>
            <input
              type="text"
              className="input bg-white w-full mt-2"
              placeholder="Last Name"
            />
          </div>
          <div className="mt-2">
            <label>Password</label>
            <input
              type="password"
              className="input bg-white w-full mt-2"
              placeholder="Password"
            />
          </div>
          <div className="mt-2">
            <label>Confirm Password</label>
            <input
              type="password"
              className="input bg-white w-full mt-2"
              placeholder="Confirm Password"
            />
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
          <button className="btn btn-primary w-full mt-6 text-info">
            Create Account
          </button>
          <div className="divider divider-primary mt-8">Or</div>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <a href="/register" className="hover:underline">
              Login
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
export default Register;
