const mongoose = require('mongoose');

const wodLineSchema = mongoose.Schema({
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },    
    repetitions: { type: Number },
    femaleRepetitions: { type: Number },
    maleRepetitions: { type: Number },
    femaleWeight: { type: Number },
    maleWeight: { type: Number },
    units: { type: Number },
    addSpacing: { type: Boolean },
    wod: { type: mongoose.Schema.Types.ObjectId, ref: 'Wod', required: true },
});

module.exports = mongoose.model('WodLine', wodLineSchema);