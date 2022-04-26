const express = require( 'express' );
const { PORT } = require( './config' );

const app = express();

app( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${ PORT }` );
} )