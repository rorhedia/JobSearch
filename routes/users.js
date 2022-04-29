const express = require( 'express' );

function users( app ) {

    const router = express.Router();
    app.use( '/api/users', router );

    router.get( '/', ( req, res ) => {
        res.json( { data: 'GET Users' } );
    } );

}

module.exports = users;