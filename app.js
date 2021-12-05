// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/users');
const authRouter = require('./routes/auth.router');
const subscription = require('./routes/subscription');
const test= require('./routes/test');
const state= require('./routes/state');
const jwtAuthrouter= require('./routes/jwtAuth.router');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
})
  . then(
    () => console.log('Database is connected'),
    (err) => console.log(`Can not connect to the database${err}`),

  );

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const session = expressSession({
  secret: '60dd06aa-cf8e-4cf8-8925-6de720015ebf',
  resave: false,
  saveUninitialized: false,
  name: 'sid',
});

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use('/', authRouter);
app.use('/',jwtAuthrouter)
app.use('/users', users);
app.use('/subscription', subscription);
app.use('/state', state);
// app.use('/', test);

module.exports = app;
