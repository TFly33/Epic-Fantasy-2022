const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: { type: String, required: true },
});

const Team = mongoose.model("MyTeam", TeamSchema);

module.exports = Team;
