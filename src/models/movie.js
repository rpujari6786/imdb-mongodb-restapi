const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title_id: {
        type: String,
        index: {
            unique: true,
        },
        required: [true, "Title ID is a required field."],
    },
    title: {
        type: String,
        required: [true, "Movie Title is a required field."],
    },
    poster: {
        type: String,
        default: "NA",
    },
    releaseYear: {
        type: Number,
        required: [true, "Release Year is a required field."],
    },
    rating: {
        type: Number,
        required: [true, "Release Year is a required field."],
    },
    certificate: {
        type: String,
        default: "NA",
    },
    runtime: {
        type: String,
        default: "NA",
    },
    genre: {
        type: Array,
        required: [true, "Movie Genre is a required field."],
    },
    description: {
        type: String,
        default: "NA",
        required: [true, "Movie Description is a required field."],
    },
});

module.exports = mongoose.model("Movie", movieSchema);
