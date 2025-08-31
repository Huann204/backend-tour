const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");
const auth = require("../Middleware/authMiddleware");

// All tours
router.get("/", tourController.getAllTours);

// Get by ID
router.get("/id/:id", auth, tourController.getTourById);

// Get by CODE
router.get("/:code", tourController.getTourByCode);

// Create
router.post("/", auth, tourController.createTour);

// Update by ID
router.put("/id/:id", auth, tourController.updateTour);

// Delete by ID
router.delete("/:id", auth, tourController.deleteTour);

module.exports = router;
