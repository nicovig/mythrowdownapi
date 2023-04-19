const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    users: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ]
});

module.exports = mongoose.model('Role', roleSchema);