import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validators/validators";
import { authenticateApt } from "../services/authenticateService";

const useRegisterForm = () => {
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

  return { handleSubmit, register, isSubmitting, errors, onSubmit, reset };
};

export default useRegisterForm;
