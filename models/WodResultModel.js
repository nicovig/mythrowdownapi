const mongoose = require('mongoose');

const wodResultSchema = mongoose.Schema({
    wod: { type: mongoose.Schema.Types.ObjectId, ref: 'Wod', required: true },
    athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false },
    points: { type: Number, required: false },
    athleteScore: { type: mongoose.Schema.Types.ObjectId, ref: 'AthleteScore', required: false },
    teamScore: { type: mongoose.Schema.Types.ObjectId, ref: 'TeamScore', required: false },
});

module.exports = mongoose.model('WodResult', wodResultSchema);