const Athlete = require('../models/AthleteModel');
const { isSuperAdminAuthorized, isAdminAuthorized, isUserAuthorized } = require('../helpers/helpers');

exports.createAthlete = (req, res) => {
  if (isAdminAuthorized(req)) {
    delete req.body._id;
    const athlete = new Athlete({
      ...req.body
    });
    athlete.save()
      .then(() => res.status(201).json({ isOk: true }))
      .catch(error => {
        res.status(400).json({ error });
      });
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.deleteAthlete = (req, res) => {
  if (isAdminAuthorized(req)) {
    Athlete.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ isOk: true }))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getAllAthletes = (req, res) => {
  if (isUserAuthorized(req)) {
    Athlete.find()
      .then((athletes) => res.status(200).json(athletes))
      .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getAthleteById = (req, res) => {
  if (isUserAuthorized(req)) { 
    Athlete.findOne({ _id: req.params.id })
      .then(athlete => res.status(200).json(athlete))
      .catch(error => res.status(404).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  };
};

exports.updateAthlete = (req, res) => {
  if (isAdminAuthorized(req)) { 
    Athlete.updateOne({ _id: req.body._id }, { ...req.body, _id: req.body._id })
    .then(() => res.status(200).json({ isOk: true }))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};