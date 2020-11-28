const express = require("express")
const router = express.Router()
// const mongoose = require("mongoose")
const User = require("../models/User")

const adj = ["is cool :D", "is super cool :)", "is gonna be rich :D", "is so awesome :)", "is stupid :("]

router.get("/", async (req, res, next) => {
	try {
		const users = await User.find()

		for (let i = 0; i < users.length; i++) {
			users[i] = `${users[i].firstName} ${users[i].lastName} ${adj[Math.floor(Math.random() * adj.length)]}`
		}

		console.log(users)

		res.render("index", { title: "Express", users })
	} catch (error) {
		next(error)
	}
})

router.post("/", async (req, res) => {
	try {
		const { firstName, lastName } = req.body
		User.create({ firstName, lastName })
		res.redirect("/")
	} catch (error) {
		next(error)
	}
})

module.exports = router
