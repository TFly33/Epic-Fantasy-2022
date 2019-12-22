const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const teamRoutes = require("./routes/TeamRoutes");
const myTeamRoutes = require("./routes/MyTeams");
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(teamRoutes);
app.use(myTeamRoutes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/EpicFantasyLeague";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
