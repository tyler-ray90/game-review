const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        game_title: {
            type: String,
        },

});

module.exports = mongoose.model("Game", reviewSchema);