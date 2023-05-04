const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true }
});

module.exports = mongoose.model('Division', divisionSchema);