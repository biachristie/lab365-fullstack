const Place = require('../../models/place');

async function createPlace (req, res) {
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
        return res.status(500).json( { message: 'Request could not be processed' } );
    }
}

module.exports = createPlace;