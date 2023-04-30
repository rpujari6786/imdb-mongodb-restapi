// const MoviesDB = require("./moviesDB.json");
const Movie = require("../models/movie");

const getAllMovies = async () => {
    try {
        const allMovies = await Movie.find({});
        return allMovies;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getMoviesByYear = async (year) => {
    try {
        const movies = await Movie.find({ releaseYear: year });
        if (!movies) {
            throw {
                status: 400,
                message: `Couldn't find any movies in the year '${year}'`,
            };
        }
        return movies;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const getMoviesByCertification = async (certificates) => {
    try {
        certificates = certificates.split(",");
        const movies = await Movie.find({ certificate: { $in: certificates } });
        if (!movies) {
            throw {
                status: 400,
                message: `Couldn't find any movies which has following certificates: '${certificates}'`,
            };
        }
        return movies;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const getMovieById = async (movieId) => {
    try {
        const movie = Movie.find({ title_id: movieId });
        if (!movie) {
            throw {
                status: 400,
                message: `Couldn't find any movie having ID : '${movieId}'`,
            };
        }
        return movie;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const getMoviesByTitle = async (title) => {
    try {
        const movies = await Movie.find({ title: title });
        if (!movies) {
            throw {
                status: 400,
                message: `Couldn't find any movies with title: '${title}'`,
            };
        }
        return movies;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const getMoviesByGenre = async (genres) => {
    try {
        genres = genres.split(",");

        let x = genres,
            regex = x.map(function (e) {
                return new RegExp(e, "i");
            });

        const movies = await Movie.find({ genre: { $in: regex } });
        if (!movies) {
            throw {
                status: 400,
                message: `Couldn't find any movies which has following genres: '${genres}'`,
            };
        }
        return movies;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
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
