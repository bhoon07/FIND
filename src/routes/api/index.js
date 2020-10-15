const router = require("express").Router();
const dogRoutes = require("./animals");

router.use("/", dogRoutes);

module.exports = router;