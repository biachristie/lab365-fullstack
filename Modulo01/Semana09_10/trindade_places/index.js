const express = require('express');
const dotenv = require('dotenv').config();

const connection = require('./src/database');
const placesRoutes = require('./src/routes/places');
const usersRoutes = require('./src/routes/users');

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync( { alter: true } );
console.log('Connection has been established successfully');

// Home
app.get('/', (req, res) => {
    console.log('It works!');
    return res.json( { message: 'Welcome!' } );
});

app.use(placesRoutes);
app.use(usersRoutes);

app.listen(3333, () => console.log('Server online'));