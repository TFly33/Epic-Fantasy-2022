import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./Table.css";
import API from "../../utils/API";

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
        tomGamble: 185,
        patGamble: 214,
        jamesGamble: 200,
        neptuneGamble: 178,
        djGamble: 200,
        gooseGamble: 203,
        alGamble: 210,
        joeGamble: 195,
        steidsGamble: 205,
        eresGamble: 210,

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
                // {
                //     label: 'NFL',
                //     field: 'nfl',
                //     sort: 'asc',
                //     width: 150
                // },
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
                // {
                //     label: 'MLB',
                //     field: 'mlb',
                //     sort: 'asc',
                //     width: 150
                // },
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
                    team: 'Bommy',
                    epl: this.state.tomEPL,
                    nfl: this.state.tomNFL,
                    nba: this.state.tomNBA,
                    nhl: this.state.tomNHL,
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
                    mlb: 0,
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
        // this.getScoresNFL();
        // // running NHL here
        this.getScoresNHL();
        // MLB Here 
        // this.getScoresMLB(); 
        // PGA Golf here. Gonna do it by hand for now and then potentially change it later if I can get the API to work. 
        this.getScoresPGA();
    };

    // Let's create a function to add up all the scores also. But, I need that to run at the end of all the other functions, otherwise I will just get a blank slate back. 

    totalScores = () => {

        // Totals for Tom 
        var tomTotalPoints =
            parseInt((this.state.tomNBA)) +
            parseInt((this.state.tomNHL)) +
            // parseInt((this.state.tomNFL)) + 
            parseInt((this.state.tomEPL)) +
            parseInt((this.state.tomPGA)) +
            parseInt((this.state.tomGamble));
        this.setState({ tomTotal: tomTotalPoints });

        // Totals for Pat 
        var patTotalPoints =
            parseInt((this.state.patNBA)) +
            parseInt((this.state.patNHL)) +
            // parseInt((this.state.patNFL)) + 
            parseInt((this.state.patEPL)) +
            parseInt((this.state.patPGA)) +
            parseInt((this.state.patGamble));
        this.setState({ patTotal: patTotalPoints });

        // Totals for JAmes
        var jamesTotalPoints =
            parseInt((this.state.jamesNBA)) +
            parseInt((this.state.jamesNHL)) +
            // parseInt((this.state.jamesNFL)) + 
            parseInt((this.state.jamesEPL)) +
            parseInt((this.state.jamesPGA)) +
            parseInt((this.state.jamesGamble));
        this.setState({ jamesTotal: jamesTotalPoints });

        // Totals for Neptune
        var neptuneTotalPoints =
            parseInt((this.state.neptuneNBA)) +
            parseInt((this.state.neptuneNHL)) +
            // parseInt((this.state.neptuneNFL)) + 
            parseInt((this.state.neptuneEPL)) +
            parseInt((this.state.neptunePGA)) +
            parseInt((this.state.neptuneGamble));;
        this.setState({ neptuneTotal: neptuneTotalPoints });

        // Totals for DJ
        var djTotalPoints =
            parseInt((this.state.djNBA)) +
            parseInt((this.state.djNHL)) +
            // parseInt((this.state.djNFL)) + 
            parseInt((this.state.djEPL)) +
            parseInt((this.state.djPGA)) +
            parseInt((this.state.djGamble));;
        this.setState({ djTotal: djTotalPoints });

        // Totals for Goose 
        var gooseTotalPoints =
            parseInt((this.state.gooseNBA)) +
            parseInt((this.state.gooseNHL)) +
            // parseInt((this.state.gooseNFL)) + 
            parseInt((this.state.gooseEPL)) +
            parseInt((this.state.goosePGA)) +
            parseInt((this.state.gooseGamble));
        this.setState({ gooseTotal: gooseTotalPoints });

        // Totals for Al
        var alTotalPoints =
            parseInt((this.state.alNBA)) +
            parseInt((this.state.alNHL)) +
            // parseInt((this.state.alNFL)) + 
            parseInt((this.state.alEPL)) +
            parseInt((this.state.alPGA)) +
            parseInt((this.state.alGamble));;
        this.setState({ alTotal: alTotalPoints });

        // Totals for Joe
        var joeTotalPoints =
            parseInt((this.state.joeNBA)) +
            parseInt((this.state.joeNHL)) +
            // parseInt((this.state.joeNFL)) + 
            parseInt((this.state.joeEPL)) +
            parseInt((this.state.joePGA)) +
            parseInt((this.state.joeGamble));;
        this.setState({ joeTotal: joeTotalPoints });

        // Totals for Steids
        var steidsTotalPoints =
            parseInt((this.state.steidsNBA)) +
            parseInt((this.state.steidsNHL)) +
            // parseInt((this.state.steidsNFL)) + 
            parseInt((this.state.steidsEPL)) +
            parseInt((this.state.steidsPGA)) +
            parseInt((this.state.steidsGamble));;
        this.setState({ steidsTotal: steidsTotalPoints });

        // Totals for Ben
        var benTotalPoints =
            parseInt((this.state.benNBA)) +
            parseInt((this.state.benNHL)) +
            // parseInt((this.state.benNFL)) + 
            parseInt((this.state.benEPL)) +
            parseInt((this.state.eresPGA)) +
            parseInt((this.state.eresGamble));;
        this.setState({ benTotal: benTotalPoints });
    };

    // Going to hard code this until I get the API rolling. 

    getScoresPGA = () => {
        // Tom's PGA Here. Golf Team 8. 
        var Koepka = 11
        var Matsuyama = 24
        var English = 48
        var Kokrak = 31
        var Lowry = 7
        var tomPGATotal = Koepka + Matsuyama + English + Kokrak + Lowry
        this.setState({ tomPGA: tomPGATotal });
        // console.log(tomPGATotal);

        // Pat's PGA Here. Golf Team 10. 
        var Hovland = 35
        var Wolff = 29
        var Champ = 8
        var Munoz = 15
        var Henley = 21
        var patPGATotal = Hovland + Wolff + Champ + Munoz + Henley
        this.setState({ patPGA: patPGATotal });
        // console.log(patPGATotal);

        // James's PGA Here. Golf Team 7. 
        var Cantlay = 36
        var Reed = 12
        var Fowler = 3.5
        var Woodland = 0
        var Mickelson = 1
        var jamesPGATotal = Cantlay + Reed + Fowler + Woodland + Mickelson
        this.setState({ jamesPGA: jamesPGATotal });
        // console.log(jamesPGATotal);

        // Neptune's PGA Here. Golf Team 3. 
        var Rahm = 26
        var Scheffler = 10
        var Spieth = 2
        var Casey = 5
        var Watson = 12
        var neptunePGATotal = Rahm + Scheffler + Spieth + Casey + Watson
        this.setState({ neptunePGA: neptunePGATotal });
        // console.log(neptunePGATotal);

        // DJ's PGA Here. Golf Team 1. 
        var Johnson = 51
        var Day = 8
        var Niemann = 41
        var Oosthuizen = 15
        var Garcia = 31
        var djPGATotal = Johnson + Day + Niemann + Oosthuizen + Garcia
        this.setState({ djPGA: djPGATotal });
        // console.log(djPGATotal);

        // Goose's PGA Here. Golf Team 5. 
        var McIlroy = 14
        var Im = 27
        var Fleetwood = 3.8
        var Leishman = 11
        var Horschel = 14
        var goosePGATotal = McIlroy + Im + Fleetwood + Leishman + Horschel
        this.setState({ goosePGA: goosePGATotal });
        // console.log(goosePGATotal);

        // Al's PGA Here. Golf Team 9. 
        var Morikawa = 12
        var Simpson = 22
        var Hatton = 15
        var Smith = 27
        var Conners = 18
        var alPGATotal = Morikawa + Simpson + Hatton + Smith + Conners
        this.setState({ alPGA: alPGATotal });
        // console.log(alPGATotal);

        // Joe's PGA Here. Golf Team 2. 
        var Dechambeau = 39
        var Rose = 4
        var Scott = 6
        var Kisner = 21
        var Kim = 10
        var joePGATotal = Dechambeau + Rose + Scott + Kisner + Kim
        this.setState({ joePGA: joePGATotal });
        // console.log(joePGATotal);

        // Steids's PGA Here. Golf Team 6. 
        var Schauffele = 31
        var Finau = 15
        var Woods = 1
        var Ancer = 18
        var Griffin = 12
        var steidsPGATotal = Schauffele + Finau + Woods + Ancer + Griffin
        this.setState({ steidsPGA: steidsPGATotal });
        // console.log(steidsPGATotal);

        // Eres's PGA Here. Golf Team 4. 
        var Thomas = 39
        var Berger = 14
        var Fitzpatrick = 5
        var Todd = 11
        var Kuchar = 2
        var eresPGATotal = Thomas + Berger + Fitzpatrick + Todd + Kuchar
        this.setState({ eresPGA: eresPGATotal });
        // console.log(eresPGATotal);
    };
    // This one I get to hard code because the season ended. 

    getScoresNFL = () => {
        this.setState({ tomNFL: 360 });
        this.setState({ patNFL: 300 });
        this.setState({ jamesNFL: 232.35 });
        this.setState({ neptuneNFL: 190 });
        this.setState({ djNFL: 250 });
        this.setState({ gooseNFL: 190 });
        this.setState({ alNFL: 280 });
        this.setState({ joeNFL: 240 });
        this.setState({ steidsNFL: 210 });
        this.setState({ benNFL: 200 });
    };

    // Going to put NHL Here
    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // NHL FOR TOM. Let's try and create this properly for 2021.The Divisions got changed for 2021, so need to change this a bit. 
                // console.log(res.data.records[0].teamRecords);
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[1].teamRecords;
                var eastResults = res.data.records[2].teamRecords;
                var centralResults = res.data.records[3].teamRecords;
                // console.log(res.data.records[2].teamRecords)

                // For the Canucks: 
                for (var i = 0; i < northResults.length; i++) {

                    // Canucks
                    if (northResults[i].team.id === 23) {
                        canucksWins = northResults[i].leagueRecord.wins;
                        canucksOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < northResults.length; i++) {

                    // canadians
                    if (northResults[i].team.id === 8) {
                        canadiansWins = northResults[i].leagueRecord.wins;
                        canadiansOTLS = northResults[i].leagueRecord.ot;
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
                // ducks total
                ducksTotal = (ducksWins * 2.9) + ducksOTLS;
                // console.log(ducksTotal)
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var ducksWins;
                var ducksOTLS;
                var ducksTotal;

                // canucks total
                canucksTotal = (canucksWins * 2.9) + canucksOTLS;
                // console.log(canucksTotal);

                // canadians total
                canadiansTotal = (canadiansWins * 2.9) + canadiansOTLS;
                // console.log(canadiansTotal);

                // ducks total
                ducksTotal = (ducksWins * 2.9) + ducksOTLS;
                //  console.log(ducksTotal);

                var allNHL = canucksTotal + canadiansTotal + ducksTotal
                // console.log(allNHL + " Here is Tom NHL")

                this.setState({ tomNHL: allNHL });
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
                // wild total
                wildTotal = (wildWins * 2.9) + wildOTLS;
                // console.log(wildTotal)

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

                // islanders total
                islandersTotal = (islandersWins * 2.9) + islandersOTLS;
                // console.log(islandersTotal);

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

                blackhawksTotal = (blackhawksWins * 2.9) + blackhawksOTLS;
                console.log(blackhawksTotal);

                var allNHL = islandersTotal + wildTotal + blackhawksTotal

                this.setState({ patNHL: allNHL });
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

                // avalanche total
                avalancheTotal = (avalancheWins * 2.9) + avalancheOTLS;
                console.log(avalancheTotal);

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

                // pens total
                pensTotal = (pensWins * 2.9) + pensOTLS;
                // console.log(pensTotal)

                // kings total
                kingsTotal = (kingsWins * 2.9) + kingsOTLS;
                // console.log(kingsTotal);

                var allNHL = avalancheTotal + pensTotal + kingsTotal

                this.setState({ jamesNHL: allNHL });
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

                // stars total
                starsTotal = (starsWins * 2.9) + starsOTLS;
                console.log(starsTotal);

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

                // blueJackets total
                blueJacketsTotal = (blueJacketsWins * 2.9) + blueJacketsOTLS;
                console.log(blueJacketsTotal)

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

                // Devils total
                devilsTotal = (devilsWins * 2.9) + devilsOTLS;
                console.log(devilsTotal);

                var allNHL = starsTotal + blueJacketsTotal + devilsTotal

                this.setState({ neptuneNHL: allNHL });
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

                // flyers total
                flyersTotal = (flyersWins * 2.9) + flyersOTLS;
                console.log(flyersTotal);

                for (var i = 0; i < northResults.length; i++) {

                    // jets
                    if (northResults[i].team.id === 52) {
                        jetsWins = northResults[i].leagueRecord.wins;
                        jetsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < northResults.length; i++) {

                    // oilers
                    if (northResults[i].team.id === 22) {
                        oilersWins = northResults[i].leagueRecord.wins;
                        oilersOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // oilers total
                oilersTotal = (oilersWins * 2.9) + oilersOTLS;
                console.log(oilersTotal)

                // jets total
                jetsTotal = (jetsWins * 2.9) + jetsOTLS;
                console.log(jetsTotal);

                var allNHL = flyersTotal + oilersTotal + jetsTotal

                this.setState({ djNHL: allNHL });
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
                        // console.log(leafsWins);
                        // console.log(leafsOTLS);
                        // console.log("this loop is running")
                    }
                }

                // leafs total
                leafsTotal = (leafsWins * 2.9) + leafsOTLS;
                console.log(leafsTotal);

                // Sharks Loop 
                for (var i = 0; i < westResults.length; i++) {
                    // sharks
                    if (westResults[i].team.id === 28) {
                        sharksWins = westResults[i].leagueRecord.wins;
                        sharksOTLS = westResults[i].leagueRecord.ot;
                        // console.log(sharksWins);
                        // console.log(sharksOTLS);
                        // console.log("this loop is running")
                    }
                }

                // sharks total
                sharksTotal = (sharksWins * 2.9) + sharksOTLS;
                console.log(sharksTotal);

                for (var i = 0; i < westResults.length; i++) {

                    // coyotes
                    if (westResults[i].team.id === 53) {
                        coyotesWins = westResults[i].leagueRecord.wins;
                        coyotesOTLS = westResults[i].leagueRecord.ot;
                        // console.log(coyotesWins);
                        // console.log(coyotesOTLS);
                        // console.log("this loop is running")
                    }
                }

                // coyotes total
                sharksTotal = (sharksWins * 2.9) + sharksOTLS;
                console.log(sharksTotal)

                // coyotes total
                coyotesTotal = (coyotesWins * 2.9) + coyotesOTLS;
                console.log(coyotesTotal);

                var allNHL = leafsTotal + sharksTotal + coyotesTotal

                this.setState({ gooseNHL: allNHL });
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
                        // console.log(capsWins);
                        // console.log(capsOTLS);
                        // console.log("this loop is running")
                    }

                    // rangers
                    if (eastResults[i].team.id === 3) {
                        rangersWins = eastResults[i].leagueRecord.wins;
                        rangersOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(rangersWins);
                        // console.log(rangersOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Canes
                for (var i = 0; i < eastResults.length; i++) {
                    // canes
                    if (centralResults[i].team.id === 12) {
                        canesWins = centralResults[i].leagueRecord.wins;
                        canesOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(canesWins);
                        // console.log(canesOTLS);
                        // console.log("this loop is running")
                    }
                }

                // caps total
                capsTotal = (capsWins * 2.9) + capsOTLS;
                console.log(capsTotal);

                // canes total
                canesTotal = (canesWins * 2.9) + canesOTLS;
                console.log(canesTotal)

                // rangers total
                rangersTotal = (rangersWins * 2.9) + rangersOTLS;
                console.log(rangersTotal);

                var allNHL = capsTotal + canesTotal + rangersTotal

                this.setState({ alNHL: allNHL });
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

                // knights total
                knightsTotal = (knightsWins * 2.9) + knightsOTLS;
                console.log(knightsTotal);

                // Here is the loop for the sabres
                for (var i = 0; i < eastResults.length; i++) {

                    // sabres
                    if (eastResults[i].team.id === 7) {
                        sabresWins = eastResults[i].leagueRecord.wins;
                        sabresOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < northResults.length; i++) {

                    // senators
                    if (northResults[i].team.id === 9) {
                        senatorsWins = northResults[i].leagueRecord.wins;
                        senatorsOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // sabres total
                sabresTotal = (sabresWins * 2.9) + sabresOTLS;
                console.log(sabresTotal)

                // senators total
                senatorsTotal = (senatorsWins * 2.9) + senatorsOTLS;
                console.log(senatorsTotal);

                var allNHL = knightsTotal + sabresTotal + senatorsTotal

                this.setState({ joeNHL: allNHL });
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

                // Here is the loop for the blues
                for (var i = 0; i < westResults.length; i++) {

                    // blues
                    if (westResults[i].team.id === 19) {
                        bluesWins = westResults[i].leagueRecord.wins;
                        bluesOTLS = westResults[i].leagueRecord.ot;
                    };
                };

                // predators total
                bluesTotal = (bluesWins * 2.9) + bluesOTLS;
                console.log(bluesTotal);

                // Here is the predators for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (centralResults[i].team.id === 18) {
                        predatorsWins = centralResults[i].leagueRecord.wins;
                        predatorsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(predatorsWins);
                        console.log(predatorsOTLS);
                        console.log("this loop is running")
                    }

                    // panthers
                    if (centralResults[i].team.id === 13) {
                        panthersWins = centralResults[i].leagueRecord.wins;
                        panthersOTLS = centralResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }
                }

                // predators total
                predatorsTotal = (predatorsWins * 2.9) + predatorsOTLS;
                console.log(predatorsTotal);

                // panthers total
                panthersTotal = (panthersWins * 2.9) + panthersOTLS;
                console.log(panthersTotal);

                // steids total
                bluesTotal = (bluesWins * 2.9) + bluesOTLS;
                console.log(bluesTotal);

                var allNHL = bluesTotal + panthersTotal + predatorsTotal

                this.setState({ steidsNHL: allNHL });
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

                // lightning total
                lightningTotal = (lightningWins * 2.9) + lightningOTLS;
                console.log(lightningTotal);

                for (var i = 0; i < northResults.length; i++) {

                    // flames
                    if (northResults[i].team.id === 20) {
                        flamesWins = northResults[i].leagueRecord.wins;
                        flamesOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // flames total
                flamesTotal = (flamesWins * 2.9) + flamesOTLS;
                console.log(flamesTotal);

                // Bruins

                for (var i = 0; i < eastResults.length; i++) {

                    // bruins
                    if (eastResults[i].team.id === 6) {
                        bruinsWins = eastResults[i].leagueRecord.wins;
                        bruinsOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // bruins total
                bruinsTotal = (bruinsWins * 2.9) + bruinsOTLS;
                console.log(bruinsTotal)

                var allNHL = lightningTotal + bruinsTotal + flamesTotal

                this.setState({ benNHL: allNHL });
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
                var warriorsWin = res.data.api.standings[24].win;
                // And Magic
                var magicWin = res.data.api.standings[2].win;
                // and Twolves
                var twolvesWin = res.data.api.standings[28].win;

                // Gonna use the old temp approach for Tom, so I have it for later. 
                const tempTomNBA = this.state.allNBA;
                tempTomNBA.push(warriorsWin);
                tempTomNBA.push(magicWin);
                tempTomNBA.push(twolvesWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2.25);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }

                this.setState({ tomNBA: TomPoints });

                console.log(res.data.api.standings);
                // Now switching to the new way. 
                // New Steids Teams for 2021
                var lakersWin = res.data.api.standings[23].win * 2.25;
                var netsWin = res.data.api.standings[5].win * 2.25;
                var knicksWin = res.data.api.standings[7].win * 2.25;
                var steidsPoints = knicksWin + netsWin + lakersWin;
                this.setState({ steidsNBA: steidsPoints });

                // Patricks Teams for 2021. 
                var jazzWin = res.data.api.standings[25].win * 2.25;
                var sunsWin = res.data.api.standings[20].win * 2.25;
                var rocketsWin = res.data.api.standings[15].win * 2.25;
                var patPoints = jazzWin + sunsWin + rocketsWin;
                this.setState({ patNBA: patPoints });

                // 2021 Neptune NBA. 
                var sixersWin = res.data.api.standings[9].win * 2.25;
                var mavsWin = res.data.api.standings[16].win * 2.25;
                var blazersWin = res.data.api.standings[29].win * 2.25;
                var neptunePoints = sixersWin + mavsWin + blazersWin;
                this.setState({ neptuneNBA: neptunePoints });

                // James NBA 2021
                var celticsWin = res.data.api.standings[6].win * 2.25;
                var spursWin = res.data.api.standings[18].win * 2.25;
                var thunderWin = res.data.api.standings[27].win * 2.25;
                var jamesPoints = celticsWin + spursWin + thunderWin;
                this.setState({ jamesNBA: jamesPoints });

                // DJ NBA 2021
                var clippersWin = res.data.api.standings[20].win * 2.25;
                var nuggetsWin = res.data.api.standings[26].win * 2.25;
                var raptorsWin = res.data.api.standings[8].win * 2.25;
                var djPoints = clippersWin + nuggetsWin + raptorsWin;
                this.setState({ djNBA: djPoints });

                // Goose NBA 2021
                var pacersWin = res.data.api.standings[11].win * 2.25;
                var hawksWin = res.data.api.standings[1].win * 2.25;
                var kingsWin = res.data.api.standings[22].win * 2.25;
                var goosePoints = pacersWin + hawksWin + kingsWin;
                this.setState({ gooseNBA: goosePoints });

                // Al
                var heatWin = res.data.api.standings[0].win * 2.25;
                var hornetsWin = res.data.api.standings[3].win * 2.25;
                var cavsWin = res.data.api.standings[14].win * 2.25;
                var alPoints = heatWin + hornetsWin + cavsWin;
                this.setState({ alNBA: alPoints });

                // Joe
                var bucksWin = res.data.api.standings[13].win * 2.25;
                var grizzliesWin = res.data.api.standings[17].win * 2.25;
                var bullsWin = res.data.api.standings[10].win * 2.25;
                var joePoints = bucksWin + grizzliesWin + bullsWin;
                this.setState({ joeNBA: joePoints });

                // Mark and Johnny 
                var pelicansWin = res.data.api.standings[19].win * 2.25;
                var wizardsWin = res.data.api.standings[4].win * 2.25;
                var pistonsWin = res.data.api.standings[12].win * 2.25;
                var benPoints = pelicansWin + wizardsWin + pistonsWin;
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
