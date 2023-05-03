const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/UserModel');
const paramsConst = require('../paramsConst');

exports.login = (req, res, next) => {
  User.findOne({ email: req.headers.email })
      .then(user => {
          if (!user) {
              return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
          }
          bcrypt.compare(req.headers.password, user.password)
              .then(valid => {
                  if (!valid) {
                      return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                  } 
                  res.status(200).json({
                      userId: user._id,
                      token: jwt.sign({ _id: user._id, role: user.role }, paramsConst.getTokenKey(), { expiresIn: '24h' })
                  });
              })
              .catch(error => {
                return res.status(500).json({ error });
              });
      })
      .catch(error => res.status(500).json({ error }));
};