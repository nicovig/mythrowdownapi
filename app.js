const express = require('express');
const mongoose = require('mongoose');

const authenticationController = require('./controllers/authenticationController');
const exerciseController = require('./controllers/exerciseController');
const planController = require('./controllers/planController');
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://nicovig:clustertest01@clustertest0.vcn045k.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/authentication', authenticationController);
app.use('/exercise', exerciseController);
app.use('/planController', planController);
app.use('/user', userController);

module.exports = app;