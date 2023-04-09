const Place = require('../../models/place');

async function findPlaces (req, res) {
    try {
        const places = await Place.findAll();
        return res.json(places);
    } catch (error) {
        return res.status(500).json( { message: 'Request could not be processed' } );
    }
}

module.exports = findPlaces;