const Division = require('../models/DivisionModel');
const { isSuperAdminAuthorized, isAdminAuthorized, isUserAuthorized } = require('../helpers/helpers');

exports.createDivision = (req, res, next) => {
    if (isAdminAuthorized(req)) {
      delete req.body._id;
      const division = new Division({
        ...req.body
      });
      division.save()
        .then(() => res.status(201).json({ message: 'Niveau enregistré !' }))
        .catch(error => res.status(400).json({ error }));
    }
    else {
      res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
    }
};

exports.deleteDivision = (req, res, next) => {
  if (isAdminAuthorized(req)) {
    Division.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Niveau supprimé !'}))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getAllDivisions = (req, res, next) => {
  if (isUserAuthorized(req)) {
    Division.find()
      .then((divisions) => res.status(200).json(divisions))
      .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getDivisionById = (req, res, next) => {
  if (isUserAuthorized(req)) { 
    Division.findOne({ _id: req.params.id })
      .then(division => res.status(200).json(division))
      .catch(error => res.status(404).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.updateDivision = (req, res, next) => {
  if (isAdminAuthorized(req)) { 
  Division.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Niveau modifié !' }))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};