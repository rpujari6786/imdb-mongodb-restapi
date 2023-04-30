const express = require("express");
const movieController = require("../../controllers/movieController");

const movieRouter = express.Router();

// /movies/all/
movieRouter.get("/movies/all", movieController.getAllMovies);

// /movie/id/{movie_id}
movieRouter.get("/movie/id/:movieId", movieController.getMovieById);

// /movies/year/{year}
movieRouter.get("/movies/year/:year", movieController.getMoviesByYear);

// /movies/certification/{certificate_list}
movieRouter.get(
    "/movies/certification/:certificates",
    movieController.getMoviesByCertification
);

// /movies/title/{movie_title}
movieRouter.get("/movies/title/:title", movieController.getMoviesByTitle);

// /movies/genre/{genre_list}
movieRouter.get("/movies/genre/:genres", movieController.getMoviesByGenre);

module.exports = movieRouter;
