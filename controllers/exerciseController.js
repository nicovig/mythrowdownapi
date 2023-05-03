const Exercise = require('../models/ExerciseModel');
const { isSuperAdminAuthorized, isAdminAuthorized, isUserAuthorized } = require('../helpers/helpers');

exports.createExercise = (req, res, next) => {
    if (isAdminAuthorized(req)) {
      delete req.body._id;
      const exercise = new Exercise({
        ...req.body
      });
      exercise.save()
        .then(() => res.status(201).json({ message: 'Exercice enregistré !' }))
        .catch(error => res.status(400).json({ error }));
    }
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
};

exports.deleteExercise = (req, res, next) => {
  if (isAdminAuthorized(req)) {
    Exercise.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Exercice supprimé !'}))
    .catch(error => res.status(400).json({ error }));
  }
  res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
};

exports.getAllExercises = (req, res, next) => {
  if (isUserAuthorized(req)) {
    Exercise.find()
      .then((exercises) => res.status(200).json(exercises))
      .catch(error => res.status(400).json({ error }));
  }
  res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
};

exports.getExerciseById = (req, res, next) => {
  if (isUserAuthorized(req)) { 
    Exercise.findOne({ _id: req.params.id })
      .then(exercise => res.status(200).json(exercise))
      .catch(error => res.status(404).json({ error }));
  }
  res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
};

exports.updateExercise = (req, res, next) => {
  if (isAdminAuthorized(req)) { 
  Exercise.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Exercice modifié !' }))
    .catch(error => res.status(400).json({ error }));
  }
  res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
};