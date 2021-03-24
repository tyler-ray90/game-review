const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        title: {
            type: String,
        },
        genre: {
            type: String,
        },
        releaseYear: {
            type: Number,
        },
        rating: {
            type: Number,
        },
        developer: {
            type: String,
        }, 
        review: {
            type: String,
        }


});


module.exports = mongoose.model("Review", reviewSchema);