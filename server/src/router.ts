import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
import movieActions from "./modules/movie/movieActions";

router.get("/api/movies", movieActions.browse);
router.get("/api/movies/:id", movieActions.read);
router.post("/api/movies", movieActions.add);
router.put("/api/movies/:id", movieActions.edit);
router.delete("/api/movies/:id", movieActions.destroy);
/* ************************************************************************ */
import movieGenreActions from "./modules/movieGenre/movieGenreActions";

router.get("/api/movieGenre", movieGenreActions.browse);
router.get("/api/movieGenre/:id", movieGenreActions.read);

export default router;
