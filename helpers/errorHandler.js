function errorHandler( res, error ) {
    console.log( error );

    return res.status( 500 ).json( {
        error  : true,
        message: '¡Error!'
    } )
}

module.exports = errorHandler;