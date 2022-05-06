const jwt            = require( 'jsonwebtoken' );
const { JWT_SECRET } = require( '../config' );

function authValidation( req, res, next ) {
    const { authorization } = req.headers;
    if ( !authorization ) {
        return res.status( 403 ).json( {
            error  : true,
            message: 'Permisos insuficientes'
        } )
    }

    try {
        const [ , token ] = authorization.split( ' ' );
        jwt.verify( token, JWT_SECRET );
        return next();
    } catch ( e ) {
        return res.status( 403 ).json( {
            error  : true,
            message: 'Permisos insuficientes'
        } )
    }
}

module.exports = authValidation;
