const router = require("express").Router();
const myTeamController = require("./../controllers/MyTeamsController");

// Matches with "/api/myteam"
router.route("/api/myteam")
  .get(myTeamController.findAll)
  .post(myTeamController.create);

// Matches with "/api/myteam/:id"
router
  .route("/api/myteam/:id")
  .get(myTeamController.findById)
  .put(myTeamController.update)
  .delete(myTeamController.remove);

module.exports = router;