const Plan = require('../models/PlanModel');

exports.createPlan = (req, res, next) => {
  const planObject = JSON.parse(req.body.plan);
  delete planObject._id;

  const plan = new Plan({
    ...planObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/plan`
  })

  plan.save()
    .then(() => res.status(201).json({ message: 'Plan enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePlan = (req, res, next) => {
  const filename = thing.imageUrl.split('/images/')[1];
  Plan.deleteOne({_id: req.params.id})
    .then(() => { res.status(200).json({message: 'Plan supprimé !'})})
    .catch(error => res.status(401).json({ error }));
};

exports.getPlan = (req, res, next) => {
  Plan.find()
    .then((plan) => res.status(200).json(plan))
    .catch(error => res.status(400).json({ error }));
};

exports.updatePlan = (req, res, next) => {  
  Plan.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Plan modifié !' }))
    .catch(error => res.status(400).json({ error }));
};