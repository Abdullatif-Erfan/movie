const express = require("express");
const movieController = require("./../controllers/movieController");
const router = express.Router();

// localhost:5000/movies
router.route("/").get(movieController.getMovies);

// localhost:5000/movies/imdbID
router.route("/:imdbID").post(movieController.searchMovie);

module.exports = router;
