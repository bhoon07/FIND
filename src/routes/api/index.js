const router = require("express").Router();
const dogRoutes = require("../api/animals");

router.use("/", dogRoutes);

module.exports = router;