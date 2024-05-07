

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamLeader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventName: { type: String, ref: 'Event', required: true },
    members: [{ type: String }],
    teamSize: { type: Number, required: true },
    email: { type: String, required: true },
    teamName: { type: String, required: true },
    contact: { type: String, required: true },
    institute: { type: String, required: true },
    specialization: { type: String, required: true },
    
});

module.exports = mongoose.model('Team', teamSchema);
