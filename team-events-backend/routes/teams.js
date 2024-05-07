const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const teamController=require('../controllers/teamController')

// Register team for event
router.post('/registerTeam', authMiddleware, teamController.registerTeam);

module.exports = router;