const Place = require('../../models/place');

async function updatePlace (req, res) {
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
}

module.exports = updatePlace;