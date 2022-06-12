const express = require("express")
const router = express.Router()
const Book = require("../model/books")

router.get("/", async (req, res) => {
    try {
        const book = await Book.find({})
        res.render("index", {book: book})
    } catch (e) {
        res.send('not found')
    }
})

router.get("/add", async (req, res) => {
    res.render("books/addBook", {book: new Book()})
})

router.post("/", async (req, res) => {
    const book = new Book({
        name: req.body.book,
        author: req.body.author,
        pageCount: req.body.page
    })
    try {
        const newBook = book.save()
        res.send("Book Added")
    } catch (e) {
        res.redirect("books/addBook")
    }
})

module.exports = router