const express        = require( 'express' );
const { PORT }       = require( './config' );
const { connection } = require( './config/db' );

const user = require( './routes/users' );
const auth = require( './routes/auth' );

connection();
const app = express();
app.use( express.json() );

user( app );
auth( app );

app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${ PORT }` );
} );