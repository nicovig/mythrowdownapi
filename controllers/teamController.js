const Team = require('../models/TeamModel');
const { isAdminAuthorized, isUserAuthorized } = require('../helpers/helpers');

exports.createTeam = (req, res, next) => {
    if (isAdminAuthorized(req)) {
      delete req.body._id;
      const team = new Team({
        ...req.body
      });
      team.save()
        .then(() => res.status(201).json({ message: 'Équipe enregistrée !' }))
        .catch(error => res.status(400).json({ error }));
    }
    else {
      res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
    }
};

exports.deleteTeam = (req, res, next) => {
  if (isAdminAuthorized(req)) {
    Team.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Équipe supprimée !'}))
    .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getAllTeams = (req, res, next) => {
  if (isUserAuthorized(req)) {
    Team.find()
      .then((teams) => res.status(200).json(teams))
      .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.getTeamById = (req, res, next) => {
  if (isUserAuthorized(req)) { 
    Team.findOne({ _id: req.params.id })
      .then(team => {
        res.status(200).json(team);
      })
      .catch(error => res.status(404).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};

exports.updateTeam = (req, res, next) => {
  if (isAdminAuthorized(req)) {
    Team.updateOne({ _id: req.body.id }, { ...req.body, _id: req.body._id })
      .then((queryResult) => res.status(200).json({ message: 'Équipe modifiée !' }))
      .catch(error => res.status(400).json({ error }));
  }
  else {
    res.status(401).json({ message: 'L\'utilisateur connecté n\'a pas le droit de faire cette action'});
  }
};