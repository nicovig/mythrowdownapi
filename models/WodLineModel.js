const mongoose = require('mongoose');

const UnitsEnumValue = require('./units_enum')

const wodLineSchema = mongoose.Schema({
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },    
    repetitions: { type: Number },
    femaleRepetitions: { type: Number },
    maleRepetitions: { type: Number },
    femaleWeight: { type: Number },
    maleWeight: { type: Number },    
    units: { type: Number, enum: UnitsEnumValue, default: UnitsEnumValue.Kilograms },
    textBeforeName: { type: String, required: false },
    textAfterName: { type: String, required: false },
    isRepDisplayedAfterName: { type: Boolean, default: false },
    addSpacing: { type: Boolean, default: false },
    wodId: { type: Number, required: true },
});

module.exports = mongoose.model('WodLine', wodLineSchema);