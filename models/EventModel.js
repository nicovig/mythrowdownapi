const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
    day: { type: Date, required: true },
    hour: { type: Number, required: true },
    wods: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Wod', required: true }
    ],
    intervalBetweenWods: [{ type: Number, required: true }],
    wodResults: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodResult', required: true }
    ],
});

module.exports = mongoose.model('Event', eventSchema);