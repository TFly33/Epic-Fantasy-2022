import React from "react";
import API from "../../utils/API";

class dj extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        djNBA: "",
        clippers: "",
        nuggets: "",
        raptors: "",
        bears: "",
        texans: "",
        broncos: "",
        totalNFL: "",
        // EPL
        sheffield: "",
        burnley: "",
        djEPL: "",
        // NHL 
        jets: "",
        canes: "",
        coyotes: "",
        totalNHL: "",
        // PGA 
        johnson: "",
        day: "",
        niemann: "",
        oosthuizen: "",
        garcia: "",
        totalPGA: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresNHL();
    }

    getScoresPGA = () => {
        // DJ's PGA Here. Golf Team 1. 
        var Johnson = 55
        var Day = 12
        var Niemann = 42
        var Oosthuizen = 20
        var Garcia = 31
        var pgaTotal = Johnson + Day + Niemann + Oosthuizen + Garcia
        this.setState({ totalPGA: pgaTotal });
        this.setState({ johnson: Johnson });
        this.setState({ day: Day });
        this.setState({ niemann: Niemann });
        this.setState({ oosthuizen: Oosthuizen });
        this.setState({ garcia: Garcia });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // Starting DJ NHL Here 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                this.setState({ totalNHL: allNHL });
                this.setState({ flyers: flyersTotal });
                this.setState({ oilers: oilersTotal });
                this.setState({ jets: jetsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Goose EPL Here 
                var sheffieldWin;
                var sheffieldTie;
                var burnleyWin;
                var burnleyTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 60) {
                        sheffieldWin = forLoopArray[i].all.win
                        sheffieldTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + sheffieldWin);
                        console.log("here are the ties" + sheffieldTie);
                    }

                    if (forLoopArray[i].team.id === 62) {
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
                this.setState({ sheffield: sheffieldTotal });
                this.setState({ burnley: burnleyTotal });
                this.setState({ djEPL: djPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // DJ 2021 NBA
                console.log(res.data.api.standings);
                var clippersWin = res.data.api.standings[20].win;
                var nuggetsWin = res.data.api.standings[26].win;
                var raptorsWin = res.data.api.standings[8].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleclippers = (clippersWin * 2.25);
                var doublenuggets = (nuggetsWin * 2.25);
                var doubleraptors = (raptorsWin * 2.25);

                const tempdjNBA = this.state.allNBA;

                tempdjNBA.push(clippersWin);
                tempdjNBA.push(nuggetsWin);
                tempdjNBA.push(raptorsWin);

                var djDoubledScores = tempdjNBA.map(team => team * 2.25);

                var djPoints = 0;

                for (var i = 0; i < djDoubledScores.length; i++) {
                    djPoints += djDoubledScores[i];
                }
                console.log(djPoints);
                this.setState({ djNBA: djPoints });
                this.setState({ clippers: doubleclippers });
                this.setState({ nuggets: doublenuggets });
                this.setState({ raptors: doubleraptors });
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
                                <a class="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
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
                                        <a class="dropdown-item" href="ben">Eres/JMar</a>
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
                        DJ
  </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
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
                                        <th scope="row">10</th>
                                        <td className="clippers">LA Clippers</td>
                                        <td>{this.state.clippers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td className="nuggets">Denver Nuggets</td>
                                        <td>{this.state.nuggets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">32</th>
                                        <td className="raptors">Toronto Raptors</td>
                                        <td>{this.state.raptors}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.djNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
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
                                                <th scope="row">54</th>
                                                <td className="patriots">New England Patriots</td>
                                                <td>{this.state.bears}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">64</th>
                                                <td className="raiders">Vegas Raiders</td>
                                                <td>{this.state.texans}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">123</th>
                                                <td className="bengals">Cincinnati Bengals</td>
                                                <td>{this.state.broncos}</td>
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
                                                <th scope="row">138</th>
                                                <td className="wba">West Bromwich Albion</td>
                                                <td>{this.state.sheffield}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">150</th>
                                                <td className="sheffield">Sheffield United</td>
                                                <td>{this.state.burnley}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.djEPL}</td>
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
                                                <th scope="row">47</th>
                                                <td className="flyers">Philadelphia Flyers</td>
                                                <td>{this.state.flyers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">77</th>
                                                <td className="oilers">Edmonton Oilers</td>
                                                <td>{this.state.oilers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">114</th>
                                                <td className="jets">Winnipeg Jets</td>
                                                <td>{this.state.jets}</td>
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

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLBTeam</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">29</th>
                                                <td className="padres">San Diego Padres</td>
                                                {/* <td>{this.state.jets}</td> */}
                                            </tr>
                                            <tr>
                                                <th scope="row">89</th>
                                                <td className="phillies">Philadelphia Phillies</td>
                                                <td>{this.state.canes}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">92</th>
                                                <td className="brewers">Milwaukee Brewers</td>
                                                <td>{this.state.coyotes}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                {/* <td>{this.state.totalNHL}</td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="container smallTable">
                            <div className="row">
                                <div className="col">
                                    {/* Here is MLB */}
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">Golfer</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">107</th>
                                                <td className="">Dustin Johnson</td>
                                                <td>{this.state.johnson}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Jason Day</td>
                                                <td>{this.state.day}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Joaquinn Niemann</td>
                                                <td>{this.state.niemann}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Louis Oosthuizen</td>
                                                <td>{this.state.oosthuizen}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Sergio Garcia</td>
                                                <td>{this.state.garcia}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalPGA}</td>
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
                            <small>Copyright &copy; Epic Fantasy League 2021</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default dj;