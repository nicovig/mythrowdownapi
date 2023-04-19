const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: false },
    athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false },
});

module.exports = mongoose.model('Division', divisionSchema);