function errorHandler( res, error ) {
    console.log( error );

    return res.code( 500 ).json( {
        success: false,
        error  : '¡Error!'
    } )
}

module.exports = errorHandler;