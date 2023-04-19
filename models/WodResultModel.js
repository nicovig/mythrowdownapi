const mongoose = require('mongoose');

const wodResultSchema = mongoose.Schema({
    athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false },
    points: { type: Number, required: false },
    athleteScore: { type: mongoose.Schema.Types.ObjectId, ref: 'AthleteScore', required: false },
    teamScore: { type: mongoose.Schema.Types.ObjectId, ref: 'TeamScore', required: false },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
});

module.exports = mongoose.model('WodResult', wodResultSchema);