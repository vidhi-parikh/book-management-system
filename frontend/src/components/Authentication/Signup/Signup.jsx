import "react-toastify/dist/ReactToastify.css";
import Input from "../../ui/Input/index";
import Button from "../../ui/Button/index";
import { Formik, Field, Form, ErrorMessage } from "formik";
import useSignup from "./hooks/useSignup";

const SignUp = ({ setShowSignUp }) => {
  const { validationSchema, doSignUp } = useSignup();

  return (
    <>
      <div className="bg-white flex flex-col p-4 w-[25vw] rounded-md shadow-md border-r border">
        <h3 className="text-center font-bold"> Create new Account </h3>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={doSignUp}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="bg-white flex flex-col p-8 gap-4">
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    as={Input}
                    label="First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="error-message"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="lastName"
                    as={Input}
                    label="Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="error-message"
                  />
                </div>
                <div>
                  <Field type="text" name="email" as={Input} label="Email" />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="error-message"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
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
                  Signup
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center">
          <p>
            Already have an account?
            <span
              onClick={() => setShowSignUp((prev) => !prev)}
              className="text-black underline cursor-pointer hover:cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
