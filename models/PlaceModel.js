const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    name: { type: String, required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }
});

module.exports = mongoose.model('Place', placeSchema);