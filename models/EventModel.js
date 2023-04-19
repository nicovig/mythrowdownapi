const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
    day: { type: Date, required: true },
    hour: { type: Number, required: true },
    division: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
    wods: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodLine', required: true }
    ],
    wods: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodLine', required: true }
    ],
    format: { type: mongoose.Schema.Types.ObjectId, ref: 'Format', required: true },
    interval: { type: Number, required: true },
    wodResults: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodResult', required: true }
    ],
});

module.exports = mongoose.model('Event', eventSchema);