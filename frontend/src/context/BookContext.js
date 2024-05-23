import React, { createContext, useContext, useEffect, useState } from "react";
import { bookStore } from "../data/bookStore";
import { UserState } from "./UserContext";
import { baseConfig } from "../config/baseConfig";
import axios from "axios";
import { toast } from "react-toastify";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const { user } = UserState();

  console.log("user in book Provider: ", user.token);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBookData = async () => {
      if (!user) return;
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        let bookData = await axios.get(
          `${baseConfig.BASE_API_URL}/api/book/showAllBooks`,
          config
        );

        setBooks(bookData.data);
      } catch (error) {
        toast.error("Error in fetch book");
      }
    };

    getBookData();
  }, [user]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const BookState = () => {
  return useContext(BookContext);
};

export default BookProvider;
