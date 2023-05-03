const Role = require('../models/RoleModel');

exports.createRole = (req, res, next) => {
    delete req.body._id;
    const role = new Role({
      ...req.body
    });
    role.save()
      .then(() => res.status(201).json({ message: 'Role enregistré !' }))
      .catch((error) => {
        return res.status(400).json({ error });
      }); 
};

exports.deleteRole = (req, res, next) => {
  Role.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Role supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllRoles = (req, res, next) => {
  Role.find()
    .then((roles) => res.status(200).json(roles))
    .catch(error => res.status(400).json({ error }));
};

exports.updateRole = (req, res, next) => {
  Role.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Role modifié !' }))
    .catch(error => res.status(400).json({ error }));
};