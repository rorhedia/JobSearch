require( 'dotenv' ).config();

const config = {
    PORT:        process.env.PORT,
    DB_HOST:     process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USER:     process.env.DB_USER,
    DB_NAME:     process.env.DB_NAME
}

module.exports = config;