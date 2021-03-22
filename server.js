// Load dependencies
const express = require("express")

// Create the express app
const app = express()

// Config settings app.set()
app.set("view engine", "ejs")

// Mount middleware

// Mount routes
app.get("/", function (req, res) {
	res.render("home")
})

// Tell the app to listen on a port
const port = 4000
app.listen(port, function () {
	console.log(`Express is listening on port ${port}`)
})