const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  EPL: { type: Array, required: true },
  NFL: { type: Array, required: true },
  NHL: { type: Array, required: true },
  NBA: { type: Array, required: true },
  MLB: { type: Array, required: true },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
