const express = require('express');
const dotenv = require('dotenv').config();
const connection = require('./src/database');
const Place = require('./src/models/place');

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync();
console.log('Connection has been established successfully');

app.get('/', (req, res) => {
    console.log('It works!');
    return res.json( { message: 'Welcome!' } );
});

// Add a new place
app.post('/places', async (req, res) => {
    try {
        const place = {
            name: req.body.name,
            contact: req.body.contact,
            opening_hours: req.body.opening_hours,
            description: req.body.description,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }

        const placeAlreadyExists = await Place.findOne(
            { where: { name: place.name } }
        );
    
        if (!place.name) {
            return res.status(400).json( { message: 'Name can not be empty' } );
        }

        if (placeAlreadyExists !== null) {
            return res.status(400).json( { message: 'Place already exists in database' } );
        }

        const newPlace = await Place.create(place);
        return res.status(201).json(newPlace);
    } catch (error) {
        console.log(error);
        return res.status(500).json( { message: 'Request could not be processed'} );
    }
});

// List all places
app.get('/places', async (req, res) => {
    try {
        const places = await Place.findAll();
        return res.json(places);
    } catch (error) {
        return res.status(500).json( { message: 'Request could not be processed' } );
    }
});

// Update a place
app.put('/places/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            name,
            contact,
            opening_hours,
            description,
            latitude,
            longitude
        } = req.body;
        
        const place = await Place.findByPk(id);
        
        if(place === null) {
            return res.status(406).json( { message: 'ID could not be found' } );
        }
        
        place.name = name;
        place.contact = contact;
        place.opening_hours = opening_hours;
        place.description = description;
        place.latitude = latitude;
        place.longitude = longitude;
        
        await place.save();
        return res.json( { message: 'Place updated' } );
        
    } catch (error) {
        return res.status(500).json( { message: 'Request could not be processed' } );
    }
});

// Delete a place
app.delete('/places/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const idExists = await Place.findByPk(id);
        
        if (idExists === null) {
            return res.status(406).json( { message: 'ID could not be found' } );
        }
        
        await Place.destroy(
            { where: { id: id} }
        )
        
        return res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        return res.status(500).json( { message: 'Request could not be processed' } );
    }
});

app.listen(3333, () => console.log('Server online'));