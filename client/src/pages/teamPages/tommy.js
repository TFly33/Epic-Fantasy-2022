import React from "react";
import API from "../../utils/API";

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
        blackhawks: "",
        knights: "",
        canucks: "",
        totalNHL: ""
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresNHL();
        this.getScoresEPL();
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                // var metroResults = res.data.records[0].teamRecords;
                // // Atlantic Division
                // var atlanticResults = res.data.records[1].teamRecords;
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
                console.log(blackhawksTotal)

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

                this.setState({ totalNHL: allNHL });
                this.setState({ knights: knightsTotal });
                this.setState({ canucks: canucksTotal });
                this.setState({ blackhawks: blackhawksTotal });

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
                                                <th scope="row">11</th>
                                                <td className="patriots">New England Patriots</td>
                                                <td>{this.state.patriots}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">77</th>
                                                <td className="seahawks">Seattle Seahawks</td>
                                                <td>{this.state.seahawks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">89</th>
                                                <td className="niners">San Francisco 49ers</td>
                                                <td>{this.state.fourtyNiners}</td>
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
                                                <th scope="row">29</th>
                                                <td className="knights">Vegas Knights</td>
                                                <td>{this.state.knights}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">106</th>
                                                <td className="blackhawks">Chicago Blackhawks</td>
                                                <td>{this.state.blackhawks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">113</th>
                                                <td className="canucks">Vancouver Canucks</td>
                                                <td>{this.state.canucks}</td>
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