import React, { useState } from "react";
import BookList from "../components/Books/BookList/BookList";
import AddBook from "../components/Books/AddBook/AddBook";
import Button from "../components/ui/Button/index";
import Modal from "../components/ui/Modal/index";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className=" w-full pt-5 ml-20 mr-20 mt-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <div>
            <Button onClick={() => setIsOpen(true)}>Add Book</Button>
          </div>
        </div>

        <BookList />

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>Add New Book</Modal.Header>

          <Modal.Body>
            <AddBook setIsOpen={setIsOpen} />
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DashboardPage;
