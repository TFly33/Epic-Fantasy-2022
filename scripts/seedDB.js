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
            "Miami Heat",
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
// console.log(myTeamSeed)
    .then(data => {
        console.log(data.result.n + "My Teams Inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const Team = [
    {
        name: "Bommy",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200,
    },
    {
        name: "James",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Patrick",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "DJ",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Goose",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Neptune",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Ben",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Team Bommy",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Steids/Trigs",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    },
    {
        name: "Al",
        NBA: 25,
        EPL: 30,
        NFL: 50,
        NHL: 75,
        MLB: 0,
        TotalPoints: 200
    }
];

db.Team
    .remove({})
    .then(() => db.Team.collection.insertMany(Team))
// console.log(Team)
    .then(data => {
        console.log(data.result.n + "Teams Inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });