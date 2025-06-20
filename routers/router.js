const express = require("express");
const router = express.Router();
let moviesController = require("../controllers/moviesController");

router.get("/", moviesController.index);
router.get("/:id", moviesController.show);

// creazione di una recensione

// router.post("movies/:id/reviews", moviesController.storeReview)

module.exports = router;
