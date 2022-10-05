import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import API from "../../utils/API";
import al from "../../pages/teamPages/al";
import { golfHelper } from "../../middleware/helper";

// This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 
class Table extends Component {

    //since we are extending class Table so we have to use super in order to override Component class constructor
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        patrickNBA: "",
        jamesNBA: "",
        neptuneNBA: "",
        djNBA: "",
        gooseNBA: "",
        alNBA: "",
        joeNBA: "",
        steidsNBA: "",
        benNBA: "",
        // Putting EPL arrays here. 
        allEPL: [],
        tomEPL: "",
        patEPL: "",
        jamesEPL: "",
        neptuneEPL: "",
        djEPL: "",
        gooseEPL: "",
        alEPL: "",
        joeEPL: "",
        steidsEPL: "",
        eresEPL: "",
        // Putting NFL results here, even though I actually don't need to dynamically render them right now.
        allNFL: [],
        tomNFL: "",
        patNFL: "",
        patFixedFootball: "",
        jamesNFL: "",
        neptuneNFL: "",
        djNFL: "",
        gooseNFL: "",
        alNFL: "",
        alFixedFootball: "",
        joeNFL: "",
        steidsNFL: "",
        eresNFL: "",
        // NHL Here: 
        tomNHL: "",
        patNHL: "",
        jamesNHL: "",
        neptuneNHL: "",
        djNHL: "",
        gooseNHL: "",
        alNHL: "",
        joeNHL: "",
        steidsNHL: "",
        eresNHL: "",
        // PGA Here:
        alPGA: "",
        tomPGA: "",
        patPGA: "",
        steidsPGA: "",
        neptunePGA: "",
        jamesPGA: "",
        joePGA: "",
        djPGA: "",
        eresPGA: "",
        goosePGA: "",
        // MLB
        // PGA Here:
        alMLB: "",
        tomMLB: "",
        patMLB: "",
        steidsMLB: "",
        neptuneMLB: "",
        jamesMLB: "",
        joeMLB: "",
        djMLB: "",
        eresMLB: "",
        gooseMLB: "",
        // Total Points here. 
        tomTotal: "",
        patTotal: "",
        jamesTotal: "",
        neptuneTotal: "",
        djTotal: "",
        gooseTotal: "",
        alTotal: "",
        joeTotal: "",
        steidsTotal: "",
        benTotal: "",
    }

    datatablePage = () => {

        const data = {
            columns: [
                {
                    label: 'Team',
                    field: 'team',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'EPL',
                    field: 'epl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NFL',
                    field: 'nfl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NBA',
                    field: 'nba',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'PGA',
                    field: 'pga',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'NHL',
                    field: 'nhl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'MLB',
                    field: 'mlb',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Bonus',
                    field: 'bonus',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Total',
                    field: 'total',
                    sort: 'asc',
                    width: 150
                }
            ],
            rows: [
                {
                    team: 'Tommy',
                    epl: this.state.tomEPL,
                    nfl: this.state.tomNFL,
                    pga: this.state.tomPGA,
                    nba: this.state.tomNBA,
                    nhl: this.state.tomNHL,
                    mlb: this.state.tomMLB,
                    bonus: 200,
                    total: this.state.tomTotal
                },
                {
                    team: 'Pat/JP',
                    epl: this.state.patEPL,
                    nfl: this.state.patFixedFootball,
                    pga: this.state.patPGA,
                    nba: this.state.patrickNBA,
                    nhl: this.state.patNHL,
                    mlb: this.state.patMLB,
                    bonus: 200,
                    total: this.state.patTotal
                },
                {
                    team: 'James',
                    epl: this.state.jamesEPL,
                    nfl: this.state.jamesNFL,
                    pga: this.state.jamesPGA,
                    nba: this.state.jamesNBA,
                    nhl: this.state.jamesNHL,
                    mlb: this.state.jamesMLB,
                    bonus: 200,
                    total: this.state.jamesTotal
                },
                {
                    team: 'Goose',
                    epl: this.state.gooseEPL,
                    nfl: this.state.gooseNFL,
                    pga: this.state.goosePGA,
                    nba: this.state.gooseNBA,
                    nhl: this.state.gooseNHL,
                    mlb: this.state.gooseMLB,
                    bonus: 200,
                    total: this.state.gooseTotal
                },
                {
                    team: 'Neptune',
                    epl: this.state.neptuneEPL,
                    nfl: this.state.neptuneNFL,
                    pga: this.state.neptunePGA,
                    nba: this.state.neptuneNBA,
                    nhl: this.state.neptuneNHL,
                    mlb: this.state.neptuneMLB,
                    bonus: 200,
                    total: this.state.neptuneTotal
                },
                {
                    team: 'Joe',
                    epl: this.state.joeEPL,
                    nfl: this.state.joeNFL,
                    pga: this.state.joePGA,
                    nba: this.state.joeNBA,
                    nhl: this.state.joeNHL,
                    mlb: this.state.joeMLB,
                    bonus: 200,
                    total: this.state.joeTotal
                },
                {
                    team: 'Eres',
                    epl: this.state.eresEPL,
                    nfl: this.state.eresNFL,
                    pga: this.state.eresPGA,
                    nba: this.state.benNBA,
                    nhl: this.state.eresNHL,
                    mlb: this.state.eresMLB,
                    bonus: 200,
                    total: this.state.benTotal
                },
                {
                    team: 'DJ',
                    epl: this.state.djEPL,
                    nfl: this.state.djNFL,
                    pga: this.state.djPGA,
                    nba: this.state.djNBA,
                    nhl: this.state.djNHL,
                    mlb: this.state.djMLB,
                    bonus: 200,
                    total: this.state.djTotal
                },
                {
                    team: 'Steids',
                    epl: this.state.steidsEPL,
                    nfl: this.state.steidsNFL,
                    pga: this.state.steidsPGA,
                    nba: this.state.steidsNBA,
                    nhl: this.state.steidsNHL,
                    mlb: this.state.steidsMLB,
                    bonus: 200,
                    total: this.state.steidsTotal
                },
                {
                    team: 'Al',
                    epl: this.state.alEPL,
                    nfl: this.state.alFixedFootball,
                    pga: this.state.alPGA,
                    nba: this.state.alNBA,
                    nhl: this.state.alNHL,
                    mlb: this.state.alMLB,
                    bonus: 200,
                    total: this.state.alTotal
                },

            ]
        };

        return (
            <MDBDataTable
                striped
                bordered
                small
                data={data}
                paging={false}
                searching={false}
            />
        );
    }

    componentDidMount() {
        // first we scrape. Inside the function, need to post to the Mongo DB. 
        this.getScoresNBA();
        // Now, once the updates have applied, we call the getteams. This will show updated results. I'm gonna freeze this for the time being so I don't make a million API calls. 
        this.getScoresEPL();
        // I'm gonna run this as a function even though these are just dead numbers at this point (since the NFL regular season ended)
        this.getScoresNFL();
        // running NHL here
        this.getScoresNHL();
        // MLB Here 
        this.getScoresMLB();
        this.getScoresPGA();

    };

    // Let's create a function to add up all the scores also. But, I need that to run at the end of all the other functions, otherwise I will just get a blank slate back. 

    totalScores = () => {

        // Totals for Tom 
        var tomTotalPoints =
            parseInt((this.state.tomNBA)) +
            parseInt((this.state.tomNHL)) +
            parseInt((this.state.tomPGA)) +
            parseInt((this.state.tomNFL)) +
            parseInt((this.state.tomEPL)) +
            parseInt((this.state.tomMLB)) +
            // Bonus
            200 -
            // Negative bonus for losing NHL
            30
            this.setState({ tomTotal: tomTotalPoints });
        console.log(tomTotalPoints);

        // Totals for Pat 
        var patTotalPoints =
            parseInt((this.state.patrickNBA)) +
            parseInt((this.state.patNHL)) +
            parseInt((this.state.patPGA)) +
            parseInt((this.state.patNFL)) +
            parseInt((this.state.patEPL)) +
            parseInt((this.state.patMLB)) +
            // Bonus
            200 -
            // Bonus for losing PGA
            30
        this.setState({ patTotal: patTotalPoints });

        // Totals for JAmes
        var jamesTotalPoints =
            parseInt((this.state.jamesNBA)) +
            parseInt((this.state.jamesNHL)) +
            parseInt((this.state.jamesPGA)) +
            parseInt((this.state.jamesNFL)) +
            parseInt((this.state.jamesEPL)) +
            parseInt((this.state.jamesMLB)) +
            // Bonus
            200 - 
            // Negative Bonus for losing NBA
            30 + 
            // Positive bonus for winning NHL
            30 + 
            // Positive Bonus for winning MLB
            30
        this.setState({ jamesTotal: jamesTotalPoints });

        // Totals for Neptune
        var neptuneTotalPoints =
            parseInt((this.state.neptuneNBA)) +
            parseInt((this.state.neptuneNHL)) +
            parseInt((this.state.neptunePGA)) +
            parseInt((this.state.neptuneNFL)) +
            parseInt((this.state.neptuneEPL)) +
            parseInt((this.state.neptuneMLB)) +
            // Bonus
            200
        this.setState({ neptuneTotal: neptuneTotalPoints });

        // Totals for DJ
        var djTotalPoints =
            parseInt((this.state.djNBA)) +
            parseInt((this.state.djNHL)) +
            parseInt((this.state.djPGA)) +
            parseInt((this.state.djNFL)) +
            parseInt((this.state.djEPL)) +
            parseInt((this.state.djMLB)) +
            // Bonus
            200
        this.setState({ djTotal: djTotalPoints });

        // Totals for Goose 
        var gooseTotalPoints =
            parseInt((this.state.gooseNBA)) +
            parseInt((this.state.gooseNHL)) +
            parseInt((this.state.goosePGA)) +
            parseInt((this.state.gooseNFL)) +
            parseInt((this.state.gooseEPL)) +
            parseInt((this.state.gooseMLB)) +
            // Bonus
            200
        this.setState({ gooseTotal: gooseTotalPoints });

        // Totals for Al
        var alTotalPoints =
            parseInt((this.state.alNBA)) +
            parseInt((this.state.alNHL)) +
            parseInt((this.state.alPGA)) +
            parseInt((this.state.alNFL)) +
            parseInt((this.state.alEPL)) +
            parseInt((this.state.alMLB)) +
            // Bonus
            200 +
            // bonus for winning EPL 
            30 +
            // bonus for PGA
            30 -
            // negative bonus for losing MLB
            30
        this.setState({ alTotal: alTotalPoints });

        // Totals for Joe
        var joeTotalPoints =
            parseInt((this.state.joeNBA)) +
            parseInt((this.state.joeNHL)) +
            parseInt((this.state.joePGA)) +
            parseInt((this.state.joeNFL)) +
            parseInt((this.state.joeEPL)) +
            parseInt((this.state.joeMLB)) +
            // Bonus
            200 -
            // Negative Bonus for losing EPL
            30 +
            // Positive Bonus for winning NBA
            30
        this.setState({ joeTotal: joeTotalPoints });

        // Totals for Steids
        var steidsTotalPoints =
            parseInt((this.state.steidsNBA)) +
            parseInt((this.state.steidsNHL)) +
            parseInt((this.state.steidsPGA)) +
            parseInt((this.state.steidsNFL)) +
            parseInt((this.state.steidsEPL)) +
            parseInt((this.state.steidsMLB)) +
            // Bonus
            200
        this.setState({ steidsTotal: steidsTotalPoints });

        // Totals for Ben - now Mark Eres 
        var benTotalPoints =
            parseInt((this.state.benNBA)) +
            parseInt((this.state.eresNHL)) +
            parseInt((this.state.eresPGA)) +
            parseInt((this.state.eresNFL)) +
            parseInt((this.state.eresEPL)) +
            parseInt((this.state.eresMLB)) +
            // Bonus
            200
        this.setState({ benTotal: benTotalPoints });
    };

    // This one I get to hard code because the season ended. 

    getScoresNFL = () => {
        var x = golfHelper();
        // Tom
        var tomFootball = (x.Chiefs + x.Saints + x.Vikings)
        this.setState({ tomNFL: tomFootball });
        // Pat
        var patFootball = (x.Buccaneers + x.Jets + x.Jaguars)
        this.setState({ patNFL: patFootball });
        var patFootballFixed = parseInt((patFootball));
        this.setState({ patFixedFootball: patFootballFixed });
        // James
        var jamesFootball = (x.Rams + x.Browns + x.Steelers)
        this.setState({ jamesNFL: jamesFootball });
        // Neptune
        var neptuneFootball = (x.Colts + x.Cardinals + x.Patriots)
        this.setState({ neptuneNFL: neptuneFootball });
        // DJ
        var djFootball = (x.Packers + x.Titans + x.Falcons)
        this.setState({ djNFL: djFootball });
        // Goose
        var gooseFootball = (x.Bills + x.Eagles + x.Giants)
        this.setState({ gooseNFL: gooseFootball });
        // AL
        var alFootball = (x.FortyNiners + x.Broncos + x.Dolphins)
        this.setState({ alNFL: alFootball });
        var alFootballFixed = parseInt((alFootball));
        this.setState({ alFixedFootball: alFootballFixed })
        // Joe
        var joeFootball = (x.Seahawks + x.Bengals + x.Raiders)
        this.setState({ joeNFL: joeFootball });
        // Steids
        var steidsFootball = (x.Panthers + x.Bears + x.Ravens)
        this.setState({ steidsNFL: steidsFootball });
        // Eres 
        var eresFootball = (x.Cowboys + x.Chargers + x.Commanders)
        this.setState({ eresNFL: eresFootball });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 });
        // Al
        var alGolf = (x.Gooch + x.Smith + x.Scheffler + x.Homa).toFixed(0);
        // Mito removed for lowest score
        this.setState({ alPGA: alGolf });
        // Tom
        var tomGolf = (x.Tringale + x.Niemann + x.Schauffele + x.Niemann).toFixed(0);
        // Henley removed for lowest score. 
        this.setState({ tomPGA: tomGolf });
        // Goose
        var gooseGolf = (x.Grillo + x.Hovland + x.Harman + x.Thomas).toFixed(0);
        // Oosthuizen removed for lowest score
        this.setState({ goosePGA: gooseGolf });
        // James
        var jamesGolf = (x.Lowry + x.Im + x.Koepka + x.Horschel).toFixed(0);
        // Na removed for lowest score
        this.setState({ jamesPGA: jamesGolf });
        // Joe
        var joeGolf = (x.VanRooyen + x.Finau + x.Scott + x.Simpson).toFixed(0);
        // Bryson removed for lowest score
        this.setState({ joePGA: joeGolf });
        // Neptune
        var neptuneGolf = (x.Fleetwood + x.Zalatoris + x.Spieth + x.Matsuyama).toFixed(0);
        // Ancer removed for lowest score
        this.setState({ neptunePGA: neptuneGolf });
        // Patrick
        var patGolf = (x.Rahm + x.Berger + x.Champ + x.Wolff).toFixed(0);
        // Dustin Johnson removed for lowest score
        this.setState({ patPGA: patGolf });
        // Steids
        var steidsGolf = (x.Kim + x.Burns + x.Kokrak + x.Conners).toFixed(0);
        // Harris English removed for lowest Score
        this.setState({ steidsPGA: steidsGolf });
        // DJ
        var djGolf = (x.Mcilroy + x.Morikawa + x.Rose + x.Casey).toFixed(0);
        // Sergio removed for lowest score
        this.setState({ djPGA: djGolf });
        // Eres
        var eresGolf = (x.Cantlay + x.Fitzpatrick + x.Reed + x.Hatton).toFixed(0);
        // Fowler removed for lowest score
        this.setState({ eresPGA: eresGolf });

    }

    // Adding MLB here. 

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];

                // Patrick here. 
                var jaysWin;
                var redsWin;
                var guardiansWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    //jays
                    if (fullIndex[i].team.id === 36) {
                        jaysWin = fullIndex[i].games.win.total
                    }

                    //guardians
                    if (fullIndex[i].team.id === 9) {
                        guardiansWin = fullIndex[i].games.win.total
                    }

                    // reds
                    if (fullIndex[i].team.id === 8) {
                        redsWin = fullIndex[i].games.win.total
                    }

                }
                var allMLB = jaysWin + guardiansWin + redsWin;
                this.setState({ patMLB: allMLB });

                // Al here 
                var athleticsWin;
                var tigersWin;
                var marlinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // athletics
                    if (fullIndex[i].team.id === 26) {
                        athleticsWin = fullIndex[i].games.win.total
                    }

                    //marlins
                    if (fullIndex[i].team.id === 19) {
                        marlinsWin = fullIndex[i].games.win.total
                    }

                    // tigers
                    if (fullIndex[i].team.id === 12) {
                        tigersWin = fullIndex[i].games.win.total
                    }

                }
                var alTotal = athleticsWin + marlinsWin + tigersWin;
                this.setState({ alMLB: alTotal });

                // Eres Here 
                var yankeesWin;
                var giantsWin;
                var redSoxWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // yankees
                    if (fullIndex[i].team.id === 25) {
                        yankeesWin = fullIndex[i].games.win.total
                    }

                    // redSox
                    if (fullIndex[i].team.id === 5) {
                        redSoxWin = fullIndex[i].games.win.total
                    }

                    // giants
                    if (fullIndex[i].team.id === 31) {
                        giantsWin = fullIndex[i].games.win.total
                    }

                }

                var eresTotal = yankeesWin + redSoxWin + giantsWin;
                this.setState({ eresMLB: eresTotal });

                // DJ here
                var brewersWin;
                var rockiesWin;
                var oriolesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    //brewers
                    if (fullIndex[i].team.id === 20) {
                        brewersWin = fullIndex[i].games.win.total
                    }

                    // orioles
                    if (fullIndex[i].team.id === 4) {
                        oriolesWin = fullIndex[i].games.win.total
                    }

                    // rockies
                    if (fullIndex[i].team.id === 10) {
                        rockiesWin = fullIndex[i].games.win.total
                    }

                }
                var djTotal = brewersWin + oriolesWin + rockiesWin;
                this.setState({ djMLB: djTotal });

                // Goose MLB 
                var angelsWin;
                var metsWin;
                var twinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // angels
                    if (fullIndex[i].team.id === 17) {
                        angelsWin = fullIndex[i].games.win.total
                    }

                    // twins
                    if (fullIndex[i].team.id === 22) {
                        twinsWin = fullIndex[i].games.win.total
                    }

                    // mets
                    if (fullIndex[i].team.id === 24) {
                        metsWin = fullIndex[i].games.win.total
                    }

                }
                var gooseTotal = angelsWin + twinsWin + metsWin;
                this.setState({ gooseMLB: gooseTotal });

                // James MLB here
                var astrosWin;
                var cardinalsWin;
                var philliesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // astros
                    if (fullIndex[i].team.id === 15) {
                        astrosWin = fullIndex[i].games.win.total
                    }

                    // phillies
                    if (fullIndex[i].team.id === 27) {
                        philliesWin = fullIndex[i].games.win.total
                    }

                    // cardinals
                    if (fullIndex[i].team.id === 33) {
                        cardinalsWin = fullIndex[i].games.win.total
                    }

                }
                var jamesTotal = astrosWin + philliesWin + cardinalsWin;
                this.setState({ jamesMLB: jamesTotal });

                // Joe MLB 
                var padresWin;
                var marinersWin;
                var royalsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // padres
                    if (fullIndex[i].team.id === 30) {
                        padresWin = fullIndex[i].games.win.total
                    }

                    // royals
                    if (fullIndex[i].team.id === 16) {
                        royalsWin = fullIndex[i].games.win.total
                    }

                    // mariners
                    if (fullIndex[i].team.id === 32) {
                        marinersWin = fullIndex[i].games.win.total
                    }

                }
                var joeTotal = padresWin + royalsWin + marinersWin;
                this.setState({ joeMLB: joeTotal });

                // Neptune MLB 
                var cubsWin;
                var rangersWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // cubs
                    if (fullIndex[i].team.id === 6) {
                        cubsWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                    // rangers
                    if (fullIndex[i].team.id === 35) {
                        rangersWin = fullIndex[i].games.win.total
                    }

                }
                var neptuneTotal = cubsWin + piratesWin + rangersWin;
                this.setState({ neptuneMLB: neptuneTotal });

                // Steids MLB 
                var dodgersWin;
                var nationalsWin;
                var dBacksWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // dodgers
                    if (fullIndex[i].team.id === 18) {
                        dodgersWin = fullIndex[i].games.win.total
                    }

                    // dBacks
                    if (fullIndex[i].team.id === 2) {
                        dBacksWin = fullIndex[i].games.win.total
                    }

                    // nationals
                    if (fullIndex[i].team.id === 37) {
                        nationalsWin = fullIndex[i].games.win.total
                    }

                }
                var steidsTotal = dodgersWin + dBacksWin + nationalsWin;
                this.setState({ steidsMLB: steidsTotal });

                // Tommy MLB 
                var raysWin;
                var whiteSoxWin;
                var bravesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // rays
                    if (fullIndex[i].team.id === 34) {
                        raysWin = fullIndex[i].games.win.total
                    }

                    // braves
                    if (fullIndex[i].team.id === 3) {
                        bravesWin = fullIndex[i].games.win.total
                    }

                    // whiteSox
                    if (fullIndex[i].team.id === 7) {
                        whiteSoxWin = fullIndex[i].games.win.total
                    }

                }
                var totalTom = raysWin + bravesWin + whiteSoxWin;
                this.setState({ tomMLB: totalTom });
            });
    };

    // Going to put NHL Here
    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // NHL FOR TOM 
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                // Al NHL here 
                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var knightsWins;
                var knightsOTLS;
                var knightsTotal;
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var alNHL;

                // Here is the lightning loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // lightning
                    if (atlanticResults[i].team.id === 14) {
                        lightningWins = atlanticResults[i].leagueRecord.wins;
                        lightningOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(lightningWins);
                        console.log(lightningOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // canucks
                    if (pacificResults[i].team.id === 23) {
                        canucksWins = pacificResults[i].leagueRecord.wins;
                        canucksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(canucksWins);
                        console.log(canucksOTLS);
                        console.log("this loop is running")
                    }

                    // knights
                    if (pacificResults[i].team.id === 54) {
                        knightsWins = pacificResults[i].leagueRecord.wins;
                        knightsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(knightsWins);
                        console.log(knightsOTLS);
                        console.log("this loop is running")
                    }
                }

                // lightning total
                lightningTotal = (lightningWins * 2) + lightningOTLS;
                console.log(lightningTotal);

                // knights total
                knightsTotal = (knightsWins * 2) + knightsOTLS;
                console.log(knightsTotal)

                // canucks total
                canucksTotal = (canucksWins * 2) + canucksOTLS;
                console.log(canucksTotal);

                var totalAlNHL = lightningTotal + knightsTotal + canucksTotal

                var capsWins;
                var capsOTLS;
                var capsTotal;
                var canesWins;
                var canesOTLS;
                var canesTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var allNHL;

                // Here is the caps loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // caps
                    if (metroResults[i].team.id === 15) {
                        capsWins = metroResults[i].leagueRecord.wins;
                        capsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(capsWins);
                        console.log(capsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // blackhawks
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        console.log(blackhawksWins);
                        console.log(blackhawksOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // canes
                    if (metroResults[i].team.id === 12) {
                        canesWins = metroResults[i].leagueRecord.wins;
                        canesOTLS = metroResults[i].leagueRecord.ot;
                        console.log(canesWins);
                        console.log(canesOTLS);
                        console.log("this loop is running")
                    }
                }

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal);

                // canes total
                canesTotal = (canesWins * 2) + canesOTLS;
                console.log(canesTotal)

                // blackhawks total
                blackhawksTotal = (blackhawksWins * 2) + blackhawksOTLS;
                console.log(blackhawksTotal);

                var totalEresNHL = capsTotal + canesTotal + blackhawksTotal;

                // Start of DJ NHL

                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var pensWins;
                var pensOTLS;
                var pensTotal;
                var krakensWins;
                var krakensOTLS;
                var krakensTotal;
                var allNHL;

                // Here is the bruins loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // krakens
                    if (pacificResults[i].team.id === 55) {
                        krakensWins = pacificResults[i].leagueRecord.wins;
                        krakensOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(krakensWins);
                        console.log(krakensOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // pens
                    if (metroResults[i].team.id === 5) {
                        pensWins = metroResults[i].leagueRecord.wins;
                        pensOTLS = metroResults[i].leagueRecord.ot;
                        console.log(pensWins);
                        console.log(pensOTLS);
                        console.log("this loop is running")
                    }
                }

                // pens total
                pensTotal = (pensWins * 2) + pensOTLS;
                console.log(pensTotal)

                // krakens total
                krakensTotal = (krakensWins * 2) + krakensOTLS;
                console.log(krakensTotal);

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal);

                var totaldjNHL = bruinsTotal + pensTotal + krakensTotal

                // Goose NHL here

                var islandersWins;
                var islandersOTLS;
                var islandersTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var ducksWins;
                var ducksOTLS;
                var ducksTotal;
                var allNHL;

                // Here is the islanders and devils loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // islanders
                    if (metroResults[i].team.id === 2) {
                        islandersWins = metroResults[i].leagueRecord.wins;
                        islandersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(islandersWins);
                        console.log(islandersOTLS);
                        console.log("this loop is running")
                    }

                    // devils
                    if (metroResults[i].team.id === 1) {
                        devilsWins = metroResults[i].leagueRecord.wins;
                        devilsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(devilsWins);
                        console.log(devilsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // ducks
                    if (pacificResults[i].team.id === 24) {
                        ducksWins = pacificResults[i].leagueRecord.wins;
                        ducksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(ducksWins);
                        console.log(ducksOTLS);
                        console.log("this loop is running")
                    }
                }

                // islanders total
                islandersTotal = (islandersWins * 2) + islandersOTLS;
                console.log(islandersTotal);

                // devils total
                devilsTotal = (devilsWins * 2) + devilsOTLS;
                console.log(devilsTotal)

                // ducks total
                ducksTotal = (ducksWins * 2) + ducksOTLS;
                console.log(ducksTotal);

                var totalGooseNHL = islandersTotal + devilsTotal + ducksTotal

                // James NHL here

                var flamesWins;
                var flamesOTLS;
                var flamesTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var starsWins;
                var starsOTLS;
                var starsTotal;
                var allNHL;

                // Here is the flames loop. 
                for (var i = 0; i < pacificResults.length; i++) {
                    // flames
                    if (pacificResults[i].team.id === 20) {
                        flamesWins = pacificResults[i].leagueRecord.wins;
                        flamesOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(flamesWins);
                        console.log(flamesOTLS);
                        console.log("this loop is running")
                    }
                }


                // Here is the loop for the panthers
                for (var i = 0; i < atlanticResults.length; i++) {

                    // panthers
                    if (atlanticResults[i].team.id === 13) {
                        panthersWins = atlanticResults[i].leagueRecord.wins;
                        panthersOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(starsWins);
                        console.log(starsOTLS);
                        console.log("this loop is running")
                    }
                }

                // panthers total
                panthersTotal = (panthersWins * 2) + panthersOTLS;
                console.log(panthersTotal)

                // stars total
                starsTotal = (starsWins * 2) + starsOTLS;
                console.log(starsTotal);

                // flames total
                flamesTotal = (flamesWins * 2) + flamesOTLS;
                console.log(flamesTotal);

                var totalJamesNHL = flamesTotal + panthersTotal + starsTotal

                // Joe NHL here

                var bluesWins;
                var bluesOTLS;
                var bluesTotal;
                var kingsWins;
                var kingsOTLS;
                var kingsTotal;
                var redWingsWins;
                var redWingsOTLS;
                var redWingsTotal;
                var allNHL;

                // Here is the blues loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // blues
                    if (centralResults[i].team.id === 19) {
                        bluesWins = centralResults[i].leagueRecord.wins;
                        bluesOTLS = centralResults[i].leagueRecord.ot;
                        console.log(bluesWins);
                        console.log(bluesOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the kings
                for (var i = 0; i < pacificResults.length; i++) {

                    // kings
                    if (pacificResults[i].team.id === 26) {
                        kingsWins = pacificResults[i].leagueRecord.wins;
                        kingsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(kingsWins);
                        console.log(kingsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < atlanticResults.length; i++) {

                    // red wings
                    if (atlanticResults[i].team.id === 17) {
                        redWingsWins = atlanticResults[i].leagueRecord.wins;
                        redWingsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(redWingsWins);
                        console.log(redWingsOTLS);
                        console.log("this loop is running")
                    }

                }

                // blues total
                bluesTotal = (bluesWins * 2) + bluesOTLS;
                console.log(bluesTotal);

                // kings total
                kingsTotal = (kingsWins * 2) + kingsOTLS;
                console.log(kingsTotal)

                // redWings total
                redWingsTotal = (redWingsWins * 2) + redWingsOTLS;
                console.log(redWingsTotal);

                var totalJoeNHL = bluesTotal + kingsTotal + redWingsTotal

                // Neptune NHL 

                var wildWins;
                var wildOTLS;
                var wildTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var jetsWins;
                var jetsOTLS;
                var jetsTotal;
                var allNHL;

                // Here is the wild loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        console.log(wildWins);
                        console.log(wildOTLS);
                        console.log("this loop is running")
                    }

                    // jets
                    if (centralResults[i].team.id === 52) {
                        jetsWins = centralResults[i].leagueRecord.wins;
                        jetsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(jetsWins);
                        console.log(jetsOTLS);
                        console.log("this loop is running")
                    }

                }

                // Here is the loop for the wild
                for (var i = 0; i < metroResults.length; i++) {

                    // rangers
                    if (metroResults[i].team.id === 3) {
                        rangersWins = metroResults[i].leagueRecord.wins;
                        rangersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(rangersWins);
                        console.log(rangersOTLS);
                        console.log("this loop is running")
                    }
                }

                // rangers total
                rangersTotal = (rangersWins * 2) + rangersOTLS;
                console.log(rangersTotal);

                // wild total
                wildTotal = (wildWins * 2) + wildOTLS;
                console.log(wildTotal);

                // rangers total
                jetsTotal = (jetsWins * 2) + jetsOTLS;
                console.log(jetsTotal);

                var totalNeptuneNHL = wildTotal + rangersTotal + jetsTotal

                // Patrick NHL 

                var oilersWins;
                var oilersOTLS;
                var oilersTotal;
                var predatorsWins;
                var predatorsOTLS;
                var predatorsTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var allNHL;

                // Here is the predators/kings for loop. 
                for (var i = 0; i < pacificResults.length; i++) {

                    // oilers
                    if (pacificResults[i].team.id === 22) {
                        oilersWins = metroResults[i].leagueRecord.wins;
                        oilersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(oilersWins);
                        console.log(oilersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // predators
                    if (centralResults[i].team.id === 18) {
                        predatorsWins = centralResults[i].leagueRecord.wins;
                        predatorsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(predatorsWins);
                        console.log(predatorsOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the oilers
                for (var i = 0; i < atlanticResults.length; i++) {

                    // oilers
                    if (atlanticResults[i].team.id === 8) {
                        canadiansWins = atlanticResults[i].leagueRecord.wins;
                        canadiansOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(canadiansWins);
                        console.log(canadiansOTLS);
                        console.log("this loop is running")
                    }
                }

                // predators total
                predatorsTotal = (predatorsWins * 2) + predatorsOTLS;
                console.log(predatorsTotal)

                // oilers total
                oilersTotal = (oilersWins * 2) + oilersOTLS;
                console.log(oilersTotal);

                // predators total
                canadiansTotal = (canadiansWins * 2) + canadiansOTLS;
                console.log(canadiansTotal);

                var totalPatNHL = oilersTotal + predatorsTotal + canadiansTotal

                // Steids NHL 

                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var jacketsWins;
                var jacketsOTLS;
                var jacketsTotal;
                var allNHL;

                // Here is the avalanche for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        console.log(avalancheWins);
                        console.log(avalancheOTLS);
                        console.log("this loop is running")
                    }

                }

                for (var i = 0; i < atlanticResults.length; i++) {
                    // jackets
                    if (atlanticResults[i].team.id === 10) {
                        leafsWins = atlanticResults[i].leagueRecord.wins;
                        leafsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(leafsWins);
                        console.log(leafsOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the jackets
                for (var i = 0; i < metroResults.length; i++) {

                    // avalanche
                    if (metroResults[i].team.id === 29) {
                        jacketsWins = metroResults[i].leagueRecord.wins;
                        jacketsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(jacketsWins);
                        console.log(jacketsOTLS);
                        console.log("this loop is running")
                    }
                }

                // avalanche total
                avalancheTotal = (avalancheWins * 2) + avalancheOTLS;
                console.log(avalancheTotal);

                // leafs total
                leafsTotal = (leafsWins * 2) + leafsOTLS;
                console.log(leafsTotal)

                // jackets total
                jacketsTotal = (jacketsWins * 2) + jacketsOTLS;
                console.log(jacketsTotal);

                var totalSteidsNHL = avalancheTotal + jacketsTotal + leafsTotal

                // Tom NHL here 

                var flyersWins;
                var flyersOTLS;
                var flyersTotal;
                var sharksWins;
                var sharksOTLS;
                var sharksTotal;
                var senatorsWins;
                var senatorsOTLS;
                var senatorsTotal;
                var totalNHL;

                // Here is the flyers for loop. 
                for (var i = 0; i < metroResults.length; i++) {

                    if (metroResults[i].team.id === 4) {
                        flyersWins = metroResults[i].leagueRecord.wins;
                        flyersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(flyersWins);
                        console.log(flyersOTLS);
                        console.log("this loop is running")
                    }
                }
                // sharks total
                flyersTotal = (flyersWins * 2) + flyersOTLS;
                console.log(flyersTotal)

                // Here is the loop for the senators and flyers, who are in the same division. 
                for (var i = 0; i < pacificResults.length; i++) {

                    // sharks
                    if (pacificResults[i].team.id === 28) {
                        sharksWins = pacificResults[i].leagueRecord.wins;
                        sharksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(sharksWins);
                        console.log(sharksOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the flyers for loop. 
                for (var i = 0; i < metroResults.length; i++) {

                    // senators
                    if (atlanticResults[i].team.id === 9) {
                        senatorsWins = atlanticResults[i].leagueRecord.wins;
                        senatorsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(senatorsWins);
                        console.log(senatorsOTLS);
                        console.log("this loop is running")
                    }
                }
                // flyers total
                flyersTotal = (flyersWins * 2) + flyersOTLS;
                console.log(flyersTotal)

                // sharks total
                sharksTotal = (sharksWins * 2) + sharksOTLS;
                console.log(sharksTotal);

                // senators total
                senatorsTotal = (senatorsWins * 2) + senatorsOTLS;
                console.log(senatorsTotal);

                var totalTomNHL = flyersTotal + senatorsTotal + sharksTotal


                this.setState({ alNHL: totalAlNHL });
                this.setState({ eresNHL: totalEresNHL });
                this.setState({ djNHL: totaldjNHL });
                this.setState({ gooseNHL: totalGooseNHL });
                this.setState({ jamesNHL: totalJamesNHL });
                this.setState({ joeNHL: totalJoeNHL });
                this.setState({ neptuneNHL: totalNeptuneNHL });
                this.setState({ patNHL: totalPatNHL });
                this.setState({ steidsNHL: totalSteidsNHL });
                this.setState({ tomNHL: totalTomNHL });

                // and now I need to run the totalscore function to grab all of these inputs. 
                this.totalScores();
            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR TOMMY. 
                // HERE ARE EPL TEAMS FOR TOMMY. 
                //  arsenal
                console.log(res.data.response[0].league.standings[0])
                var arsenalWin;
                var arsenalTie;
                var wolvesWin;
                var wolvesTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 42) {
                        arsenalWin = forLoopArray[i].all.win
                        arsenalTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + arsenalWin);
                        console.log("here are the ties" + arsenalTie);
                    }

                    if (forLoopArray[i].team.id === 39) {
                        wolvesWin = forLoopArray[i].all.win
                        wolvesTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + wolvesWin);
                        console.log("here are the ties" + wolvesTie);
                    }
                }

                var arsenalTotal = (arsenalWin * 4.25) + (arsenalTie);
                var wolvesTotal = (wolvesWin * 4.25) + (wolvesTie);

                // Here is the final result
                var tomPoints = arsenalTotal + wolvesTotal;
                this.setState({ tomEPL: tomPoints });

                // HERE ARE EPL TEAMS FOR Patrick. 
                //   Starting Patrick EPL Here 
                var manCityWin;
                var manCityTie;
                var wolvesWin;
                var wolvesTie;

                // Steids EPL here
                var westHamWin;
                var westHamTie;
                var burnleyWin;
                var burnleyTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 48) {
                        westHamWin = forLoopArray[i].all.win
                        westHamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + westHamWin);
                        console.log("here are the ties" + westHamTie);
                    }

                    if (forLoopArray[i].team.id === 44) {
                        burnleyWin = forLoopArray[i].all.win
                        burnleyTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + burnleyWin);
                        console.log("here are the ties" + burnleyTie);
                    }
                }

                var westHamTotal = (westHamWin * 4.25) + (westHamTie);
                var burnleyTotal = (burnleyWin * 4.25) + (burnleyTie);

                // Here is the final result
                var steidsPoints = westHamTotal + burnleyTotal;
                this.setState({ steidsEPL: steidsPoints });

                // Patrick EPL here
                var tottenhamWin;
                var tottenhamTie;
                var evertonWin;
                var evertonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 47) {
                        tottenhamWin = forLoopArray[i].all.win
                        tottenhamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + tottenhamWin);
                        console.log("here are the ties" + tottenhamTie);
                    }

                    if (forLoopArray[i].team.id === 45) {
                        evertonWin = forLoopArray[i].all.win
                        evertonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + evertonWin);
                        console.log("here are the ties" + evertonTie);
                    }
                }

                var tottenhamTotal = (tottenhamWin * 4.25) + (tottenhamTie);
                var evertonTotal = (evertonWin * 4.25) + (evertonTie);

                // Here is the final result
                var patPoints = tottenhamTotal + evertonTotal;
                this.setState({ patEPL: patPoints });

                //   Starting Neptune EPL Here 
                var chelseaWin;
                var chelseaTie;
                var watfordWin;
                var watfordTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 49) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + chelseaWin);
                        console.log("here are the ties" + chelseaTie);
                    }

                    if (forLoopArray[i].team.id === 38) {
                        watfordWin = forLoopArray[i].all.win
                        watfordTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + watfordWin);
                        console.log("here are the ties" + watfordTie);
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var watfordTotal = (watfordWin * 4.25) + (watfordTie);

                // Here is the final result
                var neptunePoints = chelseaTotal + watfordTotal;
                this.setState({ neptuneEPL: neptunePoints });

                // Joe EPL here

                var brentfordWin;
                var brentfordTie;
                var southhamptonWin;
                var southhamptonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 55) {
                        brentfordWin = forLoopArray[i].all.win
                        brentfordTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + brentfordWin);
                        console.log("here are the ties" + brentfordTie);
                    }

                    if (forLoopArray[i].team.id === 41) {
                        southhamptonWin = forLoopArray[i].all.win
                        southhamptonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + southhamptonWin);
                        console.log("here are the ties" + southhamptonTie);
                    }
                }

                var brentfordTotal = (brentfordWin * 4.25) + (brentfordTie);
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie);

                // Here is the final result
                var joePoints = brentfordTotal + southhamptonTotal;
                this.setState({ joeEPL: joePoints });

                // James EPL here
                var manUWin;
                var manUTie;
                var leicesterWin;
                var leicesterTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 33) {
                        manUWin = forLoopArray[i].all.win
                        manUTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manUWin);
                        console.log("here are the ties" + manUTie);
                    }

                    if (forLoopArray[i].team.id === 46) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leicesterWin);
                        console.log("here are the ties" + leicesterTie);
                    }
                }

                var manUTotal = (manUWin * 4.25) + (manUTie);
                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);

                // Here is the final result
                var jamesPoints = manUTotal + leicesterTotal;
                this.setState({ jamesEPL: jamesPoints });

                // Goose EPL here
                var crystalWin;
                var crystalTie;
                var newcastleWin;
                var newcastleTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 52) {
                        crystalWin = forLoopArray[i].all.win
                        crystalTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + crystalWin);
                        console.log("here are the ties" + crystalTie);
                    }

                    if (forLoopArray[i].team.id === 34) {
                        newcastleWin = forLoopArray[i].all.win
                        newcastleTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + newcastleWin);
                        console.log("here are the ties" + newcastleTie);
                    }
                }

                var crystalTotal = (crystalWin * 4.25) + (crystalTie);
                var newcastleTotal = (newcastleWin * 4.25) + (newcastleTie);

                // Here is the final result
                var goosePoints = crystalTotal + newcastleTotal;
                this.setState({ gooseEPL: goosePoints });

                // HERE ARE EPL TEAMS FOR DJ. 
                var brightonWin;
                var brightonTie;
                var astonVWin;
                var astonVTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 51) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + brightonWin);
                        console.log("here are the ties" + brightonTie);
                    }

                    if (forLoopArray[i].team.id === 66) {
                        astonVWin = forLoopArray[i].all.win
                        astonVTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + astonVWin);
                        console.log("here are the ties" + astonVTie);
                    }
                }

                var brightonTotal = (brightonWin * 4.25) + (brightonTie);
                var astonVTotal = (astonVWin * 4.25) + (astonVTie);

                // Here is the final result
                var djPoints = brightonTotal + astonVTotal;
                this.setState({ djEPL: djPoints });

                // Mark Eres EPL here
                var manCityWin;
                var manCityTie;
                var norwichWin;
                var norwichTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manCityWin);
                        console.log("here are the ties" + manCityTie);
                    }

                    if (forLoopArray[i].team.id === 71) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + norwichWin);
                        console.log("here are the ties" + norwichTie);
                    }
                }

                var manCityTotal = (manCityWin * 4.25) + (manCityTie);
                var norwichTotal = (norwichWin * 4.25) + (norwichTie);

                // Here is the final result
                var eresPoints = manCityTotal + norwichTotal;
                this.setState({ eresEPL: eresPoints });

                // Al EPL here
                var leedsWin;
                var leedsTie;
                var liverpoolWin;
                var liverpoolTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 63) {
                        leedsWin = forLoopArray[i].all.win
                        leedsTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leedsWin);
                        console.log("here are the ties" + leedsTie);
                    }

                    if (forLoopArray[i].team.id === 40) {
                        liverpoolWin = forLoopArray[i].all.win
                        liverpoolTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + liverpoolWin);
                        console.log("here are the ties" + liverpoolTie);
                    }
                }

                var leedsTotal = (leedsWin * 4.25) + (leedsTie);
                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);

                // Here is the final result
                var alPoints = leedsTotal + liverpoolTotal;
                this.setState({ alEPL: alPoints });

                // And now I need to run the totalscores function so that it can get logged. 
                this.totalScores();

            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY. 
                var mavsWin = res.data.api.standings[17].win;
                var blazersWin = res.data.api.standings[28].win;
                var spursWin = res.data.api.standings[18].win;

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(mavsWin);
                tempTomNBA.push(blazersWin);
                tempTomNBA.push(spursWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                // console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });

                // PATRICK
                var sunsWin = res.data.api.standings[22].win;
                var hornetsWin = res.data.api.standings[1].win;
                var kingsWin = res.data.api.standings[21].win;

                const tempPatrickNBA = [];

                tempPatrickNBA.push(sunsWin);
                tempPatrickNBA.push(hornetsWin);
                tempPatrickNBA.push(kingsWin);

                var patDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < patDoubledScores.length; i++) {
                    PatrickPoints += patDoubledScores[i];
                }
                // console.log(PatrickPoints);
                this.setState({ patrickNBA: PatrickPoints });

                // James
                var lakersWin = res.data.api.standings[24].win;
                var pacersWin = res.data.api.standings[13].win;
                var thunderWin = res.data.api.standings[29].win;

                const tempJamesNBA = [];

                tempJamesNBA.push(lakersWin);
                tempJamesNBA.push(pacersWin);
                tempJamesNBA.push(thunderWin);

                var jamesDoubledScores = tempJamesNBA.map(team => team * 2);

                var jamesPoints = 0;

                for (var i = 0; i < jamesDoubledScores.length; i++) {
                    jamesPoints += jamesDoubledScores[i];
                }
                // console.log(jamesPoints);
                this.setState({ jamesNBA: jamesPoints });

                // Neptune
                var jazzWin = res.data.api.standings[25].win;
                var celticsWin = res.data.api.standings[9].win;
                var wizardsWin = res.data.api.standings[0].win;

                const tempNeptuneNBA = [];

                tempNeptuneNBA.push(jazzWin);
                tempNeptuneNBA.push(celticsWin);
                tempNeptuneNBA.push(wizardsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                // console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });

                // DJ
                var bucksWin = res.data.api.standings[11].win;
                var grizzliesWin = res.data.api.standings[15].win;
                var pistonsWin = res.data.api.standings[14].win;

                const tempdjNBA = [];

                tempdjNBA.push(bucksWin);
                tempdjNBA.push(grizzliesWin);
                tempdjNBA.push(pistonsWin);

                var DJDoubledScores = tempdjNBA.map(team => team * 2);

                var DJPoints = 0;

                for (var i = 0; i < DJDoubledScores.length; i++) {
                    DJPoints += DJDoubledScores[i];
                }
                // console.log(DJPoints);
                this.setState({ djNBA: DJPoints });

                // Goose
                var nuggetsWin = res.data.api.standings[27].win;
                var bullsWin = res.data.api.standings[10].win;
                var knicksWin = res.data.api.standings[5].win;

                const tempGooseNBA = [];

                tempGooseNBA.push(nuggetsWin);
                tempGooseNBA.push(bullsWin);
                tempGooseNBA.push(knicksWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                // console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });

                // Al
                var sixersWin = res.data.api.standings[7].win;
                var pelicansWin = res.data.api.standings[19].win;
                var cavaliersWin = res.data.api.standings[12].win;

                const tempAlNBA = [];

                tempAlNBA.push(sixersWin);
                tempAlNBA.push(pelicansWin);
                tempAlNBA.push(cavaliersWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                // console.log(AlPoints);
                this.setState({ alNBA: AlPoints });

                // Joe
                var netsWin = res.data.api.standings[6].win;
                var warriorsWin = res.data.api.standings[20].win;
                var heatWin = res.data.api.standings[2].win;

                const tempjoeNBA = [];

                tempjoeNBA.push(netsWin);
                tempjoeNBA.push(warriorsWin);
                tempjoeNBA.push(heatWin);

                var JoeDoubledScores = tempjoeNBA.map(team => team * 2);

                var JoePoints = 0;

                for (var i = 0; i < JoeDoubledScores.length; i++) {
                    JoePoints += JoeDoubledScores[i];
                }
                // console.log(JoePoints);
                this.setState({ joeNBA: JoePoints });

                // Steids
                var hawksWin = res.data.api.standings[3].win;
                var raptorsWin = res.data.api.standings[8].win;
                var tWolvesWin = res.data.api.standings[26].win;

                const tempsteidsNBA = [];

                tempsteidsNBA.push(hawksWin);
                tempsteidsNBA.push(raptorsWin);
                tempsteidsNBA.push(tWolvesWin);

                var SteidsDoubledScores = tempsteidsNBA.map(team => team * 2);

                var SteidsPoints = 0;

                for (var i = 0; i < SteidsDoubledScores.length; i++) {
                    SteidsPoints += SteidsDoubledScores[i];
                }
                // console.log(SteidsPoints);
                this.setState({ steidsNBA: SteidsPoints });

                // Ben
                var clippersWin = res.data.api.standings[23].win;
                var magicWin = res.data.api.standings[4].win;
                var rocketsWin = res.data.api.standings[16].win;

                const tempbenNBA = [];

                tempbenNBA.push(clippersWin);
                tempbenNBA.push(magicWin);
                tempbenNBA.push(rocketsWin);

                var BenDoubledScores = tempbenNBA.map(team => team * 2);

                var BenPoints = 0;

                for (var i = 0; i < BenDoubledScores.length; i++) {
                    BenPoints += BenDoubledScores[i];
                }
                // console.log(BenPoints);
                this.setState({ benNBA: BenPoints });
                this.totalScores();
            })
            .catch(error => {
                console.log(error)
            });
    }


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.

        return (

            <div>
                {this.datatablePage()}
            </div>
        )
    }
}

// Let's export the table.
export default Table; 
