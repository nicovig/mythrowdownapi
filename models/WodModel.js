const mongoose = require('mongoose');

const wodSchema = mongoose.Schema({
    wodLines: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodLine', required: true }
    ],
    division: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
    format: { type: mongoose.Schema.Types.ObjectId, ref: 'Format', required: true },
    name: { type: String, required: true },
    timecap: { type: Number, required: true },    
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    wodResults: { type: mongoose.Schema.Types.ObjectId, ref: 'WodResult', required: true }
});

module.exports = mongoose.model('Wod', wodSchema);