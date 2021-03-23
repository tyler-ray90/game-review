// Load dependencies
const express = require("express")
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews')


// Create the express app
const app = express()

// Config settings app.set()
app.set("view engine", "ejs")

// Mount middleware

// Mount routes
app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);


// Tell the app to listen on a port
const port = 3300
app.listen(port, function () {
	console.log(`Express is listening on port ${port}`)
})