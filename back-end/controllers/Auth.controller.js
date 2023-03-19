const User = require("../models/user.model");
const Profile = require("../models/Profile.model");
const { generateToken } = require('../middlewares/authorization')

const login = async (req, res) => {
    try {
        // verficar que el usuario exista
        // si existe
        // desencriptar contraseña *
        // comparar contraseñas *
        // si son iguales, generar el token
        // crear el payload
        // generar la firma
        // si no son aviso de credenciales incorrectas
        // si no existe, mandar mensaje de usuario inexistente
        const { email, password } = req.body;
        const user = await User.findOne({ "email": email });
        const profile = await Profile.findOne({ "id_user": user.id });
        if (user) {
            if (user.validatePassword(password)) {
                const token = generateToken({
                    id: user.id,
                    name: profile.names,
                    lastnames: profile.lastnames
                });
                res.json({
                    result: token
                });
            } else {
                console.log('else valid')
                res.status(422).json({
                    result: "Password does not match"
                });
            }
        } else {
            console.log('else')
            res.status(422).json({
                error: `User ${email} not found`
            });
        }
    } catch (error) {
        console.log('catch')
        res.status(422).json({
            "error": error.message
        });
    }
}

const logout = (req, res) => {
    try {
        // marcar el token como expirado


    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { login, logout }