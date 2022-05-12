const express        = require( 'express' );
const cors           = require( 'cors' );
const { PORT }       = require( './config' );
const { connection } = require( './config/db' );

const users = require( './routes/users' );
const auth  = require( './routes/auth' );

connection();
const app = express();
app.use( cors( {
    origin: [ 'http://localhost:3000' ]
} ) )
app.use( express.json() );

users( app );
auth( app );

app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${ PORT }` );
} );