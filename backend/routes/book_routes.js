const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookControllers");

const protect = require("../middlewares/authentication");

router.get("/showAllBooks", protect, getAllBooks);
router.post("/addBook", protect, addBook);
router.put("/updateBook/:id", protect, updateBook);
router.delete("/deleteBook/:id", protect, deleteBook);

module.exports = router;
