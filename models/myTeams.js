const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myTeamsSchema = new Schema({
  name: { type: String, required: true },
});

const MyTeam = mongoose.model("MyTeam", myTeamsSchema);

module.exports = MyTeam;
