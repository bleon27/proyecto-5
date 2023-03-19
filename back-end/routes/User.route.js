const express = require("express");

const router = express.Router();

const { getUsers, getUser, createUser, updateUser, deleteUser, accountUser, updatePassword } = require("../controllers/User.controller");

const { validateAccess } = require("../middlewares/authorization");

router.get("/", validateAccess, getUsers);
router.get("/:id", validateAccess, getUser);
router.post("/", createUser);
router.put("/:id", validateAccess, updateUser);
router.delete("/:id", validateAccess, deleteUser);
router.get("/account/info", validateAccess, accountUser);
router.put("/password/:id", validateAccess, updatePassword);

module.exports = router;