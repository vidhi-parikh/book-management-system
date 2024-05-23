const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    let book = await Book.find();
    res.status(200);
    res.send(book);
  } catch (err) {
    res.status(500).send("Something went wrong!");
    console.log(err);
  }
};

const addBook = async (req, res) => {
  let { title, author, year, genre } = req.body;

  let newbook = new Book({
    title,
    author,
    year,
    genre,
  });
  newbook
    .save()
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((err) => {
      res.status(500).send("Something went wrong!");
      console.log(err);
    });
};

const updateBook = async (req, res) => {
  let updatebook = { ...req.body };
  Book.updateOne({ _id: req.params.id }, { $set: updatebook })
    .then(() => {
      res.status(200).send(updatebook);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
};

const deleteBook = async (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
};
