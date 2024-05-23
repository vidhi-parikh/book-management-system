import { Formik, Field, Form, ErrorMessage } from "formik";
import Input from "../../ui/Input/index";
import Button from "../../ui/Button/index";
import useLogin from "./hooks/useLogin";

const Login = ({ setShowSignUp }) => {
  const { validationSchema, authenticateUser } = useLogin();

  return (
    <>
      <div className="bg-white flex flex-col p-4 w-[25vw] rounded-md shadow-md border-r border">
        <h3 className="text-center font-bold"> Login to your account </h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={authenticateUser}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="bg-white flex flex-col p-8 gap-4">
                <div>
                  <Field name="email" type="email" as={Input} label="Email" />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="error-message"
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    type="password"
                    as={Input}
                    label="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="error-message"
                  />
                </div>
                <Button type="submit" isLoading={isSubmitting}>
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center">
          <span
            onClick={() => setShowSignUp((prev) => !prev)}
            className="text-black underline cursor-pointer hover:cursor-pointer"
          >
            Create Account
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
