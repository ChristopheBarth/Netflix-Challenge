import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Define item-related routes
import itemActions from "./modules/item/itemActions";

/* ************************************************************************* */
import movieActions from "./modules/movie/movieActions";

router.get("/api/movies", movieActions.browse);
router.get("/api/movies/:id", movieActions.read);
router.post("/api/movies", movieActions.add);
router.delete("/api/movies/:id", movieActions.destroy);
/* ************************************************************************ */

export default router;
