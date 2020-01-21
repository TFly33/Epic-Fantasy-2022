const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const teamRoutes = require("./routes/TeamRoutes");
const myTeamRoutes = require("./routes/MyTeams");
// const loginRoutes = require("./routes/login");
// Defining Passport here! 
// const passport = require("./client/src/middleware/passport");
// Might need to add this login route eventually. 
// const loginRoutes = require("./routes/Login");
const app = express();
// const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Putting my passport stuff here. 
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Define API routes here
app.use(teamRoutes);
app.use(myTeamRoutes);
// app.use(loginRoutes);


// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/EpicFantasyLeague";

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
