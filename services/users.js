const UserModel = require( '../models/users' );

class Users {

    async getAll() {
        try {
            return await UserModel.find();
        } catch ( e ) {
            throw e;
        }
    }

    async getByEmail( email ) {
        try {
            return await UserModel.findOne( { email } );
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

    async update( id, data ) {
        try {
            return await UserModel.findByIdAndUpdate( id, data );
        } catch ( e ) {
            throw e;
        }
    }

    async delete( id ) {
        try {
            return await UserModel.findByIdAndDelete( id );
        } catch ( e ) {
            throw e;
        }
    }

}

module.exports = Users;