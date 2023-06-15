const express = require('express');
const mongoose = require('mongoose');

const athleteRoute = require('./routes/athleteRoute');
const authenticationRoute = require('./routes/authenticationRoute');
const divisionRoute = require('./routes/divisionRoute');
const exerciseRoute = require('./routes/exerciseRoute');
const planRoute = require('./routes/planRoute');
const roleRoute = require('./routes/roleRoute');
const teamRoute = require('./routes/teamRoute');
const teamFormatRoute = require('./routes/teamFormatRoute');
const userRoute = require('./routes/userRoute');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.json());

mongoose.connect('mongodb+srv://nicovig:clustertest01@clustertest0.vcn045k.mongodb.net/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/athlete', athleteRoute);
app.use('/authentication', authenticationRoute);
app.use('/exercise', exerciseRoute);
app.use('/division', divisionRoute);
app.use('/planRoute', planRoute);
app.use('/role', roleRoute);
app.use('/team', teamRoute);
app.use('/teamFormat', teamFormatRoute);
app.use('/user', userRoute);

module.exports = app;