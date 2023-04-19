const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('User', userSchema);