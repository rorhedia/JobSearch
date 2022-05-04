const jwt            = require( 'jsonwebtoken' );
const { JWT_SECRET } = require( '../config' );

class Auth {

    login( payload ) {
        return jwt.sign( payload, JWT_SECRET, { expiresIn: 60 * 60 } );
    }

}

module
    .exports = Auth;