import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./Table.css";
import API from "../../utils/API";
// import totalNFL from '../../pages/teamPages/al';
// import al from '../../pages/teamPages/al';

// This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 
class Table extends Component {
    //since we are extending class Table so we have to use super in order to override Component class constructor
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        patNBA: "",
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
        benEPL: "",
        // Putting NFL results here, even though I actually don't need to dynamically render them right now.
        allNFL: [],
        tomNFL: "",
        patNFL: "",
        jamesNFL: "",
        neptuneNFL: "",
        djNFL: "",
        gooseNFL: "",
        alNFL: "",
        joeNFL: "",
        steidsNFL: "",
        benNFL: "",
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
        benNHL: "",

        // PGA Numbers here. 
        tomPGA: "",
        patPGA: "",
        jamesPGA: "",
        neptunePGA: "",
        djPGA: "",
        goosePGA: "",
        alPGA: "",
        joePGA: "",
        steidsPGA: "",
        eresPGA: "",

        // Gambling points here: 
        tomGamble: 190,
        patGamble: 207.5,
        jamesGamble: 215,
        neptuneGamble: 180,
        djGamble: 210,
        gooseGamble: 178,
        alGamble: 171.5,
        joeGamble: 208,
        steidsGamble: 215,
        eresGamble: 225,

        // MLB Points here:
        tomMLB: "",
        patMLB: "",
        jamesMLB: "",
        neptuneMLB: "",
        djMLB: "",
        gooseMLB: "",
        alMLB: "",
        joeMLB: "",
        steidsMLB: "",
        benMLB: "",

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
                    width: 125
                },
                {
                    label: 'EPL',
                    field: 'epl',
                    sort: 'val',
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
                    label: 'Golf',
                    field: 'pga',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Bonus',
                    field: 'bonus',
                    sort: 'asc',
                    width: 100
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
                    team: 'Bommy',
                    epl: this.state.tomEPL,
                    nfl: this.state.tomNFL,
                    nba: this.state.tomNBA,
                    nhl: this.state.tomNHL,
                    mlb: this.state.tomMLB,
                    pga: this.state.tomPGA,
                    bonus: this.state.tomGamble,
                    total: this.state.tomTotal
                },
                {
                    team: 'JP/Pat',
                    epl: this.state.patEPL,
                    nfl: this.state.patNFL,
                    nba: this.state.patNBA,
                    nhl: this.state.patNHL,
                    mlb: this.state.patMLB,
                    pga: this.state.patPGA,
                    bonus: this.state.patGamble,
                    total: this.state.patTotal
                },
                {
                    team: 'James',
                    epl: this.state.jamesEPL,
                    nfl: this.state.jamesNFL,
                    nba: this.state.jamesNBA,
                    nhl: this.state.jamesNHL,
                    mlb: this.state.jamesMLB,
                    pga: this.state.jamesPGA,
                    bonus: this.state.jamesGamble,
                    total: this.state.jamesTotal
                },
                {
                    team: 'Goose',
                    epl: this.state.gooseEPL,
                    nfl: this.state.gooseNFL,
                    nba: this.state.gooseNBA,
                    nhl: this.state.gooseNHL,
                    mlb: this.state.gooseMLB,
                    pga: this.state.goosePGA,
                    bonus: this.state.gooseGamble,
                    total: this.state.gooseTotal
                },
                {
                    team: 'Neptune',
                    epl: this.state.neptuneEPL,
                    nfl: this.state.neptuneNFL,
                    nba: this.state.neptuneNBA,
                    nhl: this.state.neptuneNHL,
                    mlb: this.state.neptuneMLB,
                    pga: this.state.neptunePGA,
                    bonus: this.state.neptuneGamble,
                    total: this.state.neptuneTotal
                },
                {
                    team: 'Joe',
                    epl: this.state.joeEPL,
                    nfl: this.state.joeNFL,
                    nba: this.state.joeNBA,
                    nhl: this.state.joeNHL,
                    mlb: this.state.joeMLB,
                    pga: this.state.joePGA,
                    bonus: this.state.joeGamble,
                    total: this.state.joeTotal
                },
                {
                    team: 'Eres/JMar',
                    epl: this.state.benEPL,
                    nfl: this.state.benNFL,
                    nba: this.state.benNBA,
                    nhl: this.state.benNHL,
                    mlb: this.state.eresMLB,
                    pga: this.state.eresPGA,
                    bonus: this.state.eresGamble,
                    total: this.state.benTotal
                },
                {
                    team: 'DJ',
                    epl: this.state.djEPL,
                    nfl: this.state.djNFL,
                    nba: this.state.djNBA,
                    nhl: this.state.djNHL,
                    mlb: this.state.djMLB,
                    pga: this.state.djPGA,
                    bonus: this.state.djGamble,
                    total: this.state.djTotal
                },
                {
                    team: 'SBA',
                    epl: this.state.steidsEPL,
                    nfl: this.state.steidsNFL,
                    nba: this.state.steidsNBA,
                    nhl: this.state.steidsNHL,
                    mlb: this.state.steidsMLB,
                    pga: this.state.steidsPGA,
                    bonus: this.state.steidsGamble,
                    total: this.state.steidsTotal
                },
                {
                    team: 'Al',
                    epl: this.state.alEPL,
                    nfl: this.state.alNFL,
                    nba: this.state.alNBA,
                    nhl: this.state.alNHL,
                    mlb: this.state.alMLB,
                    pga: this.state.alPGA,
                    bonus: this.state.alGamble,
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
        // // running NHL here
        this.getScoresNHL();
        // MLB Here 
        this.getScoresMLB();
        // PGA Golf here. Gonna do it by hand for now and then potentially change it later if I can get the API to work. 
        this.getScoresPGA();
    };

    // Let's create a function to add up all the scores also. But, I need that to run at the end of all the other functions, otherwise I will just get a blank slate back. 

    totalScores = () => {

        // Totals for Tom 
        var tomTotalPoints =
            parseInt((this.state.tomNBA)) +
            parseInt((this.state.tomNHL)) +
            parseInt((this.state.tomNFL)) +
            parseInt((this.state.tomEPL)) +
            parseInt((this.state.tomMLB)) +
            parseInt((this.state.tomPGA)) +
            parseInt((this.state.tomGamble));
        this.setState({ tomTotal: tomTotalPoints });

        // Totals for Pat 
        var patTotalPoints =
            parseInt((this.state.patNBA)) +
            parseInt((this.state.patNHL)) +
            parseInt((this.state.patNFL)) +
            parseInt((this.state.patEPL)) +
            parseInt((this.state.patMLB)) +
            parseInt((this.state.patPGA)) +
            parseInt((this.state.patGamble));
        this.setState({ patTotal: patTotalPoints });

        // Totals for JAmes
        var jamesTotalPoints =
            parseInt((this.state.jamesNBA)) +
            parseInt((this.state.jamesNHL)) +
            parseInt((this.state.jamesNFL)) +
            parseInt((this.state.jamesEPL)) +
            parseInt((this.state.jamesMLB)) +
            parseInt((this.state.jamesPGA)) +
            parseInt((this.state.jamesGamble));
        this.setState({ jamesTotal: jamesTotalPoints });

        // Totals for Neptune
        var neptuneTotalPoints =
            parseInt((this.state.neptuneNBA)) +
            parseInt((this.state.neptuneNHL)) +
            parseInt((this.state.neptuneNFL)) +
            parseInt((this.state.neptuneEPL)) +
            parseInt((this.state.neptuneMLB)) +
            parseInt((this.state.neptunePGA)) +
            parseInt((this.state.neptuneGamble));;
        this.setState({ neptuneTotal: neptuneTotalPoints });

        // Totals for DJ
        var djTotalPoints =
            parseInt((this.state.djNBA)) +
            parseInt((this.state.djNHL)) +
            parseInt((this.state.djNFL)) +
            parseInt((this.state.djEPL)) +
            parseInt((this.state.djMLB)) +
            parseInt((this.state.djPGA)) +
            parseInt((this.state.djGamble));;
        this.setState({ djTotal: djTotalPoints });

        // Totals for Goose 
        var gooseTotalPoints =
            parseInt((this.state.gooseNBA)) +
            parseInt((this.state.gooseNHL)) +
            parseInt((this.state.gooseNFL)) +
            parseInt((this.state.gooseEPL)) +
            parseInt((this.state.gooseMLB)) +
            parseInt((this.state.goosePGA)) +
            parseInt((this.state.gooseGamble));
        this.setState({ gooseTotal: gooseTotalPoints });

        // Totals for Al
        var alTotalPoints =
            parseInt((this.state.alNBA)) +
            parseInt((this.state.alNHL)) +
            parseInt((this.state.alNFL)) +
            parseInt((this.state.alEPL)) +
            parseInt((this.state.alMLB)) +
            parseInt((this.state.alPGA)) +
            parseInt((this.state.alGamble));;
        this.setState({ alTotal: alTotalPoints });

        // Totals for Joe
        var joeTotalPoints =
            parseInt((this.state.joeNBA)) +
            parseInt((this.state.joeNHL)) +
            parseInt((this.state.joeNFL)) +
            parseInt((this.state.joeEPL)) +
            parseInt((this.state.joeMLB)) +
            parseInt((this.state.joePGA)) +
            parseInt((this.state.joeGamble));;
        this.setState({ joeTotal: joeTotalPoints });

        // Totals for Steids
        var steidsTotalPoints =
            parseInt((this.state.steidsNBA)) +
            parseInt((this.state.steidsNHL)) +
            parseInt((this.state.steidsNFL)) +
            parseInt((this.state.steidsEPL)) +
            parseInt((this.state.steidsMLB)) +
            parseInt((this.state.steidsPGA)) +
            parseInt((this.state.steidsGamble));;
        this.setState({ steidsTotal: steidsTotalPoints });

        // Totals for Ben
        var benTotalPoints =
            parseInt((this.state.benNBA)) +
            parseInt((this.state.benNHL)) +
            parseInt((this.state.benNFL)) +
            parseInt((this.state.benEPL)) +
            parseInt((this.state.eresMLB)) +
            parseInt((this.state.eresPGA)) +
            parseInt((this.state.eresGamble));;
        this.setState({ benTotal: benTotalPoints });
    };

    // Adding MLB Here

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];

                // Al here
                var yanksWin;
                var athleticsWin;
                var tigersWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // yanks
                    if (fullIndex[i].team.id === 25) {
                        yanksWin = fullIndex[i].games.win.total
                    }

                    // tigers
                    if (fullIndex[i].team.id === 12) {
                        tigersWin = fullIndex[i].games.win.total
                    }

                    // athletics
                    if (fullIndex[i].team.id === 26) {
                        athleticsWin = fullIndex[i].games.win.total
                    }

                }

                var alTotal = yanksWin + tigersWin + athleticsWin;
                this.setState({ alMLB: alTotal });

                // Eres Here

                var raysWin;
                var natsWin;
                var rangersWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // rays
                    if (fullIndex[i].team.id === 34) {
                        raysWin = fullIndex[i].games.win.total
                    }

                    // rangers
                    if (fullIndex[i].team.id === 35) {
                        rangersWin = fullIndex[i].games.win.total
                    }

                    // nats
                    if (fullIndex[i].team.id === 37) {
                        natsWin = fullIndex[i].games.win.total
                    }

                }

                var eresTotal = raysWin + rangersWin + natsWin;
                this.setState({ eresMLB: eresTotal });

                // DJ Here
                var padresWin;
                var philliesWin;
                var brewersWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // padres
                    if (fullIndex[i].team.id === 30) {
                        padresWin = fullIndex[i].games.win.total
                    }

                    // brewers
                    if (fullIndex[i].team.id === 20) {
                        brewersWin = fullIndex[i].games.win.total
                    }

                    // phillies
                    if (fullIndex[i].team.id === 27) {
                        philliesWin = fullIndex[i].games.win.total
                    }

                }

                var djTotal = padresWin + brewersWin + philliesWin;
                this.setState({ djMLB: djTotal });

                // Goose MLB 

                var bravesWin;
                var marinersWin;
                var cubsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // braves
                    if (fullIndex[i].team.id === 3) {
                        bravesWin = fullIndex[i].games.win.total
                    }

                    // cubs
                    if (fullIndex[i].team.id === 6) {
                        cubsWin = fullIndex[i].games.win.total
                    }

                    // mariners
                    if (fullIndex[i].team.id === 32) {
                        marinersWin = fullIndex[i].games.win.total
                    }

                }

                var gooseTotal = bravesWin + cubsWin + marinersWin;

                this.setState({ gooseMLB: gooseTotal });

                // James MLB
                var dodgersWin;
                var metsWin;
                var giantsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // dodgers
                    if (fullIndex[i].team.id === 18) {
                        dodgersWin = fullIndex[i].games.win.total
                    }

                    // giants
                    if (fullIndex[i].team.id === 31) {
                        giantsWin = fullIndex[i].games.win.total
                    }

                    // mets
                    if (fullIndex[i].team.id === 24) {
                        metsWin = fullIndex[i].games.win.total
                    }

                }

                var jamesTotal = dodgersWin + giantsWin + metsWin;
                this.setState({ jamesMLB: jamesTotal });

                // Joe MLB
                var wsoxWin;
                var indiansWin;
                var rsoxWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // wsox
                    if (fullIndex[i].team.id === 7) {
                        wsoxWin = fullIndex[i].games.win.total
                    }

                    // rsox
                    if (fullIndex[i].team.id === 5) {
                        rsoxWin = fullIndex[i].games.win.total
                    }

                    // indians
                    if (fullIndex[i].team.id === 9) {
                        indiansWin = fullIndex[i].games.win.total
                    }

                }

                var joeTotal = wsoxWin + rsoxWin + indiansWin;
                this.setState({ joeMLB: joeTotal });

                // Neptune MLB
                var cardsWin;
                var marlinsWin;
                var royalsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // cards
                    if (fullIndex[i].team.id === 33) {
                        cardsWin = fullIndex[i].games.win.total
                    }

                    // royals
                    if (fullIndex[i].team.id === 16) {
                        royalsWin = fullIndex[i].games.win.total
                    }

                    // marlins
                    if (fullIndex[i].team.id === 19) {
                        marlinsWin = fullIndex[i].games.win.total
                    }

                }

                var neptuneTotal = cardsWin + royalsWin + marlinsWin;
                this.setState({ neptuneMLB: neptuneTotal });

                // Patrick MLB
                var jaysWin;
                var dbacksWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // jays
                    if (fullIndex[i].team.id === 36) {
                        jaysWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                    // dbacks
                    if (fullIndex[i].team.id === 2) {
                        dbacksWin = fullIndex[i].games.win.total
                    }

                }

                var patTotal = jaysWin + piratesWin + dbacksWin;
                this.setState({ patMLB: patTotal });

                // Steids MLB
                var twinsWin;
                var angelsWin;
                var rockiesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // Twins
                    if (fullIndex[i].team.id === 22) {
                        twinsWin = fullIndex[i].games.win.total
                    }

                    // rockies
                    if (fullIndex[i].team.id === 10) {
                        rockiesWin = fullIndex[i].games.win.total
                    }

                    // angels
                    if (fullIndex[i].team.id === 17) {
                        angelsWin = fullIndex[i].games.win.total
                    }

                }

                var steidsTotal = twinsWin + rockiesWin + angelsWin;
                this.setState({ steidsMLB: steidsTotal });

                // Tom MLB
                var astrosWin;
                var oriolesWin;
                var redsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // Astros
                    if (fullIndex[i].team.id === 15) {
                        astrosWin = fullIndex[i].games.win.total
                    }

                    // Reds
                    if (fullIndex[i].team.id === 8) {
                        redsWin = fullIndex[i].games.win.total
                    }

                    // Orioles
                    if (fullIndex[i].team.id === 4) {
                        oriolesWin = fullIndex[i].games.win.total
                    }

                }

                var tomTotal = astrosWin + redsWin + oriolesWin;

                this.setState({ tomMLB: tomTotal });

            });
    };

    // Going to hard code this until I get the API rolling. 

    getScoresPGA = () => {
        // Tom's PGA Here. Golf Team 8. 
        var Koepka = 78
        var Matsuyama = 80
        var English = 102
        var Kokrak = 82
        var Lowry = 36
        var tomPGATotal = Koepka + Matsuyama + English + Kokrak + Lowry
        this.setState({ tomPGA: tomPGATotal });
        // console.log(tomPGATotal);

        // Pat's PGA Here. Golf Team 10. 
        var Hovland = 86
        var Wolff = 39
        var Champ = 42
        var Munoz = 37
        var Henley = 47
        var patPGATotal = Hovland + Wolff + Champ + Munoz + Henley
        this.setState({ patPGA: patPGATotal });
        // console.log(patPGATotal);

        // James's PGA Here. Golf Team 7. 
        var Cantlay = 103
        var Reed = 69
        var Fowler = 20
        var Woodland = 24
        var Mickelson = 40
        var jamesPGATotal = Cantlay + Reed + Fowler + Woodland + Mickelson
        this.setState({ jamesPGA: jamesPGATotal });
        // console.log(jamesPGATotal);

        // Neptune's PGA Here. Golf Team 3. 
        var Rahm = 100
        var Scheffler = 70
        var Spieth = 107
        var Casey = 47
        var Watson = 34
        var neptunePGATotal = Rahm + Scheffler + Spieth + Casey + Watson
        this.setState({ neptunePGA: neptunePGATotal });
        // console.log(neptunePGATotal);

        // DJ's PGA Here. Golf Team 1. 
        var Johnson = 76
        var Day = 24
        var Niemann = 75
        var Oosthuizen = 94
        var Garcia = 51
        var djPGATotal = Johnson + Day + Niemann + Oosthuizen + Garcia
        this.setState({ djPGA: djPGATotal });
        // console.log(djPGATotal);

        // Goose's PGA Here. Golf Team 5. 
        var McIlroy = 65
        var Im = 59
        var Fleetwood = 19
        var Leishman = 55
        var Horschel = 65
        var goosePGATotal = McIlroy + Im + Fleetwood + Leishman + Horschel
        this.setState({ goosePGA: goosePGATotal });
        // console.log(goosePGATotal);

        // Al's PGA Here. Golf Team 9. 
        var Morikawa = 109
        var Simpson = 46
        var Hatton = 37
        var Smith = 77
        var Conners = 61
        var alPGATotal = Morikawa + Simpson + Hatton + Smith + Conners
        this.setState({ alPGA: alPGATotal });
        // console.log(alPGATotal);

        // Joe's PGA Here. Golf Team 2. 
        var Dechambeau = 96
        var Rose = 22
        var Scott = 30
        var Kisner = 60
        var Kim = 59
        var joePGATotal = Dechambeau + Rose + Scott + Kisner + Kim
        this.setState({ joePGA: joePGATotal });
        // console.log(joePGATotal);

        // Steids's PGA Here. Golf Team 6. 
        var Schauffele = 81
        var Finau = 67
        var Woods = 1
        var Ancer = 96
        var Griffin = 30
        var steidsPGATotal = Schauffele + Finau + Woods + Ancer + Griffin
        this.setState({ steidsPGA: steidsPGATotal });
        // console.log(steidsPGATotal);

        // Eres's PGA Here. Golf Team 4. 
        var Thomas = 88
        var Berger = 72
        var Fitzpatrick = 37
        var Todd = 27
        var Kuchar = 23
        var eresPGATotal = Thomas + Berger + Fitzpatrick + Todd + Kuchar
        this.setState({ eresPGA: eresPGATotal });
        // console.log(eresPGATotal);
    };
    // This one I get to hard code because the season ended. 

    getScoresNFL = () => {
        //    Tom NFL
        var Rams = 75.2
        var Steelers = 58.6
        // Ties worth 2.2 based on the points for everything else. 
        var Dolphins = 56.4
        var TomNFL = Rams + Steelers + Dolphins
        this.setState({ tomNFL: TomNFL.toFixed(2) })
        // SteidsNFL
        var Ravens = 75.2
        var Cowboys = 75.2
        var Chargers = 65.8
        var SteidsNFL = Ravens + Cowboys + Chargers
        this.setState({ steidsNFL: SteidsNFL.toFixed(2) })
        // PatNFL
        var Saints = 47
        var Colts = 65.8
        var Fortyniners = 56.4
        var PatNFL = Saints + Colts + Fortyniners
        this.setState({ patNFL: PatNFL.toFixed(2) })
        // NeptuneNFL
        var Bills = 65.8
        var Cardinals = 94
        var Eagles = 56.4
        var NeptuneNFL = Bills + Cardinals + Eagles
        this.setState({ neptuneNFL: NeptuneNFL.toFixed(2) })
        // JoeNFL
        var Washington = 56.4
        var Falcons = 47
        var Texans = 18.8
        var JoeNFL = Washington + Falcons + Texans
        this.setState({ joeNFL: JoeNFL.toFixed(2) })
        // JamesNFL
        var nyGiants = 37.6
        var Broncos= 56.4
        var Vikings = 56.4
        var JamesNFL = nyGiants + Broncos+ Vikings
        this.setState({ jamesNFL: JamesNFL.toFixed(2) })
        // GooseNFL
        var Chiefs = 75.2
        var Seahawks= 37.6
        var Bucs = 84.6
        var GooseNFL = Chiefs + Seahawks+ Bucs
        this.setState({ gooseNFL: GooseNFL.toFixed(2) })
        // DjNFL
        var Patriots = 84.6
        var Raiders= 56.4
        var Bengals = 65.8
        var DjNFL = Patriots + Raiders+ Bengals
        this.setState({ djNFL: DjNFL.toFixed(2) })
        // EresNFL
        var Packers = 84.6
        var Titans = 75.2
        var Bears= 37.6
        var EresNFL = Packers + Titans+ Bears
        this.setState({ benNFL: EresNFL.toFixed(2) })
        // AlNFL
        var Browns = 56.4
        var Panthers = 47
        var Lions = 11.6
        var AlNFL = Browns + Panthers + Lions
        this.setState({ alNFL: AlNFL.toFixed(2) })
    };

    // Going to put NHL Here
    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // NHL FOR TOM. Let's try and create this properly for 2021.The Divisions got changed for 2021, so need to change this a bit. 
                // console.log(res.data.records[0].teamRecords);
                var westResults = res.data.records[0].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

                // Weird issue caused me to have to repeat every for loop for east and north each time. The index changes each day apparently. 
                var canucksWins;
                var canadiansOTLS;
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var ducksWins;
                var ducksOTLS;
                var ducksTotal;

                // For the Canucks: 
                for (var i = 0; i < northResults.length; i++) {

                    // Canucks
                    if (northResults[i].team.id === 23) {
                        canucksWins = northResults[i].leagueRecord.wins;
                        canucksOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < eastResults.length; i++) {

                    // Canucks
                    if (eastResults[i].team.id === 23) {
                        canucksWins = eastResults[i].leagueRecord.wins;
                        canucksOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < westResults.length; i++) {

                    // Canucks
                    if (westResults[i].team.id === 23) {
                        canucksWins = westResults[i].leagueRecord.wins;
                        canucksOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < centralResults.length; i++) {

                    // Canucks
                    if (centralResults[i].team.id === 23) {
                        canucksWins = centralResults[i].leagueRecord.wins;
                        canucksOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Canadians

                for (var i = 0; i < northResults.length; i++) {

                    // canadians
                    if (northResults[i].team.id === 8) {
                        canadiansWins = northResults[i].leagueRecord.wins;
                        canadiansOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // canadians
                    if (eastResults[i].team.id === 8) {
                        canadiansWins = eastResults[i].leagueRecord.wins;
                        canadiansOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // canadians
                    if (westResults[i].team.id === 8) {
                        canadiansWins = westResults[i].leagueRecord.wins;
                        canadiansOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // canadians
                    if (centralResults[i].team.id === 8) {
                        canadiansWins = centralResults[i].leagueRecord.wins;
                        canadiansOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // ducks
                    if (westResults[i].team.id === 24) {
                        ducksWins = westResults[i].leagueRecord.wins;
                        ducksOTLS = westResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // ducks
                    if (eastResults[i].team.id === 24) {
                        ducksWins = eastResults[i].leagueRecord.wins;
                        ducksOTLS = eastResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // ducks
                    if (centralResults[i].team.id === 24) {
                        ducksWins = centralResults[i].leagueRecord.wins;
                        ducksOTLS = centralResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // ducks
                    if (northResults[i].team.id === 24) {
                        ducksWins = northResults[i].leagueRecord.wins;
                        ducksOTLS = northResults[i].leagueRecord.ot;
                    }

                }

                // canucks total
                canucksTotal = (canucksWins * 2.9) + (canucksOTLS * 1.45);
                // console.log(canucksTotal);

                // canadians total
                canadiansTotal = (canadiansWins * 2.9) + (canadiansOTLS * 1.45);
                // console.log(canadiansTotal);

                // ducks total
                ducksTotal = (ducksWins * 2.9) + (ducksOTLS * 1.45);
                //  console.log(ducksTotal);

                var allNHL = (canucksTotal + canadiansTotal + ducksTotal).toFixed(1)
                // console.log(allNHL + " Here is Tom NHL")

                this.setState({ tomNHL: 220.4 });
                this.setState({ canadians: canadiansTotal });
                this.setState({ canucks: canucksTotal });
                this.setState({ ducks: ducksTotal });


                // start of Patrick NHL: 
                var islandersWins;
                var islandersOTLS;
                var islandersTotal;
                var wildWins;
                var wildOTLS;
                var wildTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var allNHL;

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // wild
                    if (westResults[i].team.id === 30) {
                        wildWins = westResults[i].leagueRecord.wins;
                        wildOTLS = westResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // wild
                    if (eastResults[i].team.id === 30) {
                        wildWins = eastResults[i].leagueRecord.wins;
                        wildOTLS = eastResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // wild
                    if (northResults[i].team.id === 30) {
                        wildWins = northResults[i].leagueRecord.wins;
                        wildOTLS = northResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the loop for the islanders
                for (var i = 0; i < eastResults.length; i++) {

                    // islanders
                    if (eastResults[i].team.id === 2) {
                        islandersWins = eastResults[i].leagueRecord.wins;
                        islandersOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the islanders
                for (var i = 0; i < northResults.length; i++) {

                    // islanders
                    if (northResults[i].team.id === 2) {
                        islandersWins = northResults[i].leagueRecord.wins;
                        islandersOTLS = northResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // Here is the loop for the islanders
                for (var i = 0; i < westResults.length; i++) {

                    // islanders
                    if (westResults[i].team.id === 2) {
                        islandersWins = westResults[i].leagueRecord.wins;
                        islandersOTLS = westResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // Here is the loop for the islanders
                for (var i = 0; i < centralResults.length; i++) {

                    // islanders
                    if (centralResults[i].team.id === 2) {
                        islandersWins = centralResults[i].leagueRecord.wins;
                        islandersOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // blackhawks total
                for (var i = 0; i < centralResults.length; i++) {

                    // islanders
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }

                // blackhawks total
                for (var i = 0; i < westResults.length; i++) {

                    // islanders
                    if (westResults[i].team.id === 16) {
                        blackhawksWins = westResults[i].leagueRecord.wins;
                        blackhawksOTLS = westResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }


                // blackhawks total
                for (var i = 0; i < northResults.length; i++) {

                    // islanders
                    if (northResults[i].team.id === 16) {
                        blackhawksWins = northResults[i].leagueRecord.wins;
                        blackhawksOTLS = northResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }


                // blackhawks total
                for (var i = 0; i < eastResults.length; i++) {

                    // islanders
                    if (eastResults[i].team.id === 16) {
                        blackhawksWins = eastResults[i].leagueRecord.wins;
                        blackhawksOTLS = eastResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }

                // wild total
                wildTotal = (wildWins * 2.9) + (wildOTLS * 1.45);
                // console.log(wildTotal);

                // islanders total
                islandersTotal = (islandersWins * 2.9) + (islandersOTLS * 1.45);
                // console.log(islandersTotal);

                blackhawksTotal = (blackhawksWins * 2.9) + (blackhawksOTLS * 1.45);


                var allNHL = (islandersTotal + wildTotal + blackhawksTotal).toFixed(1)

                this.setState({ patNHL: 291.45 });
                this.setState({ islanders: islandersTotal });
                this.setState({ wild: wildTotal });
                this.setState({ blackhawks: blackhawksTotal });

                // Start of James NHL here
                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var pensWins;
                var pensOTLS;
                var pensTotal;
                var kingsWins;
                var kingsOTLS;
                var kingsTotal;
                var allNHL;

                // Here is the avalanche loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // avalanche
                    if (westResults[i].team.id === 21) {
                        avalancheWins = westResults[i].leagueRecord.wins;
                        avalancheOTLS = westResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the avalanche loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // avalanche
                    if (eastResults[i].team.id === 21) {
                        avalancheWins = eastResults[i].leagueRecord.wins;
                        avalancheOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the avalanche loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // avalanche
                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the avalanche loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // avalanche
                    if (northResults[i].team.id === 21) {
                        avalancheWins = northResults[i].leagueRecord.wins;
                        avalancheOTLS = northResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the pens
                for (var i = 0; i < eastResults.length; i++) {

                    // pens
                    if (eastResults[i].team.id === 5) {
                        pensWins = eastResults[i].leagueRecord.wins;
                        pensOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the pens
                for (var i = 0; i < northResults.length; i++) {

                    // pens
                    if (northResults[i].team.id === 5) {
                        pensWins = northResults[i].leagueRecord.wins;
                        pensOTLS = northResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the pens
                for (var i = 0; i < westResults.length; i++) {

                    // pens
                    if (westResults[i].team.id === 5) {
                        pensWins = westResults[i].leagueRecord.wins;
                        pensOTLS = westResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }
                // Here is the loop for the pens
                for (var i = 0; i < centralResults.length; i++) {

                    // pens
                    if (centralResults[i].team.id === 5) {
                        pensWins = centralResults[i].leagueRecord.wins;
                        pensOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }


                for (var i = 0; i < westResults.length; i++) {

                    // kings
                    if (westResults[i].team.id === 26) {
                        kingsWins = westResults[i].leagueRecord.wins;
                        kingsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // kings
                    if (eastResults[i].team.id === 26) {
                        kingsWins = eastResults[i].leagueRecord.wins;
                        kingsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                for (var i = 0; i < centralResults.length; i++) {

                    // kings
                    if (centralResults[i].team.id === 26) {
                        kingsWins = centralResults[i].leagueRecord.wins;
                        kingsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                for (var i = 0; i < northResults.length; i++) {

                    // kings
                    if (northResults[i].team.id === 26) {
                        kingsWins = northResults[i].leagueRecord.wins;
                        kingsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                // avalanche total
                avalancheTotal = (avalancheWins * 2.9) + (avalancheOTLS * 1.45);

                // pens total
                pensTotal = (pensWins * 2.9) + (pensOTLS * 1.45);
                // console.log(pensTotal)

                // kings total
                kingsTotal = (kingsWins * 2.9) + (kingsOTLS * 1.45);
                // console.log(kingsTotal);

                var allNHL = (avalancheTotal + pensTotal + kingsTotal).toFixed(1);

                this.setState({ jamesNHL: 301.6 });
                this.setState({ avalanche: avalancheTotal });
                this.setState({ pens: pensTotal });
                this.setState({ kings: kingsTotal });

                //  starting Neptune NHL here
                var starsWins;
                var starsOTLS;
                var starsTotal;
                var blueJacketsWins;
                var blueJacketsOTLS;
                var blueJacketsTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var allNHL;

                // Here is the stars loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                // Here is the stars loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // stars
                    if (eastResults[i].team.id === 25) {
                        starsWins = eastResults[i].leagueRecord.wins;
                        starsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                // Here is the stars loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // stars
                    if (westResults[i].team.id === 25) {
                        starsWins = westResults[i].leagueRecord.wins;
                        starsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                // Here is the stars loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // stars
                    if (northResults[i].team.id === 25) {
                        starsWins = northResults[i].leagueRecord.wins;
                        starsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                // Here is the loop for the blue jackets
                for (var i = 0; i < centralResults.length; i++) {

                    // blueJackets
                    if (centralResults[i].team.id === 29) {
                        blueJacketsWins = centralResults[i].leagueRecord.wins;
                        blueJacketsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the blue jackets
                for (var i = 0; i < westResults.length; i++) {

                    // blueJackets
                    if (westResults[i].team.id === 29) {
                        blueJacketsWins = westResults[i].leagueRecord.wins;
                        blueJacketsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the blue jackets
                for (var i = 0; i < northResults.length; i++) {

                    // blueJackets
                    if (northResults[i].team.id === 29) {
                        blueJacketsWins = northResults[i].leagueRecord.wins;
                        blueJacketsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the blue jackets
                for (var i = 0; i < eastResults.length; i++) {

                    // blueJackets
                    if (eastResults[i].team.id === 29) {
                        blueJacketsWins = eastResults[i].leagueRecord.wins;
                        blueJacketsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the Devils
                for (var i = 0; i < eastResults.length; i++) {
                    // devils
                    if (eastResults[i].team.id === 1) {
                        devilsWins = eastResults[i].leagueRecord.wins;
                        devilsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the Devils
                for (var i = 0; i < northResults.length; i++) {
                    // devils
                    if (northResults[i].team.id === 1) {
                        devilsWins = northResults[i].leagueRecord.wins;
                        devilsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the Devils
                for (var i = 0; i < westResults.length; i++) {
                    // devils
                    if (westResults[i].team.id === 1) {
                        devilsWins = westResults[i].leagueRecord.wins;
                        devilsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Here is the loop for the Devils
                for (var i = 0; i < centralResults.length; i++) {
                    // devils
                    if (centralResults[i].team.id === 1) {
                        devilsWins = centralResults[i].leagueRecord.wins;
                        devilsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Devils total
                devilsTotal = (devilsWins * 2.9) + (devilsOTLS * 1.45);

                // stars total
                starsTotal = (starsWins * 2.9) + (starsOTLS * 1.45);


                // blueJackets total
                blueJacketsTotal = (blueJacketsWins * 2.9) + (blueJacketsOTLS * 1.45);


                var allNHL = (starsTotal + blueJacketsTotal + devilsTotal).toFixed(1);

                this.setState({ neptuneNHL: 221.85 });
                this.setState({ stars: starsTotal });
                this.setState({ blueJackets: blueJacketsTotal });
                this.setState({ devils: devilsTotal });

                // Starting DJ NHL Here 
                var flyersWins;
                var flyersOTLS;
                var flyersTotal;
                var oilersWins;
                var oilersOTLS;
                var oilersTotal;
                var jetsWins;
                var jetsOTLS;
                var jetsTotal;
                var allNHL;

                // Here is the flyers loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // flyers
                    if (eastResults[i].team.id === 4) {
                        flyersWins = eastResults[i].leagueRecord.wins;
                        flyersOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the flyers loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // flyers
                    if (northResults[i].team.id === 4) {
                        flyersWins = northResults[i].leagueRecord.wins;
                        flyersOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the flyers loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // flyers
                    if (westResults[i].team.id === 4) {
                        flyersWins = westResults[i].leagueRecord.wins;
                        flyersOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the flyers loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // flyers
                    if (centralResults[i].team.id === 4) {
                        flyersWins = centralResults[i].leagueRecord.wins;
                        flyersOTLS = centralResults[i].leagueRecord.ot;
                    }
                }



                for (var i = 0; i < northResults.length; i++) {

                    // jets
                    if (northResults[i].team.id === 52) {
                        jetsWins = northResults[i].leagueRecord.wins;
                        jetsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // jets
                    if (eastResults[i].team.id === 52) {
                        jetsWins = eastResults[i].leagueRecord.wins;
                        jetsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }


                for (var i = 0; i < centralResults.length; i++) {

                    // jets
                    if (centralResults[i].team.id === 52) {
                        jetsWins = centralResults[i].leagueRecord.wins;
                        jetsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }


                for (var i = 0; i < westResults.length; i++) {

                    // jets
                    if (westResults[i].team.id === 52) {
                        jetsWins = westResults[i].leagueRecord.wins;
                        jetsOTLS = westResults[i].leagueRecord.ot;
                    }
                }



                for (var i = 0; i < northResults.length; i++) {

                    // oilers
                    if (northResults[i].team.id === 22) {
                        oilersWins = northResults[i].leagueRecord.wins;
                        oilersOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // oilers
                    if (eastResults[i].team.id === 22) {
                        oilersWins = eastResults[i].leagueRecord.wins;
                        oilersOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // oilers
                    if (westResults[i].team.id === 22) {
                        oilersWins = westResults[i].leagueRecord.wins;
                        oilersOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // oilers
                    if (centralResults[i].team.id === 22) {
                        oilersWins = centralResults[i].leagueRecord.wins;
                        oilersOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // oilers total
                oilersTotal = (oilersWins * 2.9) + (oilersOTLS * 1.45);

                // flyers total
                flyersTotal = (flyersWins * 2.9) + (flyersOTLS * 1.45);

                // jets total
                jetsTotal = (jetsWins * 2.9) + (jetsOTLS * 1.45);


                var allNHL = (flyersTotal + oilersTotal + jetsTotal).toFixed(1);

                this.setState({ djNHL: 279.85 });
                this.setState({ flyers: flyersTotal });
                this.setState({ oilers: oilersTotal });
                this.setState({ jets: jetsTotal });

                // starting Goose NHL here 
                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var sharksWins;
                var sharksOTLS;
                var sharksTotal;
                var coyotesWins;
                var coyotesOTLS;
                var coyotesTotal;
                var allNHL;

                // Here is the leafs loop
                for (var i = 0; i < northResults.length; i++) {
                    // leafs
                    if (northResults[i].team.id === 10) {
                        leafsWins = northResults[i].leagueRecord.wins;
                        leafsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the leafs loop
                for (var i = 0; i < eastResults.length; i++) {
                    // leafs
                    if (eastResults[i].team.id === 10) {
                        leafsWins = eastResults[i].leagueRecord.wins;
                        leafsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the leafs loop
                for (var i = 0; i < westResults.length; i++) {
                    // leafs
                    if (westResults[i].team.id === 10) {
                        leafsWins = westResults[i].leagueRecord.wins;
                        leafsOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the leafs loop
                for (var i = 0; i < centralResults.length; i++) {
                    // leafs
                    if (centralResults[i].team.id === 10) {
                        leafsWins = centralResults[i].leagueRecord.wins;
                        leafsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }


                // Sharks Loop 
                for (var i = 0; i < westResults.length; i++) {
                    // sharks
                    if (westResults[i].team.id === 28) {
                        sharksWins = westResults[i].leagueRecord.wins;
                        sharksOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Sharks Loop 
                for (var i = 0; i < eastResults.length; i++) {
                    // sharks
                    if (eastResults[i].team.id === 28) {
                        sharksWins = eastResults[i].leagueRecord.wins;
                        sharksOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Sharks Loop 
                for (var i = 0; i < northResults.length; i++) {
                    // sharks
                    if (northResults[i].team.id === 28) {
                        sharksWins = northResults[i].leagueRecord.wins;
                        sharksOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Sharks Loop 
                for (var i = 0; i < centralResults.length; i++) {
                    // sharks
                    if (centralResults[i].team.id === 28) {
                        sharksWins = centralResults[i].leagueRecord.wins;
                        sharksOTLS = centralResults[i].leagueRecord.ot;
                    }
                }




                for (var i = 0; i < westResults.length; i++) {

                    // coyotes
                    if (westResults[i].team.id === 53) {
                        coyotesWins = westResults[i].leagueRecord.wins;
                        coyotesOTLS = westResults[i].leagueRecord.ot;
                    }
                }


                for (var i = 0; i < eastResults.length; i++) {

                    // coyotes
                    if (eastResults[i].team.id === 53) {
                        coyotesWins = eastResults[i].leagueRecord.wins;
                        coyotesOTLS = eastResults[i].leagueRecord.ot;
                    }
                }


                for (var i = 0; i < centralResults.length; i++) {

                    // coyotes
                    if (centralResults[i].team.id === 53) {
                        coyotesWins = centralResults[i].leagueRecord.wins;
                        coyotesOTLS = centralResults[i].leagueRecord.ot;
                    }
                }


                for (var i = 0; i < northResults.length; i++) {

                    // coyotes
                    if (northResults[i].team.id === 53) {
                        coyotesWins = northResults[i].leagueRecord.wins;
                        coyotesOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // leafs total
                leafsTotal = (leafsWins * 2.9) + (leafsOTLS * 1.45);

                // coyotes total
                coyotesTotal = (coyotesWins * 2.9) + (coyotesOTLS * 1.45);

                // sharks total
                sharksTotal = (sharksWins * 2.9) + (sharksOTLS * 1.45);

                var allNHL = (leafsTotal + sharksTotal + coyotesTotal).toFixed(1);

                this.setState({ gooseNHL: 261 });
                this.setState({ leafs: leafsTotal });
                this.setState({ sharks: sharksTotal });
                this.setState({ coyotes: coyotesTotal });

                // starting Al NHL here 
                var capsWins;
                var capsOTLS;
                var capsTotal;
                var canesWins;
                var canesOTLS;
                var canesTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var allNHL;

                // Here is the caps loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // caps
                    if (eastResults[i].team.id === 15) {
                        capsWins = eastResults[i].leagueRecord.wins;
                        capsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the caps loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // caps
                    if (westResults[i].team.id === 15) {
                        capsWins = westResults[i].leagueRecord.wins;
                        capsOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the caps loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // caps
                    if (centralResults[i].team.id === 15) {
                        capsWins = centralResults[i].leagueRecord.wins;
                        capsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the caps loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // caps
                    if (northResults[i].team.id === 15) {
                        capsWins = northResults[i].leagueRecord.wins;
                        capsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the rangers loop. 
                for (var i = 0; i < northResults.length; i++) {

                    // rangers
                    if (northResults[i].team.id === 3) {
                        rangersWins = northResults[i].leagueRecord.wins;
                        rangersOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the rangers loop. 
                for (var i = 0; i < eastResults.length; i++) {

                    // rangers
                    if (eastResults[i].team.id === 3) {
                        rangersWins = eastResults[i].leagueRecord.wins;
                        rangersOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the rangers loop. 
                for (var i = 0; i < westResults.length; i++) {

                    // rangers
                    if (westResults[i].team.id === 3) {
                        rangersWins = westResults[i].leagueRecord.wins;
                        rangersOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the rangers loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    // rangers
                    if (centralResults[i].team.id === 3) {
                        rangersWins = centralResults[i].leagueRecord.wins;
                        rangersOTLS = centralResults[i].leagueRecord.ot;
                    }
                }



                // Canes
                for (var i = 0; i < eastResults.length; i++) {
                    // canes
                    if (eastResults[i].team.id === 12) {
                        canesWins = eastResults[i].leagueRecord.wins;
                        canesOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Canes
                for (var i = 0; i < centralResults.length; i++) {
                    // canes
                    if (centralResults[i].team.id === 12) {
                        canesWins = centralResults[i].leagueRecord.wins;
                        canesOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Canes
                for (var i = 0; i < northResults.length; i++) {
                    // canes
                    if (northResults[i].team.id === 12) {
                        canesWins = northResults[i].leagueRecord.wins;
                        canesOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Canes
                for (var i = 0; i < westResults.length; i++) {
                    // canes
                    if (westResults[i].team.id === 12) {
                        canesWins = westResults[i].leagueRecord.wins;
                        canesOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // caps total
                capsTotal = ((capsWins * 2.9) + (capsOTLS * 1.45));
                console.log(capsTotal);

                // canes total
                canesTotal = ((canesWins * 2.9) + (canesOTLS * 1.45));
                console.log(canesTotal)

                // rangers total
                rangersTotal = ((rangersWins * 2.9) + (rangersOTLS * 1.45));
                console.log(rangersTotal);

                var allNHL = (capsTotal + canesTotal + rangersTotal).toFixed(1);

                this.setState({ alNHL: 314.65 });
                this.setState({ caps: capsTotal });
                this.setState({ canes: canesTotal });
                this.setState({ rangers: rangersTotal });

                // starting Joe NHL here 
                var knightsWins;
                var knightsOTLS;
                var knightsTotal;
                var sabresWins;
                var sabresOTLS;
                var sabresTotal;
                var senatorsWins;
                var senatorsOTLS;
                var senatorsTotal;
                var allNHL;

                // Here is the knights loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // knights
                    if (westResults[i].team.id === 54) {
                        knightsWins = westResults[i].leagueRecord.wins;
                        knightsOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the knights loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // knights
                    if (eastResults[i].team.id === 54) {
                        knightsWins = eastResults[i].leagueRecord.wins;
                        knightsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the knights loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // knights
                    if (centralResults[i].team.id === 54) {
                        knightsWins = centralResults[i].leagueRecord.wins;
                        knightsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the knights loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // knights
                    if (northResults[i].team.id === 54) {
                        knightsWins = northResults[i].leagueRecord.wins;
                        knightsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the loop for the sabres
                for (var i = 0; i < eastResults.length; i++) {

                    // sabres
                    if (eastResults[i].team.id === 7) {
                        sabresWins = eastResults[i].leagueRecord.wins;
                        sabresOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the loop for the sabres
                for (var i = 0; i < northResults.length; i++) {

                    // sabres
                    if (northResults[i].team.id === 7) {
                        sabresWins = northResults[i].leagueRecord.wins;
                        sabresOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the loop for the sabres
                for (var i = 0; i < westResults.length; i++) {

                    // sabres
                    if (westResults[i].team.id === 7) {
                        sabresWins = westResults[i].leagueRecord.wins;
                        sabresOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the loop for the sabres
                for (var i = 0; i < centralResults.length; i++) {

                    // sabres
                    if (centralResults[i].team.id === 7) {
                        sabresWins = centralResults[i].leagueRecord.wins;
                        sabresOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < northResults.length; i++) {

                    // senators
                    if (northResults[i].team.id === 9) {
                        senatorsWins = northResults[i].leagueRecord.wins;
                        senatorsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // senators
                    if (eastResults[i].team.id === 9) {
                        senatorsWins = eastResults[i].leagueRecord.wins;
                        senatorsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // senators
                    if (westResults[i].team.id === 9) {
                        senatorsWins = westResults[i].leagueRecord.wins;
                        senatorsOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // senators
                    if (centralResults[i].team.id === 9) {
                        senatorsWins = centralResults[i].leagueRecord.wins;
                        senatorsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // sabres total
                sabresTotal = (sabresWins * 2.9) + (sabresOTLS * 1.45);

                // senators total
                senatorsTotal = (senatorsWins * 2.9) + (senatorsOTLS * 1.45);

                // knights total
                knightsTotal = (knightsWins * 2.9) + (knightsOTLS * 1.45);


                var allNHL = (knightsTotal + sabresTotal + senatorsTotal).toFixed(1);

                this.setState({ joeNHL: 246.5 });
                this.setState({ knights: knightsTotal });
                this.setState({ sabres: sabresTotal });
                this.setState({ senators: senatorsTotal });

                // starting Steids NHL here
                var bluesWins;
                var bluesOTLS;
                var bluesTotal;
                var predatorsWins;
                var predatorsOTLS;
                var predatorsTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var allNHL;

                // Blues: 

                // Here is the loop for the blues
                for (var i = 0; i < westResults.length; i++) {

                    // blues
                    if (westResults[i].team.id === 19) {
                        bluesWins = westResults[i].leagueRecord.wins;
                        bluesOTLS = westResults[i].leagueRecord.ot;
                    };
                };

                // Here is the loop for the blues
                for (var i = 0; i < eastResults.length; i++) {

                    // blues
                    if (eastResults[i].team.id === 19) {
                        bluesWins = eastResults[i].leagueRecord.wins;
                        bluesOTLS = eastResults[i].leagueRecord.ot;
                    };
                };

                // Here is the loop for the blues
                for (var i = 0; i < northResults.length; i++) {

                    // blues
                    if (northResults[i].team.id === 19) {
                        bluesWins = northResults[i].leagueRecord.wins;
                        bluesOTLS = northResults[i].leagueRecord.ot;
                    };
                };

                // Here is the loop for the blues
                for (var i = 0; i < centralResults.length; i++) {

                    // blues
                    if (centralResults[i].team.id === 19) {
                        bluesWins = centralResults[i].leagueRecord.wins;
                        bluesOTLS = centralResults[i].leagueRecord.ot;
                    };
                };


                // Here is the predators for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (centralResults[i].team.id === 18) {
                        predatorsWins = centralResults[i].leagueRecord.wins;
                        predatorsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }


                // Here is the predators for loop. 
                for (var i = 0; i < westResults.length; i++) {

                    if (westResults[i].team.id === 18) {
                        predatorsWins = westResults[i].leagueRecord.wins;
                        predatorsOTLS = westResults[i].leagueRecord.ot;
                    }
                }


                // Here is the predators for loop. 
                for (var i = 0; i < northResults.length; i++) {

                    if (northResults[i].team.id === 18) {
                        predatorsWins = northResults[i].leagueRecord.wins;
                        predatorsOTLS = northResults[i].leagueRecord.ot;
                    }
                }


                // Here is the predators for loop. 
                for (var i = 0; i < eastResults.length; i++) {

                    if (eastResults[i].team.id === 18) {
                        predatorsWins = eastResults[i].leagueRecord.wins;
                        predatorsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }


                // Here is the panthers for loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // panthers
                    if (centralResults[i].team.id === 13) {
                        panthersWins = centralResults[i].leagueRecord.wins;
                        panthersOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the panthers for loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // panthers
                    if (eastResults[i].team.id === 13) {
                        panthersWins = eastResults[i].leagueRecord.wins;
                        panthersOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the panthers for loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // panthers
                    if (northResults[i].team.id === 13) {
                        panthersWins = northResults[i].leagueRecord.wins;
                        panthersOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // Here is the panthers for loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // panthers
                    if (westResults[i].team.id === 13) {
                        panthersWins = westResults[i].leagueRecord.wins;
                        panthersOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // predators total
                predatorsTotal = (predatorsWins * 2.9) + (predatorsOTLS * 1.45);

                // panthers total
                panthersTotal = (panthersWins * 2.9) + (panthersOTLS * 1.45);

                // steids total
                bluesTotal = (bluesWins * 2.9) + (bluesOTLS * 1.45);

                var allNHL = (bluesTotal + panthersTotal + predatorsTotal).toFixed(1);

                this.setState({ steidsNHL: 298.7 });
                this.setState({ blues: bluesTotal });
                this.setState({ panthers: panthersTotal });
                this.setState({ predators: predatorsTotal });

                // starting Mark Eres Here: 
                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var flamesWins;
                var flamesOTLS;
                var flamesTotal;
                var allNHL;

                // Here is the lightning loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // lightning
                    if (centralResults[i].team.id === 14) {
                        lightningWins = centralResults[i].leagueRecord.wins;
                        lightningOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the lightning loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // lightning
                    if (westResults[i].team.id === 14) {
                        lightningWins = westResults[i].leagueRecord.wins;
                        lightningOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // Here is the lightning loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // lightning
                    if (eastResults[i].team.id === 14) {
                        lightningWins = eastResults[i].leagueRecord.wins;
                        lightningOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // Here is the lightning loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // lightning
                    if (northResults[i].team.id === 14) {
                        lightningWins = northResults[i].leagueRecord.wins;
                        lightningOTLS = northResults[i].leagueRecord.ot;
                    }
                }





                for (var i = 0; i < northResults.length; i++) {

                    // flames
                    if (northResults[i].team.id === 20) {
                        flamesWins = northResults[i].leagueRecord.wins;
                        flamesOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // flames
                    if (eastResults[i].team.id === 20) {
                        flamesWins = eastResults[i].leagueRecord.wins;
                        flamesOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // flames
                    if (westResults[i].team.id === 20) {
                        flamesWins = westResults[i].leagueRecord.wins;
                        flamesOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // flames
                    if (centralResults[i].team.id === 20) {
                        flamesWins = centralResults[i].leagueRecord.wins;
                        flamesOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Bruins

                for (var i = 0; i < eastResults.length; i++) {

                    // bruins
                    if (eastResults[i].team.id === 6) {
                        bruinsWins = eastResults[i].leagueRecord.wins;
                        bruinsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < northResults.length; i++) {

                    // bruins
                    if (northResults[i].team.id === 6) {
                        bruinsWins = northResults[i].leagueRecord.wins;
                        bruinsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // bruins
                    if (westResults[i].team.id === 6) {
                        bruinsWins = westResults[i].leagueRecord.wins;
                        bruinsOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // bruins
                    if (centralResults[i].team.id === 6) {
                        bruinsWins = centralResults[i].leagueRecord.wins;
                        bruinsOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // flames total
                flamesTotal = (flamesWins * 2.9) + (flamesOTLS * 1.45);
                // console.log(flamesTotal);

                // lightning total
                lightningTotal = (lightningWins * 2.9) + (lightningOTLS * 1.45);
                // console.log(lightningTotal);

                // bruins total
                bruinsTotal = (bruinsWins * 2.9) + (bruinsOTLS * 1.45);
                // console.log(bruinsTotal)

                var allNHL = (lightningTotal + bruinsTotal + flamesTotal).toFixed(1);

                this.setState({ benNHL: 294.35 });
                this.setState({ lightning: lightningTotal });
                this.setState({ bruins: bruinsTotal });
                this.setState({ flames: flamesTotal });

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
                //  Chelsea
                // console.log(res)
                var chelseaWin;
                var chelseaTie;
                var brightonWin;
                var brightonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 47) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 46) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var brightonTotal = (brightonWin * 4.25) + (brightonTie);

                // Here is the final result
                var tomPoints = chelseaTotal + brightonTotal;
                this.setState({ tomEPL: tomPoints });
                // console.log("Tom has " + tomPoints + "points");

                // HERE ARE EPL TEAMS FOR Patrick. 
                //   Starting Patrick EPL Here 
                var manCityWin;
                var manCityTie;
                var wolvesWin;
                var wolvesTie;

                // Patrick EPL here
                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];

                // console.log(forLoopArray)

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 66) {
                        wolvesWin = forLoopArray[i].all.win
                        wolvesTie = forLoopArray[i].all.draw
                    }
                }

                var manCityTotal = (manCityWin * 4.25) + (manCityTie);
                var wolvesTotal = (wolvesWin * 4.25) + (wolvesTie);

                // Here is the final result
                var patPoints = manCityTotal + wolvesTotal;
                this.setState({ patEPL: patPoints });

                var newcastleWin;
                var newcastleTie;
                var palaceWin;
                var palaceTie;

                //  James EPL here 
                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];;
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 39) {
                        newcastleWin = forLoopArray[i].all.win
                        newcastleTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 42) {
                        palaceWin = forLoopArray[i].all.win
                        palaceTie = forLoopArray[i].all.draw
                    }
                }

                var newcastleTotal = (newcastleWin * 4.25) + (newcastleTie);
                var palaceTotal = (palaceWin * 4.25) + (palaceTie);

                // Here is the final result
                var jamesPoints = newcastleTotal + palaceTotal;
                this.setState({ jamesEPL: jamesPoints });

                //   Starting Neptune EPL Here 
                var leicesterWin;
                var leicesterTie;
                var norwichWin;
                var norwichTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];;
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 40) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 51) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                    }
                }

                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);
                var norwichTotal = (norwichWin * 4.25) + (norwichTie);

                // Here is the final result
                var neptunePoints = leicesterTotal + norwichTotal;
                this.setState({ neptuneEPL: neptunePoints });

                // HERE ARE EPL TEAMS FOR DJ. 
                //   Starting Goose EPL Here 
                var sheffieldWin;
                var sheffieldTie;
                var burnleyWin;
                var burnleyTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 60) {
                        sheffieldWin = forLoopArray[i].all.win
                        sheffieldTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 62) {
                        burnleyWin = forLoopArray[i].all.win
                        burnleyTie = forLoopArray[i].all.draw
                    }
                }

                var sheffieldTotal = (sheffieldWin * 4.25) + (sheffieldTie);
                var burnleyTotal = (burnleyWin * 4.25) + (burnleyTie);

                // Here is the final result
                var djPoints = sheffieldTotal + burnleyTotal;
                this.setState({ djEPL: djPoints });

                //   Starting Goose EPL Here 
                var manuWin;
                var manuTie;
                var westhamWin;
                var westhamTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 41) {
                        manuWin = forLoopArray[i].all.win
                        manuTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 44) {
                        westhamWin = forLoopArray[i].all.win
                        westhamTie = forLoopArray[i].all.draw
                    }
                }

                var manuTotal = (manuWin * 4.25) + (manuTie);
                var westhamTotal = (westhamWin * 4.25) + (westhamTie);

                // Here is the final result
                var goosePoints = manuTotal + westhamTotal;
                this.setState({ gooseEPL: goosePoints });

                //   Starting Goose EPL Here 
                var evertonWin;
                var evertonTie;
                var southhamptonWin;
                var southhamptonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 49) {
                        evertonWin = forLoopArray[i].all.win
                        evertonTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 63) {
                        southhamptonWin = forLoopArray[i].all.win
                        southhamptonTie = forLoopArray[i].all.draw
                    }
                }

                var evertonTotal = (evertonWin * 4.25) + (evertonTie);
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie);

                // Here is the final result
                var alPoints = evertonTotal + southhamptonTotal;
                this.setState({ alEPL: alPoints });

                //   Starting Neptune EPL Here 
                var liverpoolWin;
                var liverpoolTie;
                var astonWin;
                var astonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 45) {
                        liverpoolWin = forLoopArray[i].all.win
                        liverpoolTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 48) {
                        astonWin = forLoopArray[i].all.win
                        astonTie = forLoopArray[i].all.draw
                    }
                }

                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);
                var astonTotal = (astonWin * 4.25) + (astonTie);

                // Here is the final result
                var joePoints = liverpoolTotal + astonTotal;
                this.setState({ joeEPL: joePoints });

                //   Starting Goose EPL Here 
                var tottenhamWin;
                var tottenhamTie;
                var bournemouthWin;
                var bournemouthTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                // console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 52) {
                        tottenhamWin = forLoopArray[i].all.win
                        tottenhamTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 36) {
                        bournemouthWin = forLoopArray[i].all.win
                        bournemouthTie = forLoopArray[i].all.draw
                    }
                }

                var tottenhamTotal = (tottenhamWin * 4.25) + (tottenhamTie);
                var bournemouthTotal = (bournemouthWin * 4.25) + (bournemouthTie);

                // Here is the final result
                var benPoints = tottenhamTotal + bournemouthTotal;
                this.setState({ benEPL: benPoints });

                //   Starting Steids EPL Here 
                var arsenalWin;
                var arsenalTie;
                var watfordWin;
                var watfordTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 33) {
                        arsenalWin = forLoopArray[i].all.win
                        arsenalTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 34) {
                        watfordWin = forLoopArray[i].all.win
                        watfordTie = forLoopArray[i].all.draw
                    }
                }

                var arsenalTotal = (arsenalWin * 4.25) + (arsenalTie);
                var watfordTotal = (watfordWin * 4.25) + (watfordTie);

                // Here is the final result
                var steidsPoints = arsenalTotal + watfordTotal;
                this.setState({ steidsEPL: steidsPoints });

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
                // HERE ARE NBA TEAMS FOR TOMMY 2021 I changed the way I did this for 2021,
                //    so I'm gonna keep the old mapping approach in case i want to use it later. 
                // But the 2021 approach is much simpler. 
                // THis is now warriors. 
                var warriorsWin = res.data.api.standings[24].win * 2.25;
                // And Magic
                var magicWin = res.data.api.standings[2].win * 2.25;
                // and Twolves
                var twolvesWin = res.data.api.standings[28].win * 2.25;

                // // Gonna use the old temp approach for Tom, so I have it for later. 
                // const tempTomNBA = this.state.allNBA;
                // tempTomNBA.push(warriorsWin);
                // tempTomNBA.push(magicWin);
                // tempTomNBA.push(twolvesWin);

                // var tomDoubledScores = tempTomNBA.map(team => team * 2.25);

                // var TomPoints = 0;

                // for (var i = 0; i < tomDoubledScores.length; i++) {
                //     TomPoints += tomDoubledScores[i];
                // }
                var tomPoints = (twolvesWin + magicWin + warriorsWin).toFixed(1);
                this.setState({ tomNBA: tomPoints });

                console.log(res.data.api.standings);
                // Now switching to the new way. 
                // New Steids Teams for 2021
                var lakersWin = res.data.api.standings[23].win * 2.25;
                var netsWin = res.data.api.standings[5].win * 2.25;
                var knicksWin = res.data.api.standings[7].win * 2.25;
                var steidsPoints = (knicksWin + netsWin + lakersWin).toFixed(1);
                this.setState({ steidsNBA: steidsPoints });

                // Patricks Teams for 2021. 
                var jazzWin = res.data.api.standings[25].win * 2.25;
                var sunsWin = res.data.api.standings[21].win * 2.25;
                var rocketsWin = res.data.api.standings[15].win * 2.25;
                var patPoints = (jazzWin + sunsWin + rocketsWin).toFixed(1);
                this.setState({ patNBA: patPoints });

                // 2021 Neptune NBA. 
                var sixersWin = res.data.api.standings[9].win * 2.25;
                var mavsWin = res.data.api.standings[16].win * 2.25;
                var blazersWin = res.data.api.standings[29].win * 2.25;
                var neptunePoints = (sixersWin + mavsWin + blazersWin).toFixed(1);
                this.setState({ neptuneNBA: neptunePoints });

                // James NBA 2021
                var celticsWin = res.data.api.standings[6].win * 2.25;
                var spursWin = res.data.api.standings[18].win * 2.25;
                var thunderWin = res.data.api.standings[27].win * 2.25;
                var jamesPoints = (celticsWin + spursWin + thunderWin).toFixed(1);
                this.setState({ jamesNBA: jamesPoints });

                // DJ NBA 2021
                var clippersWin = res.data.api.standings[20].win * 2.25;
                var nuggetsWin = res.data.api.standings[26].win * 2.25;
                var raptorsWin = res.data.api.standings[8].win * 2.25;
                var djPoints = (clippersWin + nuggetsWin + raptorsWin).toFixed(1);
                this.setState({ djNBA: djPoints });

                // Goose NBA 2021
                var pacersWin = res.data.api.standings[11].win * 2.25;
                var hawksWin = res.data.api.standings[1].win * 2.25;
                var kingsWin = res.data.api.standings[22].win * 2.25;
                var goosePoints = (pacersWin + hawksWin + kingsWin).toFixed(1);
                this.setState({ gooseNBA: goosePoints });

                // Al
                var heatWin = res.data.api.standings[0].win * 2.25;
                var hornetsWin = res.data.api.standings[3].win * 2.25;
                var cavsWin = res.data.api.standings[14].win * 2.25;
                var alPoints = (heatWin + hornetsWin + cavsWin).toFixed(1);
                this.setState({ alNBA: alPoints });

                // Joe
                var bucksWin = res.data.api.standings[13].win * 2.25;
                var grizzliesWin = res.data.api.standings[17].win * 2.25;
                var bullsWin = res.data.api.standings[10].win * 2.25;
                var joePoints = (bucksWin + grizzliesWin + bullsWin).toFixed(1);
                this.setState({ joeNBA: joePoints });

                // Mark and Johnny 
                var pelicansWin = res.data.api.standings[19].win * 2.25;
                var wizardsWin = res.data.api.standings[4].win * 2.25;
                var pistonsWin = res.data.api.standings[12].win * 2.25;
                var benPoints = (pelicansWin + wizardsWin + pistonsWin).toFixed(1);
                this.setState({ benNBA: benPoints });

                // And finally, the total scores function needs to run. 
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


