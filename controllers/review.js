const Review = require('../models/review');



function index(req, res) {
    // referencing the review model in database 
    Review.find({}, function(err, reviews) {
        res.render('./reviews/index', {reviews})

    });
}

function newReview(req, res) {
    res.render('reviews/new')
};


function create(req, res) {
    Review.create(req.body, function(err, review) {
        if (err) console.log(err);
        res.redirect('/reviews');
    });

};

function deleteReview(req, res) {
    Review.findByIdAndDelete({_id:req.params.id}).exec(function(err, entry){
        res.redirect('/reviews');
    })
}


module.exports = {
    index,
    new: newReview,
    create,
    delete: deleteReview,
};