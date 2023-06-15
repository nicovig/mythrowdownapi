const TeamFormat = require('../models/TeamFormatModel');
const { isAdminAuthorized, isUserAuthorized } = require('../helpers/helpers');

exports.createTeamFormat = (req, res, next) => {
    if (isAdminAuthorized(req)) {
      delete req.body._id;
      const teamFormat = new TeamFormat({
        ...req.body
      });
      teamFormat.save()
        .then(() => res.status(201).json({ message: 'Format d\'équipe enregistré !' }))
        .catch(error => res.status(400).json({ error }));
    }
    else {
      res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
    }
};

exports.deleteTeamFormat = (req, res, next) => {
  if (isAdminAuthorized(req)) {
    TeamFormat.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Format d\'équipe supprimé !'}))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getAllTeamFormats = (req, res, next) => {
  if (isUserAuthorized(req)) {
    TeamFormat.find()
      .then((teams) => res.status(200).json(teams))
      .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getTeamFormatById = (req, res, next) => {
  if (isUserAuthorized(req)) { 
    TeamFormat.findOne({ _id: req.params.id })
      .then(team => res.status(200).json(team))
      .catch(error => res.status(404).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.updateTeamFormat = (req, res, next) => {
  if (isAdminAuthorized(req)) { 
  TeamFormat.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Format d\'équipe modifié !' }))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};