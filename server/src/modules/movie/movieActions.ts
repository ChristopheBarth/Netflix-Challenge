import type { RequestHandler } from "express";

// Import access to data
import movieRepository from "./movieRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all movies
    const movies = await movieRepository.readAll();

    // Respond with the movies in JSON format
    res.json(movies);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific movie based on the provided ID
    const movieId = Number(req.params.id);
    const movie = await movieRepository.read(movieId);

    // If the movie is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the movie in JSON format
    if (movie == null) {
      res.sendStatus(404);
    } else {
      res.json(movie);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

export default { browse, read };
