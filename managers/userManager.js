const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      delete req.body._id;
      const user = new User({
        ...req.body,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur enregistré !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
};

exports.getUserById = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};

exports.updateUser = (req, res, next) => {
  User.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Utilisateur modifié !' }))
    .catch(error => res.status(400).json({ error }));
};