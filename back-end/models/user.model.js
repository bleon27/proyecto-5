const mongoose = require('mongoose');
const crypto = require("crypto");
const UniqueValidator = require('mongoose-unique-validator');

const encryptConfig = {
    "algorythm": "sha512",
    "iterarions": 1000,
    "length": 512
}

const UserSchema = new mongoose.Schema({
    /*firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        min: [18, "se require ser mayor de 18"],
        require: true
    },
    address: {
        type: String,
        require: true
    },*/
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlegth: [3, "password require al menos 3 caracteres"],
        maxlegth: [8, " no toma  password mayor a 8 caracteres"]
    },
    salt: String, // este campo es necesario, es la llave para leer la contraseña encryptada
    createdAt: {
        type: String,
        default: Date.now
    }
});
//el contexto de una funcion {para usar this haciendo referencia a la funcion como tal (schema) dicha funcion debe ser declarada con function y no con =>}

UserSchema.methods.hashPassword = function (password) { // No funcionaba porque estabamos usando funcion flecha y la instrucción
    this.salt = crypto.randomBytes(10).toString("hex");
    var encrypted = crypto
        .pbkdf2Sync(password, this.salt, encryptConfig.iterarions, encryptConfig.length, encryptConfig.algorythm)
        .toString("hex");
    this.password = encrypted;
}

UserSchema.methods.validatePassword = function (password) {
    // hashed -> desencriptar -> comparar (password)
    // 123joel  -> hashear -> compararlo (hashed en modelo)
    var hashedPwd = crypto
        .pbkdf2Sync(password, this.salt, encryptConfig.iterarions, encryptConfig.length, encryptConfig.algorythm)
        .toString("hex");
    return this.password === hashedPwd;
}

UserSchema.plugin(UniqueValidator, { message: "el correo ya existe" })

const User = mongoose.model("User", UserSchema);

module.exports = User;