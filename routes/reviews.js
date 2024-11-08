const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Endpoint to get all reviews or filter by category
router.get('/', async (req, res) => {
    try {
        const review = Review.find();
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
