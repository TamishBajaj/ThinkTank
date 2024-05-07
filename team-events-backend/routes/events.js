const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

const eventController=require('../controllers/eventController')

// Create event
router.post('/createEvent', authMiddleware, eventController.createEvent);

// Get all events
router.get('/getAllEvents', eventController.getAllEvents);

router.get('/:eventId', eventController.getEventById);

module.exports = router;