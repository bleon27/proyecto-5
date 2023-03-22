const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

const ProfileSchema = new mongoose.Schema({
    names: {
        type: String,
        require: true
    },
    lastnames: {
        type: String,
        require: false
    },
    age: {
        type: Number,
        //min: [18, "se require ser mayor de 18"],
        require: false
    },
    ci: {
        type: String,
        require: false
    },
    address: {
        type: String,
        require: false
    },
    postal_code: {
        type: String,
        require: false
    },
    country: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: false
    },
    id_user: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

ProfileSchema.plugin(UniqueValidator, { message: "el usuario ya existe" })

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
