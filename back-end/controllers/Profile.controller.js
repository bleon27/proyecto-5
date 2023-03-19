const Profile = require("../models/Profile.model");

const getProfile = async (req, res) => {
    console.log(req.user)
    try {
        const profile = await Profile.findOne({ "id_user": req.user.id });
        res.json({
            "result": profile
        });
    } catch (error) {
        res.json({
            "error": error.message
        });
    }
}

const updateProfile = async (req, res) => {
    const profileId = req.params.id;
    try {
        const response = await Profile.findByIdAndUpdate(profileId,
            //{ $set: req.body }
            {
                $set: {
                    names: req.body.names,
                    lastnames: req.body.lastnames,
                    age: req.body.age,
                    ci: req.body.ci,
                    address: req.body.address,
                    postal_code: req.body.postal_code,
                    country: req.body.country,
                    city: req.body.city
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

module.exports = { getProfile, updateProfile }