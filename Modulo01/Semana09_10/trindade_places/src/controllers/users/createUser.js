const User = require('../../models/user');
const bcrypt = require('bcrypt');

async function createUser (req, res) {
    try {
        const userInDatabase = await User.findOne({
            where: { username: req.body.username }
        });

        console.log(userInDatabase);
        if (userInDatabase) {
            return res.status(409).json( { message: 'Username already in use' } );
        }

        const hash = await bcrypt.hash(req.body.password, 10);

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: hash
        };
        
        const { username } = await User.create(newUser);

        return res.status(201).json({ username });
    } catch (error) {
        console.log(error);
        return res.status(500).json( { message: 'Request coud not be processed' } );
    }
}

module.exports = createUser;