const express = require( 'express' );
const Auth    = require( '../services/auth' );

function auth( app ) {
    const router  = express.Router();
    const AuthSvc = new Auth();

    app.use( '/api/auth', router );

    router.post( '/login', async ( req, res ) => {
        const token = AuthSvc.login( req.body );
        return res.json( { token } );
    } )

}

module.exports = auth;