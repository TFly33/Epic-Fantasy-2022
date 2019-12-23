const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  EPL: { type: Number, required: true },
  NFL: { type: Number, required: true },
  NHL: { type: Number, required: true },
  NBA: { type: Number, required: true },
  MLB: { type: Number, required: true },
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
