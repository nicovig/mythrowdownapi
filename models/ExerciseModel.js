const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    descriptionFirstLine: { type: String, required: false },
    descriptionSecondLine: { type: String, required: false },
    descriptionThirdLine: { type: String, required: false },
    videoDemoUrl: { type: String, required: false },
});

module.exports = mongoose.model('Exercise', exerciseSchema);