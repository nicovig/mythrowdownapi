const Exercise = require('../models/ExerciseModel');

exports.createExercise = (req, res, next) => {
    delete req.body._id;
    const exercise = new Exercise({
      ...req.body
    });
    exercise.save()
      .then(() => res.status(201).json({ message: 'Exercice enregistré !' }))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteExercise = (req, res, next) => {
  Exercise.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Exercice supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllExercises = (req, res, next) => {
  Exercise.find()
    .then((exercises) => res.status(200).json(exercises))
    .catch(error => res.status(400).json({ error }));
};

exports.getExerciseById = (req, res, next) => {
  Exercise.findOne({ _id: req.params.id })
    .then(exercise => res.status(200).json(exercise))
    .catch(error => res.status(404).json({ error }));
};

exports.updateExercise = (req, res, next) => {
  Exercise.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Exercice modifié !' }))
    .catch(error => res.status(400).json({ error }));
};