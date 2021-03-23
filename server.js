// Load dependencies
const express = require("express")
const indexRouter = require('./routes/index');

// Create the express app
const app = express()

// Config settings app.set()
app.set("view engine", "ejs")

// Mount middleware
app.use('/', indexRouter);

// Mount routes
app.get("/", function (req, res) {
	res.render("index")
})

// Tell the app to listen on a port
const port = 3300
app.listen(port, function () {
	console.log(`Express is listening on port ${port}`)
})