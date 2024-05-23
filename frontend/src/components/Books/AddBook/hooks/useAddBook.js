import * as Yup from "yup";
import { toast } from "react-toastify";
import { BookState } from "../../../../Context/BookContext";
import axios from "axios";
import { baseConfig } from "../../../../config/baseConfig";
import { UserState } from "../../../../Context/UserContext";

const useAddBook = ({ setIsOpen }) => {
  const { user } = UserState();
  const { setBooks } = BookState();

  const initialValues = {
    title: "",
    author: "",
    year: "",
    genre: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    year: Yup.number()
      .integer("Year must be an integer")
      .required("Year is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const addBook = async (book, resetForm) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios.post(`${baseConfig.BASE_API_URL}/api/book/addBook`, book, config);
      toast.success("Book added!");

      setBooks((prevBooks) => [...prevBooks, book]);
      resetForm();
      setIsOpen(false);
    } catch {
      toast.error("Error to add book!");
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    addBook(values, resetForm);
  };

  return {
    user,
    setBooks,
    initialValues,
    validationSchema,
    addBook,
    handleSubmit,
  };
};

export default useAddBook;
