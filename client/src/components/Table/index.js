import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./Table.css";
import API from "../../utils/API";
// import { al, totalNHL, } from "../../pages/teamPages/al";

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
                    nba: this.state.tomNBA,
                    nhl: this.state.tomNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.tomTotal
                },
                {
                    team: 'Patrick',
                    epl: this.state.patEPL,
                    nfl: this.state.patNFL,
                    nba: this.state.patrickNBA,
                    nhl: this.state.patNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.patTotal
                },
                {
                    team: 'James',
                    epl: this.state.jamesEPL,
                    nfl: this.state.jamesNFL,
                    nba: this.state.jamesNBA,
                    nhl: this.state.jamesNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.jamesTotal
                },
                {
                    team: 'Goose',
                    epl: this.state.gooseEPL,
                    nfl: this.state.gooseNFL,
                    nba: this.state.gooseNBA,
                    nhl: this.state.gooseNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.gooseTotal
                },
                {
                    team: 'Neptune',
                    epl: this.state.neptuneEPL,
                    nfl: this.state.neptuneNFL,
                    nba: this.state.neptuneNBA,
                    nhl: this.state.neptuneNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.neptuneTotal
                },
                {
                    team: 'Joe',
                    epl: this.state.joeEPL,
                    nfl: this.state.joeNFL,
                    nba: this.state.joeNBA,
                    nhl: this.state.joeNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.joeTotal
                },
                {
                    team: 'Ben',
                    epl: this.state.benEPL,
                    nfl: this.state.benNFL,
                    nba: this.state.benNBA,
                    nhl: this.state.benNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.benTotal
                },
                {
                    team: 'DJ',
                    epl: this.state.djEPL,
                    nfl: this.state.djNFL,
                    nba: this.state.djNBA,
                    nhl: this.state.djNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.djTotal
                },
                {
                    team: 'Steids',
                    epl: this.state.steidsEPL,
                    nfl: this.state.steidsNFL,
                    nba: this.state.steidsNBA,
                    nhl: this.state.steidsNHL,
                    mlb: 0,
                    bonus: 200,
                    total: this.state.steidsTotal
                },
                {
                    team: 'Al',
                    epl: this.state.alEPL,
                    nfl: this.state.alNFL,
                    nba: this.state.alNBA,
                    nhl: this.state.alNHL,
                    mlb: 0,
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
        // this.getScoreMLB(); 

    };

    // Let's create a function to add up all the scores also. But, I need that to run at the end of all the other functions, otherwise I will just get a blank slate back. 

    totalScores = () => {

        // Totals for Tom 
        var tomTotalPoints = parseInt((this.state.tomNBA)) + parseInt((this.state.tomNHL)) + parseInt((this.state.tomNFL)) + parseInt((this.state.tomEPL));
        this.setState({ tomTotal: tomTotalPoints });

        // Totals for Pat 
        var patTotalPoints = parseInt((this.state.patrickNBA)) + parseInt((this.state.patNHL)) + parseInt((this.state.patNFL)) + parseInt((this.state.patEPL));
        this.setState({ patTotal: patTotalPoints });

        // Totals for JAmes
        var jamesTotalPoints = parseInt((this.state.jamesNBA)) + parseInt((this.state.jamesNHL)) + parseInt((this.state.jamesNFL)) + parseInt((this.state.jamesEPL));
        this.setState({ jamesTotal: jamesTotalPoints });

        // Totals for Neptune
        var neptuneTotalPoints = parseInt((this.state.neptuneNBA)) + parseInt((this.state.neptuneNHL)) + parseInt((this.state.neptuneNFL)) + parseInt((this.state.neptuneEPL));
        this.setState({ neptuneTotal: neptuneTotalPoints });

        // Totals for DJ
        var djTotalPoints = parseInt((this.state.djNBA)) + parseInt((this.state.djNHL)) + parseInt((this.state.djNFL)) + parseInt((this.state.djEPL));
        this.setState({ djTotal: djTotalPoints });

        // Totals for Goose 
        var gooseTotalPoints = parseInt((this.state.gooseNBA)) + parseInt((this.state.gooseNHL)) + parseInt((this.state.gooseNFL)) + parseInt((this.state.gooseEPL));
        this.setState({ gooseTotal: gooseTotalPoints });

        // Totals for Al
        var alTotalPoints = parseInt((this.state.alNBA)) + parseInt((this.state.alNHL)) + parseInt((this.state.alNFL)) + parseInt((this.state.alEPL));
        this.setState({ alTotal: alTotalPoints });

        // Totals for Joe
        var joeTotalPoints = parseInt((this.state.joeNBA)) + parseInt((this.state.joeNHL)) + parseInt((this.state.joeNFL)) + parseInt((this.state.joeEPL));
        this.setState({ joeTotal: joeTotalPoints });

        // Totals for Steids
        var steidsTotalPoints = parseInt((this.state.steidsNBA)) + parseInt((this.state.steidsNHL)) + parseInt((this.state.steidsNFL)) + parseInt((this.state.steidsEPL));
        this.setState({ steidsTotal: steidsTotalPoints });

        // Totals for Ben
        var benTotalPoints = parseInt((this.state.benNBA)) + parseInt((this.state.benNHL)) + parseInt((this.state.benNFL)) + parseInt((this.state.benEPL));
        this.setState({ benTotal: benTotalPoints });
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
                // NHL FOR TOM 
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(pacificResults)
                var knightsWins;
                var knightsOTLS;
                var knightsTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var totalNHL;

                // Here is the Blackhawks for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        console.log(blackhawksWins);
                        console.log(blackhawksOTLS);
                        console.log("this loop is running")
                    }
                }
                // blackhawks total
                blackhawksTotal = (blackhawksWins * 2) + blackhawksOTLS;
                // console.log(blackhawksTotal)

                // Here is the loop for the Canucks and Knights, who are in the same division. 
                for (var i = 0; i < pacificResults.length; i++) {

                    // Knights
                    if (pacificResults[i].team.id === 54) {
                        knightsWins = pacificResults[i].leagueRecord.wins;
                        knightsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(knightsWins);
                        console.log(knightsOTLS);
                        console.log("this loop is running")
                    }
                    // Canucks
                    if (pacificResults[i].team.id === 23) {
                        canucksWins = pacificResults[i].leagueRecord.wins;
                        canucksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(canucksWins);
                        console.log(canucksOTLS);
                        console.log("this loop is running")
                    }
                }

                // knights total
                knightsTotal = (knightsWins * 2) + knightsOTLS;
                console.log(knightsTotal);

                // canucks total
                canucksTotal = (canucksWins * 2) + canucksOTLS;
                console.log(canucksTotal);

                var allNHL = knightsTotal + canucksTotal + blackhawksTotal

                this.setState({ tomNHL: allNHL });
                this.setState({ knights: knightsTotal });
                this.setState({ canucks: canucksTotal });
                this.setState({ blackhawks: blackhawksTotal });

                // start of Patrick NHL: 
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);
                var islandersWins;
                var islandersOTLS;
                var islandersTotal;
                var ducksWins;
                var ducksOTLS;
                var ducksTotal;
                var kingsWins;
                var kingsOTLS;
                var kingsTotal;
                var allNHL;

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < pacificResults.length; i++) {
                    // ducks
                    if (pacificResults[i].team.id === 24) {
                        ducksWins = pacificResults[i].leagueRecord.wins;
                        ducksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(ducksWins);
                        console.log(ducksOTLS);
                        console.log("this loop is running")
                    }

                    // kings
                    if (pacificResults[i].team.id === 26) {
                        kingsWins = pacificResults[i].leagueRecord.wins;
                        kingsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(kingsWins);
                        console.log(kingsOTLS);
                        console.log("this loop is running")
                    }
                }
                // ducks total
                ducksTotal = (ducksWins * 2) + ducksOTLS;
                console.log(ducksTotal)

                // Here is the loop for the islanders
                for (var i = 0; i < metroResults.length; i++) {

                    // islanders
                    if (metroResults[i].team.id === 2) {
                        islandersWins = metroResults[i].leagueRecord.wins;
                        islandersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(islandersWins);
                        console.log(islandersOTLS);
                        console.log("this loop is running")
                    }
                }

                // islanders total
                islandersTotal = (islandersWins * 2) + islandersOTLS;
                console.log(islandersTotal);

                // ducks total
                kingsTotal = (kingsWins * 2) + kingsOTLS;
                console.log(kingsTotal);

                var allNHL = islandersTotal + ducksTotal + kingsTotal

                this.setState({ patNHL: allNHL });
                this.setState({ islanders: islandersTotal });
                this.setState({ ducks: ducksTotal });
                this.setState({ kings: kingsTotal });

                // Start of James NHL here

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(centralResults);
                var flamesWins;
                var flamesOTLS;
                var flamesTotal;
                var pensWins;
                var pensOTLS;
                var pensTotal;
                var wildWins;
                var wildOTLS;
                var wildTotal;
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

                // flames total
                flamesTotal = (flamesWins * 2) + flamesOTLS;
                console.log(flamesTotal);

                // Here is the loop for the pens
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

                for (var i = 0; i < centralResults.length; i++) {

                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        console.log(wildWins);
                        console.log(wildOTLS);
                        console.log("this loop is running")
                    }
                }

                // pens total
                pensTotal = (pensWins * 2) + pensOTLS;
                console.log(pensTotal)

                // wild total
                wildTotal = (wildWins * 2) + wildOTLS;
                console.log(wildTotal);

                var allNHL = flamesTotal + pensTotal + wildTotal

                this.setState({ jamesNHL: allNHL });
                this.setState({ flames: flamesTotal });
                this.setState({ pens: pensTotal });
                this.setState({ wild: wildTotal });

                //  starting Neptune NHL here

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);
                var sharksWins;
                var sharksOTLS;
                var sharksTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var allNHL;

                // Here is the sharks loop. 
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

                // sharks total
                sharksTotal = (sharksWins * 2) + sharksOTLS;
                console.log(sharksTotal);

                // Here is the loop for the sharks
                for (var i = 0; i < metroResults.length; i++) {

                    // devils
                    if (metroResults[i].team.id === 1) {
                        devilsWins = metroResults[i].leagueRecord.wins;
                        devilsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(devilsWins);
                        console.log(devilsOTLS);
                        console.log("this loop is running")
                    }

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
                console.log(rangersTotal)

                // rangers total
                devilsTotal = (devilsWins * 2) + devilsOTLS;
                console.log(devilsTotal);

                var allNHL = sharksTotal + rangersTotal + devilsTotal

                this.setState({ neptuneNHL: allNHL });
                this.setState({ sharks: sharksTotal });
                this.setState({ rangers: rangersTotal });
                this.setState({ devils: devilsTotal });

                // Starting DJ NHL Here 

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);

                var jetsWins;
                var jetsOTLS;
                var jetsTotal;
                var canesWins;
                var canesOTLS;
                var canesTotal;
                var coyotesWins;
                var coyotesOTLS;
                var coyotesTotal;
                var allNHL;

                // Here is the jets loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // jets
                    if (centralResults[i].team.id === 52) {
                        jetsWins = centralResults[i].leagueRecord.wins;
                        jetsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(jetsWins);
                        console.log(jetsOTLS);
                        console.log("this loop is running")
                    }
                }

                // jets total
                jetsTotal = (jetsWins * 2) + jetsOTLS;
                console.log(jetsTotal);

                for (var i = 0; i < pacificResults.length; i++) {

                    // coyotes
                    if (pacificResults[i].team.id === 53) {
                        coyotesWins = pacificResults[i].leagueRecord.wins;
                        coyotesOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(coyotesWins);
                        console.log(coyotesOTLS);
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

                // canes total
                canesTotal = (canesWins * 2) + canesOTLS;
                console.log(canesTotal)

                // coyotes total
                coyotesTotal = (coyotesWins * 2) + coyotesOTLS;
                console.log(coyotesTotal);

                var allNHL = jetsTotal + canesTotal + coyotesTotal

                this.setState({ djNHL: allNHL });
                this.setState({ jets: jetsTotal });
                this.setState({ canes: canesTotal });
                this.setState({ coyotes: coyotesTotal });

                // starting Goose NHL here 

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(centralResults);
                var predsWins;
                var predsOTLS;
                var predsTotal;
                var starsWins;
                var starsOTLS;
                var starsTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var allNHL;

                // Here is the preds and Stars loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // preds
                    if (centralResults[i].team.id === 18) {
                        predsWins = centralResults[i].leagueRecord.wins;
                        predsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(predsWins);
                        console.log(predsOTLS);
                        console.log("this loop is running")
                    }

                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(starsWins);
                        console.log(starsOTLS);
                        console.log("this loop is running")
                    }
                }

                // preds total
                predsTotal = (predsWins * 2) + predsOTLS;
                console.log(predsTotal);

                for (var i = 0; i < atlanticResults.length; i++) {

                    // canadians
                    if (atlanticResults[i].team.id === 8) {
                        canadiansWins = atlanticResults[i].leagueRecord.wins;
                        canadiansOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(canadiansWins);
                        console.log(canadiansOTLS);
                        console.log("this loop is running")
                    }
                }

                // stars total
                starsTotal = (starsWins * 2) + starsOTLS;
                console.log(starsTotal)

                // canadians total
                canadiansTotal = (canadiansWins * 2) + canadiansOTLS;
                console.log(canadiansTotal);

                var allNHL = predsTotal + starsTotal + canadiansTotal

                this.setState({ gooseNHL: allNHL });
                this.setState({ preds: predsTotal });
                this.setState({ stars: starsTotal });
                this.setState({ canadians: canadiansTotal });

                // starting Al NHL here 

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults);

                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var wingsWins;
                var wingsOTLS;
                var wingsTotal;
                var allNHL;

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

                    // wings
                    if (atlanticResults[i].team.id === 17) {
                        wingsWins = atlanticResults[i].leagueRecord.wins;
                        wingsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(wingsWins);
                        console.log(wingsOTLS);
                        console.log("this loop is running")
                    }

                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }
                }

                // lightning total
                lightningTotal = (lightningWins * 2) + lightningOTLS;
                console.log(lightningTotal);

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal)

                // wings total
                wingsTotal = (wingsWins * 2) + wingsOTLS;
                console.log(wingsTotal);

                var allNHL = lightningTotal + bruinsTotal + wingsTotal

                this.setState({ alNHL: allNHL });
                this.setState({ lightning: lightningTotal });
                this.setState({ bruins: bruinsTotal });
                this.setState({ wings: wingsTotal });

                // starting Joe NHL here 

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);
                var bluesWins;
                var bluesOTLS;
                var bluesTotal;
                var jacketsWins;
                var jacketsOTLS;
                var jacketsTotal;
                var oilersWins;
                var oilersOTLS;
                var oilersTotal;
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

                // blues total
                bluesTotal = (bluesWins * 2) + bluesOTLS;
                console.log(bluesTotal);

                // Here is the loop for the jackets
                for (var i = 0; i < metroResults.length; i++) {

                    // jackets
                    if (metroResults[i].team.id === 29) {
                        jacketsWins = metroResults[i].leagueRecord.wins;
                        jacketsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(jacketsWins);
                        console.log(jacketsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // oilers
                    if (pacificResults[i].team.id === 22) {
                        oilersWins = pacificResults[i].leagueRecord.wins;
                        oilersOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(oilersWins);
                        console.log(oilersOTLS);
                        console.log("this loop is running")
                    }
                }

                // jackets total
                jacketsTotal = (jacketsWins * 2) + jacketsOTLS;
                console.log(jacketsTotal)

                // oilers total
                oilersTotal = (oilersWins * 2) + oilersOTLS;
                console.log(oilersTotal);

                var allNHL = bluesTotal + jacketsTotal + oilersTotal

                this.setState({ joeNHL: allNHL });
                this.setState({ blues: bluesTotal });
                this.setState({ jackets: jacketsTotal });
                this.setState({ oilers: oilersTotal });

                // starting Steids NHL here

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults)
                var capsWins;
                var capsOTLS;
                var capsTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var sabresWins;
                var sabresOTLS;
                var sabresTotal;
                var allNHL;

                // Here is the panthers for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (atlanticResults[i].team.id === 13) {
                        panthersWins = atlanticResults[i].leagueRecord.wins;
                        panthersOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }

                    // sabres
                    if (atlanticResults[i].team.id === 7) {
                        sabresWins = atlanticResults[i].leagueRecord.wins;
                        sabresOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(sabresWins);
                        console.log(sabresOTLS);
                        console.log("this loop is running")
                    }
                }
                // panthers total
                panthersTotal = (panthersWins * 2) + panthersOTLS;
                console.log(panthersTotal)

                // Here is the loop for the caps
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

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal);

                // sabres total
                sabresTotal = (sabresWins * 2) + sabresOTLS;
                console.log(sabresTotal);

                var allNHL = capsTotal + sabresTotal + panthersTotal

                this.setState({ steidsNHL: allNHL });
                this.setState({ caps: capsTotal });
                this.setState({ sabres: sabresTotal });
                this.setState({ panthers: panthersTotal });

                // starting Ben NHL here

                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);

                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var flyersWins;
                var flyersOTLS;
                var flyersTotal;
                var allNHL;

                // Here is the leafs loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // leafs
                    if (atlanticResults[i].team.id === 10) {
                        leafsWins = atlanticResults[i].leagueRecord.wins;
                        leafsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(leafsWins);
                        console.log(leafsOTLS);
                        console.log("this loop is running")
                    }
                }

                // leafs total
                leafsTotal = (leafsWins * 2) + leafsOTLS;
                console.log(leafsTotal);

                for (var i = 0; i < metroResults.length; i++) {

                    // flyers
                    if (metroResults[i].team.id === 4) {
                        flyersWins = metroResults[i].leagueRecord.wins;
                        flyersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(flyersWins);
                        console.log(flyersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // avalanche
                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        console.log(avalancheWins);
                        console.log(avalancheOTLS);
                        console.log("this loop is running")
                    }
                }

                // avalanche total
                avalancheTotal = (avalancheWins * 2) + avalancheOTLS;
                console.log(avalancheTotal)

                // flyers total
                flyersTotal = (flyersWins * 2) + flyersOTLS;
                console.log(flyersTotal);

                var allNHL = leafsTotal + avalancheTotal + flyersTotal

                this.setState({ benNHL: allNHL });
                this.setState({ leafs: leafsTotal });
                this.setState({ avalanche: avalancheTotal });
                this.setState({ flyers: flyersTotal });

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
                var forLoopArray = res.data.api.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team_id === 49) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + chelseaWin);
                        console.log("here are the ties" + chelseaTie);
                    }

                    if (forLoopArray[i].team_id === 51) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + brightonWin);
                        console.log("here are the ties" + brightonTie);
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var brightonTotal = (brightonWin * 4.25) + (brightonTie);

                // Here is the final result
                var tomPoints = chelseaTotal + brightonTotal;
                this.setState({ tomEPL: tomPoints });

                // HERE ARE EPL TEAMS FOR Patrick. 
                //   Starting Patrick EPL Here 
                var manCityWin;
                var manCityTie;
                var wolvesWin;
                var wolvesTie;

                // Patrick EPL here
                // running the for loop here. 
                var forLoopArray = res.data.api.standings[0]
                
                console.log (forLoopArray)

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team_id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manCityWin);
                        console.log("here are the ties" + manCityTie);
                    }

                    if (forLoopArray[i].team_id === 39) {
                        wolvesWin = forLoopArray[i].all.win
                        wolvesTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + wolvesWin);
                        console.log("here are the ties" + wolvesTie);
                    }
                }

                var manCityTotal = (manCityWin * 4.25) + (manCityTie);
                var wolvesTotal = (wolvesWin * 4.25) + (wolvesTie);

                // Here is the final result
                var patPoints = manCityTotal + wolvesTotal;
                this.setState({ patEPL: patPoints });


                 //   Starting Neptune EPL Here 
                 var newcastleWin;
                 var newcastleTie;
                 var palaceWin;
                 var palaceTie;
                
                //  James EPL here 
                 // running the for loop here. 
                 var forLoopArray = res.data.api.standings[0];
                 console.log(forLoopArray);
 
                 for (var i = 0; i < forLoopArray.length; i++) {
 
                     if (forLoopArray[i].team_id === 34) {
                         newcastleWin = forLoopArray[i].all.win
                         newcastleTie = forLoopArray[i].all.draw
                         //then so something
                         //return something here
                         console.log("here are the wins" + newcastleWin);
                         console.log("here are the ties" + newcastleTie);
                     }
 
                     if (forLoopArray[i].team_id === 52) {
                         palaceWin = forLoopArray[i].all.win
                         palaceTie = forLoopArray[i].all.draw
                         //then so something
                         //return something here
                         console.log("here are the wins" + palaceWin);
                         console.log("here are the ties" + palaceTie);
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
                var forLoopArray = res.data.api.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team_id === 46) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leicesterWin);
                        console.log("here are the ties" + leicesterTie);
                    }

                    if (forLoopArray[i].team_id === 71) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + norwichWin);
                        console.log("here are the ties" + norwichTie);
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
               var forLoopArray = res.data.api.standings[0];
               console.log(forLoopArray);

               for (var i = 0; i < forLoopArray.length; i++) {

                   if (forLoopArray[i].team_id === 62) {
                       sheffieldWin = forLoopArray[i].all.win
                       sheffieldTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + sheffieldWin);
                       console.log("here are the ties" + sheffieldTie);
                   }

                   if (forLoopArray[i].team_id === 44) {
                       burnleyWin = forLoopArray[i].all.win
                       burnleyTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + burnleyWin);
                       console.log("here are the ties" + burnleyTie);
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
                var forLoopArray = res.data.api.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team_id === 33) {
                        manuWin = forLoopArray[i].all.win
                        manuTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manuWin);
                        console.log("here are the ties" + manuTie);
                    }

                    if (forLoopArray[i].team_id === 48) {
                        westhamWin = forLoopArray[i].all.win
                        westhamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + westhamWin);
                        console.log("here are the ties" + westhamTie);
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
               var forLoopArray = res.data.api.standings[0];
               console.log(forLoopArray);

               for (var i = 0; i < forLoopArray.length; i++) {

                   if (forLoopArray[i].team_id === 45) {
                       evertonWin = forLoopArray[i].all.win
                       evertonTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + evertonWin);
                       console.log("here are the ties" + evertonTie);
                   }

                   if (forLoopArray[i].team_id === 41) {
                       southhamptonWin = forLoopArray[i].all.win
                       southhamptonTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + southhamptonWin);
                       console.log("here are the ties" + southhamptonTie);
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
               var forLoopArray = res.data.api.standings[0];
               console.log(forLoopArray);

               for (var i = 0; i < forLoopArray.length; i++) {

                   if (forLoopArray[i].team_id === 40) {
                       liverpoolWin = forLoopArray[i].all.win
                       liverpoolTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + liverpoolWin);
                       console.log("here are the ties" + liverpoolTie);
                   }

                   if (forLoopArray[i].team_id === 66) {
                       astonWin = forLoopArray[i].all.win
                       astonTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + astonWin);
                       console.log("here are the ties" + astonTie);
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
               var forLoopArray = res.data.api.standings[0];
               console.log(forLoopArray);

               for (var i = 0; i < forLoopArray.length; i++) {

                   if (forLoopArray[i].team_id === 47) {
                       tottenhamWin = forLoopArray[i].all.win
                       tottenhamTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + tottenhamWin);
                       console.log("here are the ties" + tottenhamTie);
                   }

                   if (forLoopArray[i].team_id === 35) {
                       bournemouthWin = forLoopArray[i].all.win
                       bournemouthTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + bournemouthWin);
                       console.log("here are the ties" + bournemouthTie);
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
                var forLoopArray = res.data.api.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team_id === 42) {
                        arsenalWin = forLoopArray[i].all.win
                        arsenalTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + arsenalWin);
                        console.log("here are the ties" + arsenalTie);
                    }

                    if (forLoopArray[i].team_id === 38) {
                        watfordWin = forLoopArray[i].all.win
                        watfordTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + watfordWin);
                        console.log("here are the ties" + watfordTie);
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
                // HERE ARE NBA TEAMS FOR TOMMY. 
                // console.log(res);
                // console.log(res.data.api.standings);
                var heatWin = res.data.api.standings[2].win;
                var netsWin = res.data.api.standings[8].win;
                var spursWin = res.data.api.standings[16].win;

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(heatWin);
                tempTomNBA.push(netsWin);
                tempTomNBA.push(spursWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                // console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });

                // PATRICK
                var lakersWin = res.data.api.standings[23].win;
                var warriorsWin = res.data.api.standings[20].win;
                var jazzWin = res.data.api.standings[27].win;

                const tempPatrickNBA = [];

                tempPatrickNBA.push(lakersWin);
                tempPatrickNBA.push(warriorsWin);
                tempPatrickNBA.push(jazzWin);

                var patDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < patDoubledScores.length; i++) {
                    PatrickPoints += patDoubledScores[i];
                }
                // console.log(PatrickPoints);
                this.setState({ patrickNBA: PatrickPoints });

                // James
                var bucksWin = res.data.api.standings[10].win;
                var thunderWin = res.data.api.standings[28].win;
                var sunsWin = res.data.api.standings[24].win;

                const tempJamesNBA = [];

                tempJamesNBA.push(bucksWin);
                tempJamesNBA.push(thunderWin);
                tempJamesNBA.push(sunsWin);

                var jamesDoubledScores = tempJamesNBA.map(team => team * 2);

                var jamesPoints = 0;

                for (var i = 0; i < jamesDoubledScores.length; i++) {
                    jamesPoints += jamesDoubledScores[i];
                }
                // console.log(jamesPoints);
                this.setState({ jamesNBA: jamesPoints });

                // Neptune
                var celticsWin = res.data.api.standings[7].win;
                var pacersWin = res.data.api.standings[11].win;
                var hornetsWin = res.data.api.standings[1].win;

                const tempNeptuneNBA = [];

                tempNeptuneNBA.push(celticsWin);
                tempNeptuneNBA.push(pacersWin);
                tempNeptuneNBA.push(hornetsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                // console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });

                // DJ
                var sixersWin = res.data.api.standings[6].win;
                var rocketsWin = res.data.api.standings[15].win;
                var timberwolvesWin = res.data.api.standings[29].win;

                const tempDJNBA = [];

                tempDJNBA.push(sixersWin);
                tempDJNBA.push(rocketsWin);
                tempDJNBA.push(timberwolvesWin);

                var DJDoubledScores = tempDJNBA.map(team => team * 2);

                var DJPoints = 0;

                for (var i = 0; i < DJDoubledScores.length; i++) {
                    DJPoints += DJDoubledScores[i];
                }
                // console.log(DJPoints);
                this.setState({ djNBA: DJPoints });

                // Goose
                var raptorsWin = res.data.api.standings[5].win;
                var pistonsWin = res.data.api.standings[12].win;
                var knicksWin = res.data.api.standings[9].win;

                const tempGooseNBA = [];

                tempGooseNBA.push(raptorsWin);
                tempGooseNBA.push(pistonsWin);
                tempGooseNBA.push(knicksWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                // console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });

                // Al
                var mavericksWin = res.data.api.standings[19].win;
                var magicWin = res.data.api.standings[0].win;
                var wizardsWin = res.data.api.standings[3].win;

                const tempAlNBA = [];

                tempAlNBA.push(mavericksWin);
                tempAlNBA.push(magicWin);
                tempAlNBA.push(wizardsWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                // console.log(AlPoints);
                this.setState({ alNBA: AlPoints });

                // Joe
                var nuggetsWin = res.data.api.standings[25].win;
                var blazersWin = res.data.api.standings[26].win;
                var kingsWin = res.data.api.standings[22].win;

                const tempJoeNBA = [];

                tempJoeNBA.push(nuggetsWin);
                tempJoeNBA.push(blazersWin);
                tempJoeNBA.push(kingsWin);

                var JoeDoubledScores = tempJoeNBA.map(team => team * 2);

                var JoePoints = 0;

                for (var i = 0; i < JoeDoubledScores.length; i++) {
                    JoePoints += JoeDoubledScores[i];
                }
                // console.log(JoePoints);
                this.setState({ joeNBA: JoePoints });

                // Steids
                var clippersWin = res.data.api.standings[21].win;
                var hawksWin = res.data.api.standings[4].win;
                var bullsWin = res.data.api.standings[13].win;

                const tempSteidsNBA = [];

                tempSteidsNBA.push(clippersWin);
                tempSteidsNBA.push(hawksWin);
                tempSteidsNBA.push(bullsWin);

                var SteidsDoubledScores = tempSteidsNBA.map(team => team * 2);

                var SteidsPoints = 0;

                for (var i = 0; i < SteidsDoubledScores.length; i++) {
                    SteidsPoints += SteidsDoubledScores[i];
                }
                // console.log(SteidsPoints);
                this.setState({ steidsNBA: SteidsPoints });

                // Ben
                var pelicansWin = res.data.api.standings[18].win;
                var grizzliesWin = res.data.api.standings[17].win;
                var cavsWin = res.data.api.standings[14].win;

                const tempBenNBA = [];

                tempBenNBA.push(pelicansWin);
                tempBenNBA.push(grizzliesWin);
                tempBenNBA.push(cavsWin);

                var BenDoubledScores = tempBenNBA.map(team => team * 2);

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
            // THIS IS THE OLD TABLE IF I END UP NEEDING IT BACK. 
            // <div class="container">
            //     <table class="table table-bordered table-striped table-hover">
            //         <thead class="thead-dark">
            //             <tr>
            //                 <th scope="col">Team</th>
            //                 <th scope="col">EPL</th>
            //                 <th scope="col">NFL</th>
            //                 <th scope="col">NHL</th>
            //                 <th scope="col">NBA</th>
            //                 <th scope="col">MLB</th>
            //                 <th scope="col">Total Points</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Tommy</th>
            //                 <th scope="col">{this.state.tomEPL}</th>
            //                 <th scope="col">{this.state.tomNFL}</th>
            //                 <th scope="col">{this.state.tomNHL}</th>
            //                 <th scope="col">{this.state.tomNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.tomTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Patrick</th>
            //                 <th scope="col">{this.state.patEPL}</th>
            //                 <th scope="col">{this.state.patNFL}</th>
            //                 <th scope="col">{this.state.patNHL}</th>
            //                 <th scope="col">{this.state.patrickNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.patTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">James</th>
            //                 <th scope="col">{this.state.jamesEPL}</th>
            //                 <th scope="col">{this.state.jamesNFL}</th>
            //                 <th scope="col">{this.state.jamesNHL}</th>
            //                 <th scope="col">{this.state.jamesNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.jamesTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Neptune</th>
            //                 <th scope="col">{this.state.neptuneEPL}</th>
            //                 <th scope="col">{this.state.neptuneNFL}</th>
            //                 <th scope="col">{this.state.neptuneNHL}</th>
            //                 <th scope="col">{this.state.neptuneNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.neptuneTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">DJ</th>
            //                 <th scope="col">{this.state.djEPL}</th>
            //                 <th scope="col">{this.state.djNFL}</th>
            //                 <th scope="col">{this.state.djNHL}</th>
            //                 <th scope="col">{this.state.djNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.djTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Goose</th>
            //                 <th scope="col">{this.state.gooseEPL}</th>
            //                 <th scope="col">{this.state.gooseNFL}</th>
            //                 <th scope="col">{this.state.gooseNHL}</th>
            //                 <th scope="col">{this.state.gooseNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.gooseTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Al</th>
            //                 <th scope="col">{this.state.alEPL}</th>
            //                 <th scope="col">{this.state.alNFL}</th>
            //                 <th scope="col">{this.state.alNHL}</th>
            //                 <th scope="col">{this.state.alNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.alTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Joe</th>
            //                 <th scope="col">{this.state.joeEPL}</th>
            //                 <th scope="col">{this.state.joeNFL}</th>
            //                 <th scope="col">{this.state.joeNHL}</th>
            //                 <th scope="col">{this.state.joeNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.joeTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Steids</th>
            //                 <th scope="col">{this.state.steidsEPL}</th>
            //                 <th scope="col">{this.state.steidsNFL}</th>
            //                 <th scope="col">{this.state.steidsNHL}</th>
            //                 <th scope="col">{this.state.steidsNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.steidsTotal}</th>
            //             </tr>
            //         </tbody>
            //         <tbody>
            //             <tr>
            //                 <th scope="col">Ben</th>
            //                 <th scope="col">{this.state.benEPL}</th>
            //                 <th scope="col">{this.state.benNFL}</th>
            //                 <th scope="col">{this.state.benNHL}</th>
            //                 <th scope="col">{this.state.benNBA}</th>
            //                 <th scope="col">0</th>
            //                 <th scope="col">{this.state.benTotal}</th>
            //             </tr>
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}

// Let's export the table.
export default Table; 
