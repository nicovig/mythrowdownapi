const mongoose = require('mongoose');

const wodSchema = mongoose.Schema({
    wodLines: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodLine', required: true }
    ],
    format: { type: mongoose.Schema.Types.ObjectId, ref: 'Format', required: true },
    name: { type: String, required: true },
    timecap: { type: Number, required: true },    
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },    
    athleteScore: { type: mongoose.Schema.Types.ObjectId, ref: 'AthleteScore', required: false },
    teamScore: { type: mongoose.Schema.Types.ObjectId, ref: 'TeamScore', required: false }
});

module.exports = mongoose.model('Wod', wodSchema);