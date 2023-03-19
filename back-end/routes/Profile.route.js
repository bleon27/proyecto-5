const express = require("express");

const router = express.Router();

const { getProfile, updateProfile } = require("../controllers/Profile.controller");

const { validateAccess } = require("../middlewares/authorization");

router.get("/", validateAccess, getProfile);
router.put("/:id", validateAccess, updateProfile);

module.exports = router;