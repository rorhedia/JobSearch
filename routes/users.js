const express      = require( 'express' );
const Users        = require( '../services/users' );
const errorHandler = require( '../helpers/errorHandler' );

function users( app ) {

    const router  = express.Router();
    const userSvc = new Users();

    app.use( '/api/users', router );

    router.get( '/', async ( req, res ) => {
        try {
            const users = await userSvc.getAll();
            return res.json( users );
        } catch ( e ) {
            errorHandler( res, e );
        }
    } );

    router.post( '/', async ( req, res ) => {
        try {
            const users = await userSvc.create( res.body );
            return res.json( users );
        } catch ( e ) {
            errorHandler( res, e );
        }
    } );

}

module.exports = users;