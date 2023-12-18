const mongoose = require('mongoose');

const teamFormatSchema = mongoose.Schema({
    name: { type: String, required: true },
    maleNumber: { type: Number, required: true },
    femaleNumber: { type: Number, required: true }
});

module.exports = mongoose.model('TeamFormat', teamFormatSchema);