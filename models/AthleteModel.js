const mongoose = require('mongoose');

const athleteSchema = mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    affiliateBox: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    gender: { type: String, required: true },
    cumulateScore: [ 
        { type: mongoose.Schema.Types.ObjectId, ref: 'AthleteScore', required: true } 
    ],
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: false },
    division: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
    profilPicture: { type: Blob, required: false },
});

module.exports = mongoose.model('Athlete', athleteSchema);