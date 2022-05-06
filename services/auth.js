const jwt            = require( 'jsonwebtoken' );
const bcrypt         = require( 'bcrypt' );
const { JWT_SECRET } = require( '../config' );
const Users          = require( './users' );

class Auth {

    async login( data ) {
        const { email, password } = data;
        const userSvc             = new Users();
        const user                = await userSvc.getByEmail( email );

        if ( !user ) throw new Error( 'Las credenciales con incorrectas' );
        const passwordValidate = await this.#compare( password, user.password );
        if ( !passwordValidate ) throw new Error( 'Las credenciales son incorrectas' );

        return this.#getUserData( user );
    }

    async signup( data ) {
        try {
            if ( data.password ) data.password = await this.#encrypt( data.password );
            const userSvc = new Users();
            const user    = await userSvc.create( data );

            return this.#getUserData( user );
        } catch ( e ) {
            throw e;
        }
    }

    #getUserData( user ) {
        const userData = {
            id   : user.id,
            name : user.name,
            email: user.email,
            role : user.role
        }

        const token = this.#createToken( userData );

        return {
            user: userData,
            token
        };
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

    async #compare( string, hash ) {
        return await bcrypt.compare( string, hash );
    }

}

module.exports = Auth;