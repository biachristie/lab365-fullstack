const { Router } = require('express');

const validateNewUser = require('../middlewares/validate-new-user');

const createUser = require('../controllers/users/createUser');
const createSession = require('../controllers/users/createSession');

const usersRoutes = new Router();

// Add a new user
usersRoutes.post('/users', validateNewUser, createUser);

// Create a login session
usersRoutes.post('/sessions', createSession);

module.exports = usersRoutes;