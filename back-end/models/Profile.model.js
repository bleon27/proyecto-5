const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    names: {
        type: String,
        require: true
    },
    lastnames: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        //min: [18, "se require ser mayor de 18"],
        require: true
    },
    ci: {
        type: String,
    },
    address: {
        type: String,
        require: true
    },
    postal_code: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    id_user: {
        type: String,
        required: true
    }
    /*,
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: String,
        default: Date.now
    }*/
});

//UserSchema.plugin(UniqueValidator, { message: "el correo ya existe" })

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;