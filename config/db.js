const mongoose = require( 'mongoose' );
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require( '.' );

const connection = async () => {
    const conn = await mongoose.connect( `mongodb+srv://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }?retryWrites=true&w=majority` );
    console.log( 'Mongo DB connected ' + conn.connection.host );
};

module.exports = { connection, mongoose };