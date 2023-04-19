const mongoose = require('mongoose');

const teamScoreSchema = mongoose.Schema({
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    wod: { type: mongoose.Schema.Types.ObjectId, ref: 'Wod', required: true },
    score: { type: Number, required: true }, //If time : in seconds
    tiebreakAt: { type: Number, required: false }, //In seconds
    wodResult: { type: mongoose.Schema.Types.ObjectId, ref: 'WodResult', required: true },
    judge: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('TeamScore', teamScoreSchema);