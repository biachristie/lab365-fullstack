const { Router } = require('express');

const validateToken = require('../middlewares/validate-token');

const createPlace = require('../controllers/places/createPlace');
const findPlaces = require('../controllers/places/findPlaces');
const updatePlace = require('../controllers/places/updatePlace');
const deletePlace = require('../controllers/places/deletePlace');

const placesRoutes = new Router();

// Add a new place
placesRoutes.post('/places', validateToken, createPlace);

// List all places
placesRoutes.get('/places', validateToken, findPlaces);

// Update a place
placesRoutes.put('/places/:id', validateToken, updatePlace);

// Delete a place
placesRoutes.delete('/places/:id', validateToken, deletePlace);

module.exports = placesRoutes;