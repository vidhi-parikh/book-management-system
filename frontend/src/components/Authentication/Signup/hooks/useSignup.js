import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { baseConfig } from "../../../../config/baseConfig";

const useSignup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Enter first name"),
    lastName: Yup.string().required("Enter last name"),
    email: Yup.string().email("Invalid email address").required("Enter email"),
    password: Yup.string().required("Enter password"),
  });

  const doSignUp = async (values, { setSubmitting, resetForm }) => {
    console.log("values", values);
    try {
      const res = await axios.post(
        `${baseConfig.BASE_API_URL}/api/user/sign-up`,
        values
      );
      toast.success(res.data.msg);
      resetForm();
    } catch (err) {
      toast.warning(err?.response?.data);
    } finally {
      setSubmitting(false);
    }
  };
  return {
    validationSchema,
    doSignUp,
  };
};

export default useSignup;
