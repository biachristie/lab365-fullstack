const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function createSession (req, res) {
    try {
        const userInDatabase = await User.findOne({
            where: { username: req.body.username }
        })
    
        console.log(userInDatabase);
        if (!userInDatabase) {
            return res.status(401).json( { message: 'Username / senha incorreto' } );
        }
    
        const passwordIsValid = await bcrypt.compare(req.body.password, userInDatabase.password);
    
        console.log("password " + passwordIsValid);
        if (!passwordIsValid) {
            return res.status(401).json( { message: 'Username / senha incorreto' } );
        }
    
        const token = jwt.sign(
            { id: userInDatabase.id },
            process.env.TOKEN_KEY,
            { expiresIn: '1h' }
        );
    
        res.json( { name: userInDatabase.name, token: token } );
    } catch (error) {
        res.status(500).json( { message: 'Não conseguimos processar sua solicitação' } );
    }
}

module.exports = createSession;