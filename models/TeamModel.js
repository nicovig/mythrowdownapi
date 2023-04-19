const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: { type: String, required: true },
    cumulateScore: [ 
        { type: mongoose.Schema.Types.ObjectId, ref: 'TeamScore', required: true } 
    ],
    athletes: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: true }
    ]
});

module.exports = mongoose.model('Team', teamSchema);