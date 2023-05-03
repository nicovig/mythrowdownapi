const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    planData: { type: Object, required: true },
    places: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Place' }
    ]
});

module.exports = mongoose.model('Plan', planSchema);