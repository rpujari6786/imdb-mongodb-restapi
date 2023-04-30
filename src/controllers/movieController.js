const movieService = require("../services/movieService");

const getAllMovies = async (req, res) => {
    try {
        const allMovies = await movieService.getAllMovies();
        res.send({ staus: "OK", movies: allMovies });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getMoviesByYear = async (req, res) => {
    const { year } = req.params;
    if (!year) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':year' cannot be empty" },
        });
    }
    try {
        const movies = await movieService.getMoviesByYear(year);
        res.send({ staus: "OK", movies: movies });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getMoviesByCertification = async (req, res) => {
    const { certificates } = req.params;
    if (!certificates) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':certificates' cannot be empty" },
        });
    }
    try {
        const movies = await movieService.getMoviesByCertification(
            certificates
        );
        res.send({ staus: "OK", movies: movies });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getMovieById = async (req, res) => {
    const { movieId } = req.params;
    if (!movieId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':title_id' cannot be empty" },
        });
    }
    try {
        const movie = await movieService.getMovieById(movieId);
        res.send({ staus: "OK", movie: movie });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getMoviesByTitle = async (req, res) => {
    const { title } = req.params;
    if (!title) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':title' cannot be empty" },
        });
    }
    try {
        const movies = await movieService.getMoviesByTitle(title);
        res.send({ staus: "OK", movies: movies });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getMoviesByGenre = async (req, res) => {
    const { genres } = req.params;
    if (!genres) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':certificates' cannot be empty" },
        });
    }
    try {
        const movies = await movieService.getMoviesByGenre(genres);
        res.send({ staus: "OK", movies: movies });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
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
