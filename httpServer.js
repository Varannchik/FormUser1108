const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const apiRouter = require('./routes/api')
const formsRouter = require('./routes/forms')
const usersRouters = require('./routes/users')

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', formsRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouters);

app.listen(3000, ()=>console.log('Server started 3000'));

module.exports = app;
