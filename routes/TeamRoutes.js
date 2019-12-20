const router = require("express").Router();
const teamController = require("../../controllers/teamController");

// Matches with "/api/team"
router.route("/api/team")
  .get(teamController.findAll)
  .post(teamController.create);

// Matches with "/api/books/:id"
router
  .route("/api/team/:id")
  .get(teamController.findById)
  .put(teamController.update)
  .delete(teamController.remove);

module.exports = router;