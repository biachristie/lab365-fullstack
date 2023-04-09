const Place = require('../../models/place');

async function deletePlace (req,res) {
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
}

module.exports = deletePlace;