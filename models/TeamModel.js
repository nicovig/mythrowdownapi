const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: { type: String, required: true },
    cumulateScore: [ 
        { type: mongoose.Schema.Types.ObjectId, ref: 'TeamScore', required: false } 
    ],
    athletes: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: false }
    ],
    formatName: { type: String, required: false },
    format: { type: mongoose.Schema.Types.ObjectId, ref: 'TeamFormat', required: false }
});

module.exports = mongoose.model('Team', teamSchema);