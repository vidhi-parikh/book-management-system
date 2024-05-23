import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { baseConfig } from "../../../../config/baseConfig";
import { UserState } from "../../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setUser } = UserState();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Enter email!"),
    password: Yup.string().required("Enter password!"),
  });

  const authenticateUser = async (values, { setSubmitting, resetForm }) => {
    try {
      let response = await axios.post(
        `${baseConfig.BASE_API_URL}/api/user/login`,
        values
      );
      toast.success(response?.data?.msg);
      resetForm();
      setUser(response.data);

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (err) {
      toast.warning(err?.response?.data);
    } finally {
      setSubmitting(false);
    }
  };
  return {
    validationSchema,
    authenticateUser,
  };
};

export default useLogin;
