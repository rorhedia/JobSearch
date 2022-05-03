const express        = require( 'express' );
const { PORT }       = require( './config' );
const { connection } = require( './config/db' );

const user = require( './routes/users' );

connection();
const app = express();
app.use( express.json() );

user( app );

app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${ PORT }` );
} );