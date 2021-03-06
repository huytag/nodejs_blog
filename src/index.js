const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware.x');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connnect to DB
db.connect();
app.use(methodOverride('_method'));
app.use(sortMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Http logger
// app.use(morgan('combined'));

// Template engine

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers:  require('./app/helpers/handlebars')
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'view'));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
