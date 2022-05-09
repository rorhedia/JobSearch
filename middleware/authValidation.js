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
        req.user          = jwt.verify( token, JWT_SECRET );
        return next();
    } catch ( e ) {
        return res.status( 403 ).json( {
            error  : true,
            message: 'Permisos insuficientes'
        } )
    }
}

function adminValidation( req, res, next ) {
    const { user } = req;
    if ( user.role === 'admin' ) {
        return next();
    }

    return res.status( 403 ).json( {
        error  : true,
        message: 'No tienes los permisos para esta operación'
    } )
}

module.exports = { authValidation, adminValidation };
