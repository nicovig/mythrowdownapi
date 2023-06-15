const mongoose = require('mongoose');

const teamFormatSchema = mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('TeamFormat', teamFormatSchema);