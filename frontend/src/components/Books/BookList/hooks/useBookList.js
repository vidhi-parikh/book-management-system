import React, { useState, useMemo } from "react";
import { BookState } from "../../../../Context/BookContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { UserState } from "../../../../Context/UserContext";
import { baseConfig } from "../../../../config/baseConfig";
import axios from "axios";
import { toast } from "react-toastify";

const useBookList = () => {
  const { user } = UserState();
  const { books, setBooks } = BookState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [bookToEdit, setBookToEdit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const booksPerPage = 5;

  const sortedBooks = useMemo(() => {
    if (!sortField) return books;
    return [...books].sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortField, sortDirection, books]);

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  const currentBooks = useMemo(() => {
    const start = (currentPage - 1) * booksPerPage;
    return sortedBooks.slice(start, start + booksPerPage);
  }, [currentPage, sortedBooks]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const renderArrow = () => {
    return sortDirection === "asc" ? (
      <FontAwesomeIcon icon={faArrowUp} />
    ) : (
      <FontAwesomeIcon icon={faArrowDown} />
    );
  };

  const handleDelete = async (index, book) => {
    try {
      let id = book?._id;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios.delete(
        `${baseConfig.BASE_API_URL}/api/book/deleteBook/` + id,
        config
      );

      toast.success("Book removed successfully!");
      const updatedBooks = books.filter((_, i) => i !== index);
      setBooks(updatedBooks);
    } catch (error) {
      toast.error("Error in removing book!");
    }
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
    setIsOpen(true);
  };

  return {
    currentPage,
    setCurrentPage,
    booksPerPage,
    totalPages,
    currentBooks,
    handleSort,
    renderArrow,
    handleDelete,
    bookToEdit,
    isOpen,
    setIsOpen,
    handleEdit,
  };
};

export default useBookList;
