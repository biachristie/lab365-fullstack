const yup = require('yup');

const validation = yup.object().shape({
    name: yup
        .string('Name must be a string')
        .required('Name can not be empty'),
    username: yup
        .string(),
    password: yup
        .string()
        .min(8, 'Password must have at least 8 characters')
});

function validateNewUser(req, res, next) {
    console.log('Dado original ', req.body);

    try {
        validation.validateSync(req.body);
        next();        
    } catch (error) {
        res.status(400).json( { message: error.message } );
    }
}

module.exports = validateNewUser;