const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bookRouter = require("./routers/bookRouter")
const ejs = require("ejs")
const bodyParser = require("body-parser")

mongoose.connect('mongodb+srv://rehan78khan87:wn1bPnOiL9zm6UpV@cluster0.ijiug.mongodb.net/?retryWrites=true&w=majority').then(e => console.log("done")).catch(e => console.log(e))

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.use('/', bookRouter)

app.listen(PORT, () => console.log("running"))