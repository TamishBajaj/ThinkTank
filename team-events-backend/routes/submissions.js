const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const setTeamIdMiddleware = require('../middleware/setTeamId');

const submissionController=require('../controllers/submissionController')

// Submit solution
router.post('/submitSolution', authMiddleware, setTeamIdMiddleware, submissionController.submitSolution);

module.exports = router;