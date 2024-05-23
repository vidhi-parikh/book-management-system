import useBookList from "./hooks/useBookList";
import Modal from "../../../components/ui/Modal/index";
import EditBook from "../EditBook/EditBook";

const BookList = () => {
  const {
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
  } = useBookList();

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead className="text-left">
          <tr>
            <th className="table-head" onClick={() => handleSort("title")}>
              Title {renderArrow()}
            </th>
            <th className="table-head" onClick={() => handleSort("author")}>
              Author {renderArrow()}
            </th>
            <th className="table-head" onClick={() => handleSort("year")}>
              Year {renderArrow()}
            </th>
            <th className="table-head" onClick={() => handleSort("genre")}>
              Genre {renderArrow()}
            </th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.length &&
            currentBooks?.map((book, index) => (
              <tr key={index} className="border-t h-10">
                <td className="table-data">{book.title}</td>
                <td className="table-data">{book.author}</td>
                <td className="table-data">{book.year}</td>
                <td className="table-data">{book.genre}</td>
                <td className="table-data">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>

                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() =>
                      handleDelete(
                        (currentPage - 1) * booksPerPage + index,
                        book
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Edit Book</Modal.Header>

        <Modal.Body>
          <EditBook editbook={bookToEdit} setIsOpen={setIsOpen} />
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookList;
