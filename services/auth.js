const jwt            = require( 'jsonwebtoken' );
const bcrypt         = require( 'bcrypt' );
const { JWT_SECRET } = require( '../config' );
const Users          = require( './users' );

class Auth {

    login( payload ) {
        return this.#createToken( payload );
    }

    async signup( data ) {
        try {
            if ( data.password ) data.password = await this.#encrypt( data.password );
            const userSvc  = new Users();
            const user     = await userSvc.create( data );
            const userData = {
                id   : user.id,
                name : user.name,
                email: user.email
            }

            const token = this.#createToken( userData );

            return {
                user: userData,
                token
            };
        } catch ( e ) {
            throw e;
        }
    }

    #createToken( payload ) {
        return jwt.sign( payload, JWT_SECRET, { expiresIn: 60 * 60 } );
    }

    async #encrypt( string ) {
        try {
            const salt = await bcrypt.genSalt();
            return await bcrypt.hash( string, salt );
        } catch ( e ) {
            throw e;
        }
    }

}

module.exports = Auth;