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
// Define Route to get all landscapes of movies
router.get("/api/movies/landscape", async (req, res, next) => {
  try {
    const movies = await movieActions.browse(req, res, next);
    // On peut filtrer ou mapper pour retourner uniquement la propriété landscape_image
    // const Landscape = movies.map((movie: any) => ({ id: movie.id, Landscape_image: movie.Landscape_image}));
    // res.json(Landscapes);
  } catch (err) {
    next(err);
  }
});

/* ************************************************************************ */
import userAction from "./modules/user/userAction";

router.get("/api/users", userAction.browse);
router.get("/api/users/:id", userAction.read);
router.post("/api/users", userAction.add);
router.put("/api/users/:id", userAction.edit);
router.delete("/api/users/:id", userAction.destroy);

/* ************************************************************************ */

export default router;
