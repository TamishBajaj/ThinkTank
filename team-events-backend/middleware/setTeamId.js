// middleware/setTeamId.js

const Team = require('../models/Team');

module.exports = async (req, res, next) => {
  try {
    // Check if user is a team leader
    if (req.user.role !== 'teamLeader') {
      return res.status(403).json({ msg: 'Only team leaders can perform this action' });
    }

    // Find team based on team leader's user ID
    const team = await Team.findOne({ teamLeader: req.user.userId });

    // Check if team exists
    if (!team) {
      return res.status(404).json({ msg: 'Team not found' });
    }

    // Set teamId in request object
    req.user.teamId = team._id;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
