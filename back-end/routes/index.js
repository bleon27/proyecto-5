const express = require("express");

const router = express.Router();

const userRoutes =  require("./User.route");
const authRoutes =  require("./Auth.route");
const productRoutes =  require("./Product.route");
const profileRoutes =  require("./Profile.route");

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/product", productRoutes);
router.use("/profile", profileRoutes);

module.exports = router;