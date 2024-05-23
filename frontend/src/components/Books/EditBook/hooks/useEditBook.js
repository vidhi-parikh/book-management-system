import * as Yup from "yup";
import { BookState } from "../../../../Context/BookContext";
import axios from "axios";
import { toast } from "react-toastify";
import { UserState } from "../../../../Context/UserContext";
import { baseConfig } from "../../../../config/baseConfig";

const useEditBook = ({ editbook, setIsOpen }) => {
  console.log(editbook);

  const { user } = UserState();
  const { setBooks } = BookState();
  const initialValues = { ...editbook };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    year: Yup.number()
      .integer("Year must be an integer")
      .required("Year is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.put(
        `${baseConfig.BASE_API_URL}/api/book/updateBook/` + values._id,
        values,
        config
      );
      toast.success("Book updated!");
      setBooks((prevBooks) => {
        return prevBooks.map((book) => {
          if (book._id === values._id) {
            return values;
          }
          return book;
        });
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Error to update book!");
    }
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
  };
};

export default useEditBook;
