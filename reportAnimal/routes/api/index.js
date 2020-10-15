const router = require("express").Router();
const dogRoutes = require("./animals");

router.use("/animals", dogRoutes);

module.exports = router;