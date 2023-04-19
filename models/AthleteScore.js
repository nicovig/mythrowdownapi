const mongoose = require('mongoose');

const athleteScoreSchema = mongoose.Schema({
    athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: true },
    wod: { type: mongoose.Schema.Types.ObjectId, ref: 'Wod', required: true },
    score: { type: Number, required: true }, //If time : in seconds
    tiebreakAt: { type: Number, required: false }, //In seconds
    wodResult: { type: mongoose.Schema.Types.ObjectId, ref: 'WodResult', required: true },
    judge: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('AthleteScore', athleteScoreSchema);