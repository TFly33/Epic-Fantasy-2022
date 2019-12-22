const mongoose = require("mongoose");
const db = require("../models");

// This file shows the MyTeams which have been 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/EpicFantasyLeague"
);

const myTeamSeed = [
    {
        name: "Team Bommy",
        NBA: [
            "Miami Hear",
            "San Antonio Spurs",
            "Brooklyn Nets"
        ],
        EPL: [
            "Chelsea",
            "Brighton and Hove Albion"
        ],
        NFL: [
            "New England Patriots",
            "San Antonio Spurs",
            "Brooklyn Nets"
        ],
        NHL: [
            "Chicago Blackhawks",
            "Vancouver Canucks",
            "Las Vegas Knights"
        ],
        MLB: [
            "Minnesota Twins",
            "Miami Marlins",
            "Chicago White Sox"
        ]
    }
];

db.MyTeam
    .remove({})
    .then(() => db.MyTeam.collection.insertMany(myTeamSeed))
console.log(myTeamSeed)
    .then(data => {
        console.log(data.result.n + "Teams Inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
