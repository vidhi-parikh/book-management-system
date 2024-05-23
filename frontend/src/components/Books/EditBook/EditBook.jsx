import { ErrorMessage, Field, Form, Formik } from "formik";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useEditBook from "./hooks/useEditBook";

const EditBook = ({ editbook, setIsOpen }) => {
  let { initialValues, validationSchema, handleSubmit } = useEditBook({
    editbook,
    setIsOpen,
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="w-full  mt-4">
          <div className="mb-4">
            <Field type="text" name="title" as={Input} label="Title" />
            <ErrorMessage
              name="title"
              component="p"
              className="error-message"
            />
          </div>
          <div className="mb-4">
            <Field type="text" name="author" as={Input} label="Author" />
            <ErrorMessage
              name="author"
              component="p"
              className="error-message"
            />
          </div>
          <div className="mb-4">
            <Field type="number" name="year" as={Input} label="Year" />
            <ErrorMessage name="year" component="p" className="error-message" />
          </div>
          <div className="mb-4">
            <Field type="text" name="genre" as={Input} label="Genre" />
            <ErrorMessage
              name="genre"
              component="p"
              className="error-message"
            />
          </div>
          <Button type="submit">Edit book</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditBook;
