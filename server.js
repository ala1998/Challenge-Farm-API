const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser');
  mysql = require('mysql');
const usersRouter = require('./routes/users');
const animalsRouter = require('./routes/animals');

var server = {
  port: 4000
};

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'animals_rayyan2'
})

app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/animals',animalsRouter);

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));