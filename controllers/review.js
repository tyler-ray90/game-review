const Review = require('../models/review');



function index(req, res) {
    // referencing the review model in database 
    Review.find({}, function(err, reviews) {
        res.render('./reviews/index', {reviews})

    });
}

function show(req, res) {
    Review.findById(req.params.id, function(err, review){
        res.render('reviews/show', {
        review,
    });
        
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

// function edit(req, res) {
//     // const review = Review.getOne(req.params.id);
//     res.render('reviews/edit', {review, reviewId: req.params.id,});
// }

function edit(req, res) {
    res.render('reviews/edit');
}

function update(req, res) {
    // set the done property
    req.body.done = false;
    // ask the data file to replace the existing todo object with the updated one
    // Review.updateOne(req.params.id, req.body);
    // respond with res.redirect
    res.redirect(`/reviews/${req.params.id}`);
}


module.exports = {
    index,
    new: newReview,
    create,
    show,
    delete: deleteReview,
    edit,
    update,
};