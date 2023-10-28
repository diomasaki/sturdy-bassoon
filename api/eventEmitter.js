const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./routes/user.js")

// KEY
const dbURL = "mongodb+srv://masaki:masaki@cluster0.hok8xhy.mongodb.net/nodeapi?retryWrites=true&w=majority"
const eventStart = express()

// CONN
mongoose.connect(dbURL).then(() => console.log("DB Up & Running!")).catch((err) => { console.log(err) })



eventStart.use(express.json())
eventStart.use(cors())
eventStart.use("/api/user", userRoute)

eventStart.listen(8800, () => { console.log("Backend Server Is Up & Running!") })