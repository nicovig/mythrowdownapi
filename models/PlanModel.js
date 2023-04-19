const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    planData: { type: Blob, required: true },
    places: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Place' }
    ]
});

module.exports = mongoose.model('Plan', planSchema);