const mongoose = require('mongoose');

const formatSchema = mongoose.Schema({
    name: { type: String, required: true },
    wods: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'WodLine', required: false }
    ],
    events: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: false }
    ]
});

module.exports = mongoose.model('Format', formatSchema);