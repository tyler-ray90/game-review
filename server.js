// Load dependencies
const express = require("express")
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews')
require('./config/database');


// Create the express app
const app = express()

// Config settings app.set()
app.set("view engine", "ejs")

// Mount middleware
app.use(express.urlencoded({extended: false}));

// Mount routes
app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);


// Tell the app to listen on a port
const port = 3000
app.listen(port, function () {
	console.log(`Express is listening on port ${port}`)
})