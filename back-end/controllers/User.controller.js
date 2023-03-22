const User = require("../models/user.model");
const Profile = require("../models/Profile.model");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({
            "result": users
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        res.json({
            "result": user
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}
//listo
const createUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            req.status(401).send({
                error: `El usuario ${req.body.email} ya existe`
            })
        } else {
            var newUser = new User({
                email: req.body.email,
                password: req.body.password,
            });
            newUser.hashPassword(req.body.password);
            await newUser.save();

            await Profile.collection.insertOne({
                names: req.body.names,
                lastnames: req.body.lastnames,
                age: req.body.age,
                ci: req.body.ci,
                address: req.body.address,
                postal_code: req.body.postal_code,
                country: req.body.country,
                city: req.body.city,
                id_user: newUser.id
            });

            res.json({
                "result": newUser
            });
        }
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const response = await User.findByIdAndUpdate(userId,
            //{ $set: req.body }
            {
                $set: {
                    firstName: req.body.name,
                    lasName: req.body.lastname,
                    age: req.body.age,
                    dateOfBirth: req.body.dob,
                    email: req.body.email,
                    password: req.body.password,
                }
            }
        );
        res.json({
            "result": response
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const response = await User.findByIdAndDelete(userId);

        res.json({
            "result": response
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const accountUser = async (req, res) => {
    const user = await User.findById(req.user.id);
    const profile = await Profile.findOne({ id_user: req.user.id });
    res.send({
        "id": user.id,
        "names": profile.names,
        "lastnames": profile.lastnames
    });
}

const updatePassword = async (req, res) => {
    const userId = req.user.id;
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body;
        let userUpdate = await User.findOne({ _id: userId });
        if (userUpdate.validatePassword(oldPassword) && newPassword === confirmPassword) {
            await User.updateOne({ id_user: userId }, { password: newPassword });
            userUpdate.hashPassword(newPassword);
            await userUpdate.save();

            res.json({
                "result": userUpdate
            });
        } else {
            res.status(401).json({
                result: "Las contraseñas no coinciden"
            });
        }
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, accountUser, updatePassword }
