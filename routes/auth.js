const express      = require( 'express' );
const Auth         = require( '../services/auth' );
const errorHandler = require( '../helpers/errorHandler' );

function auth( app ) {
    const router  = express.Router();
    const AuthSvc = new Auth();

    app.use( '/api/auth', router );

    router.post( '/login', async ( req, res ) => {
        try {
            const result = await AuthSvc.login( req.body );
            return res.json( result );
        } catch ( e ) {
            errorHandler( res, e );
        }
    } )

    router.post( '/signup', async ( req, res ) => {
        try {
            const result = await AuthSvc.signup( req.body );
            return res.json( result );
        } catch ( e ) {
            errorHandler( res, e );
        }
    } )

}

module.exports = auth;