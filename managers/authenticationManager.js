const User = require('../models/UserModel');

exports.login = (req, res, next) => {
  Exercise.findOne({ _id: req.params.id })
    .then(exercise => res.status(200).json(exercise))
    .catch(error => res.status(404).json({ error }));
};