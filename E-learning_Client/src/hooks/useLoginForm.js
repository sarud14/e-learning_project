import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validators/validators";
import { authenticateApt } from "../services/authenticateService";
import { useNavigate } from "react-router";

const useLoginForm = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = await authenticateApt.post("/login", data);

      console.log(resp);

      alert(resp.data.message);

      // if (resp.data.token) {
      //   localStorage.setItem('token', resp.data.token);
      // }

      reset();
      navigate('/');
    } catch (err) {
      const errMsg = err.message || "An error occurred during login.";
      alert(`Error: ${errMsg}`);
      console.error(err);
    }
  };

  return { handleSubmit, register, isSubmitting, errors, onSubmit, reset };
};

export default useLoginForm;