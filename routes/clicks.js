
const express = require('express');
const router = express.Router();
const Click = require('../models/Click');

// POST route to log a click
router.post('/log-click', async (req, res) => {
  try {
    // Create a new click entry
    const newClick = new Click({
      timestamp: new Date()
    });

    // Save to database
    const savedClick = await newClick.save();

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Click logged successfully',
      id: savedClick._id,
      timestamp: savedClick.timestamp
    });
  } catch (error) {
    console.error('Error logging click:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to log click',
      error: error.message
    });
  }
});

// GET route to retrieve all clicks (for testing purposes)
router.get('/clicks', async (req, res) => {
  try {
    const clicks = await Click.find().sort({ timestamp: -1 });
    res.status(200).json({
      success: true,
      count: clicks.length,
      data: clicks
    });
  } catch (error) {
    console.error('Error retrieving clicks:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve clicks',
      error: error.message
    });
  }
});

module.exports = router;
