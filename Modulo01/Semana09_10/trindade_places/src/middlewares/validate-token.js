const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token || token === 'Bearer') {
        return res.status(403).json( { message: 'Token not found' } );
    }

    const tokenJwt = token.slice(7);
    jwt.verify(tokenJwt, process.env.TOKEN_KEY, (error, conteudoDoToken) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(403).json( { message: 'Token expired' } );
            } else if (error.name === 'JsonWebTokenError') {
                return res.status(403).json( { message: 'Token invalid' } );
            } else {
                return res.status(500).json( {error: 'Internal server error' } );
            }
        } else {
            req.body.userId = conteudoDoToken.id;
            return next();
        }
    });
}

module.exports = validateToken;