import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";
// import { mlbHelper } from "../../middleware/mlb";

class tommy extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        mavs: "",
        blazers: "",
        spurs: "",
        // NFL Here
        // fourtyNiners: 130,
        // seahawks: 110,
        // patriots: 120,
        // totalNFL: 360,
        // Adding EPL Results Here:
        arsenal: "",
        wolves: "",
        eplTotal: "",
        // NHL States here 
        sharks: "",
        flyers: "",
        senators: "",
        totalNHL: "",
        // Golf here
        schauffele: "",
        niemann: "",
        mcnealy: "",
        henley: "",
        tringale: "",
        totalGolf: "",
        // MLB Here
        rays: 86,
        whiteSox: 81,
        braves: 101,
        totalMLB: "",
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresNHL();
        this.getScoresEPL();
        this.getScoresPGA();
        // this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ chiefs: x.Chiefs });
        this.setState({ saints: x.Saints });
        this.setState({ vikings: x.Vikings });
        var allNFL = (x.Chiefs + x.Saints + x.Vikings)
        this.setState({ totalNFL: allNFL });
    }

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ niemann: x.Niemann });
        this.setState({ schauffele: x.Schauffele });
        this.setState({ mcnealy: x.Mcnealy });
        this.setState({ henley: x.Henley });
        this.setState({ tringale: x.Tringale });
        var allGolf = x.Tringale + x.Niemann + x.Schauffele + x.Henley + x.Niemann;
        this.setState({ totalGolf: allGolf });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
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

                var allMLB = raysWin + bravesWin + whiteSoxWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ rays: raysWin });
                this.setState({ braves: bravesWin });
                this.setState({ whiteSox: whiteSoxWin });

            });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(pacificResults)
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
                        // console.log(flyersWins);
                        // console.log(flyersOTLS);
                        // console.log("this loop is running")
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
                        // console.log(sharksWins);
                        // console.log(sharksOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the flyers for loop. 
                for (var i = 0; i < metroResults.length; i++) {

                    // senators
                    if (atlanticResults[i].team.id === 9) {
                        senatorsWins = atlanticResults[i].leagueRecord.wins;
                        senatorsOTLS = atlanticResults[i].leagueRecord.ot;
                        // console.log(senatorsWins);
                        // console.log(senatorsOTLS);
                        // console.log("this loop is running")
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

                var allNHL = flyersTotal + senatorsTotal + sharksTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ flyers: flyersTotal });
                this.setState({ senators: senatorsTotal });
                this.setState({ sharks: sharksTotal });

            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
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
                this.setState({ arsenal: arsenalTotal });
                this.setState({ wolves: wolvesTotal });
                this.setState({ eplTotal: tomPoints });

                // And now I need to run the totalscores function so that it can get logged. 
                // this.totalScores();

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY. 
                // console.log(res);
                console.log(res.data.api.standings);
                var mavsWin = res.data.api.standings[17].win;
                var blazersWin = res.data.api.standings[28].win;
                var spursWin = res.data.api.standings[18].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublemavs = (mavsWin * 2);
                var doubleblazers = (blazersWin * 2);
                var doubleSpurs = (spursWin * 2);

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(mavsWin);
                tempTomNBA.push(blazersWin);
                tempTomNBA.push(spursWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });
                this.setState({ mavs: doublemavs });
                this.setState({ blazers: doubleblazers });
                this.setState({ spurs: doubleSpurs });
            })
            .catch(error => {
                console.log(error)
            });
    }


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div class="text-center">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/Home">Epic Fantasy League</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/Home">Standings</a>
                            </li>
                            <li class="nav-item active">
                                <div class="dropdown show">
                                    <div class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="tommy">Tommy</a>
                                        <a class="dropdown-item" href="patrick">Patrick</a>
                                        <a class="dropdown-item" href="james">James</a>
                                        <a class="dropdown-item" href="neptune">Neptune</a>
                                        <a class="dropdown-item" href="dj">DJ</a>
                                        <a class="dropdown-item" href="goose">Goose</a>
                                        <a class="dropdown-item" href="al">Al</a>
                                        <a class="dropdown-item" href="joe">Joe</a>
                                        <a class="dropdown-item" href="steids">Steids</a>
                                        <a class="dropdown-item" href="ben">Eres</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="/draft">Draft Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/points">Points System</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Tommy
                    </div>
                </div>
                {/* Starting my new tables here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
                            {/* Here is NBA */}
                            <table class="table table-striped table-bordered table-hover">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">37</th>
                                        <td className="mavs">Dallas Mavericks</td>
                                        <td>{this.state.mavs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">46</th>
                                        <td className="blazers">Portland Trailblazers</td>
                                        <td>{this.state.blazers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">109</th>
                                        <td className="spurs">San Antonio Spurs</td>
                                        <td>{this.state.spurs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.tomNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td className="chiefs">Kansas City Chiefs</td>
                                                <td>{this.state.chiefs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">76</th>
                                                <td className="saints">New Orleans Saints</td>
                                                <td>{this.state.saints}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">122</th>
                                                <td className="vikings">Minnesota Vikings</td>
                                                <td>{this.state.vikings}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalNFL}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is EPL */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">55</th>
                                                <td className="arsenal">Arsenal</td>
                                                <td>{this.state.arsenal}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">65</th>
                                                <td className="wolverhampton">Wolverhampton</td>
                                                <td>{this.state.wolves}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.eplTotal}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* Adding the NHL Table here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">139</th>
                                                <td className="flyers">Philadelphia Flyers</td>
                                                <td>{this.state.flyers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">160</th>
                                                <td className="sharks">San Jose Sharks</td>
                                                <td>{this.state.sharks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">184</th>
                                                <td className="senators">Ottawa Senators</td>
                                                <td>{this.state.senators}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalNHL}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* MLB Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">24</th>
                                                <td className="rays">Tampa Bay Rays</td>
                                                <td>{this.state.rays}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">90</th>
                                                <td className="braves">Atlanta Braves</td>
                                                <td>{this.state.braves}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">91</th>
                                                <td className="whiteSox">Chicago White Sox</td>
                                                <td>{this.state.whiteSox}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalMLB}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Golf Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">Golfer</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">12</th>
                                                <td className="senators">Xander Schauffele</td>
                                                <td>{this.state.schauffele}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">112</th>
                                                <td className="senators">Joaquin Niemann</td>
                                                <td>{this.state.niemann}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">141</th>
                                                <td className="senators">Maverick McNealy</td>
                                                <td>{this.state.mcnealy}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">163</th>
                                                <td className="senators">Russell Henley</td>
                                                <td>{this.state.henley}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">178</th>
                                                <td className="senators">Cameron Tringale</td>
                                                <td>{this.state.tringale}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalGolf}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

















                    </div>
                </div>

                <body class="d-flex flex-column">
                    <div id="page-content">
                        <div class="container text-center">
                            <div class="row justify-content-center">
                                <div class="col-md-7">
                                    {/* Adding this custom footer I found online. Requires some fake text. Here it is below.  */}
                                    <h1 class="font-weight-light mt-4 text-white">Sticky Footer using Flexbox</h1>
                                    <p class="lead text-white-50">Use just two Bootstrap 4 utility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer id="sticky-footer" class="py-2 bg-dark text-white-50">
                        <div class="container text-center">
                            <small>Copyright &copy; Epic Fantasy League 2020</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default tommy;