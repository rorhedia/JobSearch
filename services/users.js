const UserModel = require( '../models/users' );

class Users {

    async getAll() {
        try {
            return await UserModel.find();
        } catch ( e ) {
            throw e;
        }
    }

    async create( data ) {
        try {
            return await UserModel.create( data );
        } catch ( e ) {
            throw e;
        }
    }
}

module.exports = Users;