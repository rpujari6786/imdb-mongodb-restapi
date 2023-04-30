const Movie = require("../database/Movie");

const getAllMovies = () => {
    try {
        const allMovies = Movie.getAllMovies();
        return allMovies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByYear = (year) => {
    try {
        const movies = Movie.getMoviesByYear(year);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByCertification = (certificates) => {
    try {
        const movies = Movie.getMoviesByCertification(certificates);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMovieById = (movieId) => {
    try {
        const movie = Movie.getMovieById(movieId);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMoviesByTitle = (title) => {
    try {
        const movies = Movie.getMoviesByTitle(title);
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMoviesByGenre = (genres) => {
    try {
        const movies = Movie.getMoviesByGenre(genres);
        return movies;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMovies,
    getMoviesByYear,
    getMoviesByCertification,
    getMovieById,
    getMoviesByTitle,
    getMoviesByGenre,
};
