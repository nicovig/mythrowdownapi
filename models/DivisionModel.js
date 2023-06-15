const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Division', divisionSchema);