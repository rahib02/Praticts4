const express = require("express")
const cors = require("cors")
const nodemon = require("nodemon")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const { Schema } = mongoose
dotenv.config()

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        imgurl: { type: String, required: true }
    },
    { timestamps: true }

)

const Users = mongoose.model("users", userSchema)

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<p>/ isdedi<p>")
})

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
})
app.post("/users", (req, res) => {
    const user = new Users({
        name: req.body.name,
        price: req.body.price,
        imgurl: req.body.imgurl
    })
    user.save()
    res.send({ message: "User created" })
})
const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASWORD)
app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("delete data")
        }
        else {
            res.status(404).json({ message: "Not found" })
        }
    })

})
mongoose.set("strictQuery", true)
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB connect");
        app.listen(PORT, () => {
            console.log("Server start");
        })
    }
})

