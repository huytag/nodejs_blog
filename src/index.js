const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Http logger
app.use(morgan('combined'));

// Template engine

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/view'));



app.get('/', (req, res) => {
    return res.render('home');
})

app.get('/news', (req, res) => {
    return res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})