const routes = require("express").Router()
const User = require("../models/User.js")
const bcrypt = require("bcrypt")

routes.post("/c", async (req,res) => {
    const salt = 10
    const passwordHash = await bcrypt.hash(req.body.password, salt)

    const reqUser = new User({
        username: req.body.username,
        password: passwordHash,
        email: req.body.email,
        phone: req.body.phone,
    })

    console.log(reqUser)

    try{
        const saveUser = await reqUser.save()
        res.status(201).json({ status: "Success", message: "User Has Been Created!", data: saveUser })
    }catch (err) {
        res.status(500).json({ status: "Failed", message: "Something Went Wrong...", data: {err} })
    }
})


module.exports = routes