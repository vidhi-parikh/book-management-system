import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useAddBook from "./hooks/useAddBook";

const AddBook = ({ setIsOpen }) => {
  console.log("setIsOpen::: ", setIsOpen);

  let {
    user,
    setBooks,
    initialValues,
    validationSchema,
    addBook,
    handleSubmit,
  } = useAddBook({ setIsOpen });

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
            <Field type="text" name="year" as={Input} label="Year" />
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
          <Button type="submit">Add Book</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBook;
