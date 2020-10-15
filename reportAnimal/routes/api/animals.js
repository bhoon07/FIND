const router = require("express").Router();
const dogController = require("../../controllers/dogController");

router.route("/")
  .get(dogController.findAll)
  .post(dogController.create);

router
  .route("/:id")
  .get(dogController.findById)
  .put(dogController.update)
  .delete(dogController.remove);

module.exports = router;
