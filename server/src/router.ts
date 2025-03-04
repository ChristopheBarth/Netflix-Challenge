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

import hashPassword from "./middlewares/hashPassword";
import userAction from "./modules/user/userAction";

router.get("/api/users", userAction.browse);
router.get("/api/users/:id", userAction.read);
router.post("/api/users", hashPassword.hashPassword, userAction.add);
router.put("/api/users/:id", userAction.edit);
router.delete("/api/users/:id", userAction.destroy);

/* ************************************************************************ */

export default router;
