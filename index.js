const express = require( 'express' );
const { PORT } = require( './config' );
const { connection } = require( './config/db' );

connection();
const app = express();

app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${ PORT }` );
} );