const Review = require('../models/review');



function index(req, res) {
    // referencing the review model in database 
    Review.find({}, function(err, reviews) {
        res.render('./reviews/index', {reviews})

    });
}


module.exports = {
    index,
};