const mongoose = require('mongoose');

const formatSchema = mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Format', formatSchema);