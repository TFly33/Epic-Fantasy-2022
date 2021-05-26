import React from "react";
import API from "../../utils/API";

class joe extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        joeNBA: "",
        bucks: "",
        grizzlies: "",
        bulls: "",
        colts: "",
        vibulls: "",
        raiders: "",
        totalNFL: "",
        // EPL HERE
        liverpool: "",
        aston: "",
        joeEPL: "",
        // NHL Here
        blues: "",
        jackets: "",
        oilers: "",
        // PGA Here
        dechambeau: "",
        rose: "",
        scott: "",
        kisner: "",
        kim: "",
        totalPGA: "",
        // MLB HERE
        wsox:"",
        rsox:"",
        indians:"",
        totalMLB:""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresMLB();
    };

    getScoresPGA = () => {
        // Joe's PGA Here. Golf Team 2. 
        var Dechambeau = 84
        var Rose = 15
        var Scott = 14
        var Kisner = 25
        var Kim = 46
        var pgaTotal = Dechambeau + Rose + Scott + Kisner + Kim
        this.setState({ totalPGA: pgaTotal });
        this.setState({ dechambeau: Dechambeau });
        this.setState({ rose: Rose });
        this.setState({ scott: Scott });
        this.setState({ kisner: Kisner });
        this.setState({ kim: Kim });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
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

                var allMLB = wsoxWin + rsoxWin + indiansWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ wsox: wsoxWin });
                this.setState({ indians: indiansWin });
                this.setState({ rsox: rsoxWin });

            });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // starting Joe NHL here 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                this.setState({ totalNHL: allNHL });
                this.setState({ knights: knightsTotal });
                this.setState({ sabres: sabresTotal });
                this.setState({ senators: senatorsTotal });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Neptune EPL Here 
                var liverpoolWin;
                var liverpoolTie;
                var astonWin;
                var astonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 45) {
                        liverpoolWin = forLoopArray[i].all.win
                        liverpoolTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + liverpoolWin);
                        console.log("here are the ties" + liverpoolTie);
                    }

                    if (forLoopArray[i].team.id === 48) {
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
                this.setState({ liverpool: liverpoolTotal });
                this.setState({ aston: astonTotal });
                this.setState({ joeEPL: joePoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // 2021 Joe NBA Teams. 
                // Bucks
                var bucksWin = res.data.api.standings[13].win;
                var grizzliesWin = res.data.api.standings[17].win;
                var bullsWin = res.data.api.standings[10].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublebucks = (bucksWin * 2.25);
                var doublegrizzlies = (grizzliesWin * 2.25);
                var doublebulls = (bullsWin * 2.25);

                const tempjoeNBA = this.state.allNBA;

                tempjoeNBA.push(bucksWin);
                tempjoeNBA.push(grizzliesWin);
                tempjoeNBA.push(bullsWin);

                var joeDoubledScores = tempjoeNBA.map(team => team * 2.25);

                var joePoints = 0;

                for (var i = 0; i < joeDoubledScores.length; i++) {
                    joePoints += joeDoubledScores[i];
                }
                console.log(joePoints);
                this.setState({ joeNBA: joePoints });
                this.setState({ bucks: doublebucks });
                this.setState({ grizzlies: doublegrizzlies });
                this.setState({ bulls: doublebulls });
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
                        Joe
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
                                        <th scope="row">2</th>
                                        <td className="bucks">Milwaukee Bucks</td>
                                        <td>{this.state.bucks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">75</th>
                                        <td className="grizzlies">Memphis Grizzlies</td>
                                        <td>{this.state.grizzlies}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">85</th>
                                        <td className="bulls">Chicago Bulls</td>
                                        <td>{this.state.bulls}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.joeNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container smallTable">
                            {/* Here is NFL */}
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
                                                <th scope="row">66</th>
                                                <td className="redskins">Washington Football Team</td>
                                                <td>{this.state.colts}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">110</th>
                                                <td className="falcons">Atlanta Falcons</td>
                                                <td>{this.state.vibulls}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">111</th>
                                                <td className="texans">Houston Texans</td>
                                                <td>{this.state.raiders}</td>
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
                                                <th scope="row">19</th>
                                                <td className="everton">Everton</td>
                                                <td>{this.state.liverpool}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">38</th>
                                                <td className="westHam">West Ham United</td>
                                                <td>{this.state.aston}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.joeEPL}</td>
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
                                                <th scope="row">23</th>
                                                <td className="knights">Vegas Knights</td>
                                                <td>{this.state.knights}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">121</th>
                                                <td className="sabres">Buffalo Sabres</td>
                                                <td>{this.state.sabres}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">145</th>
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

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
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
                                                <th scope="row">43</th>
                                                <td className="whiteSox">Chicago White Sox</td>
                                                <td>{this.state.wsox}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">57</th>
                                                <td className="indians">Cleveland Indians</td>
                                                <td>{this.state.indians}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">96</th>
                                                <td className="redSox">Boston Red Sox</td>
                                                <td>{this.state.rsox}</td>
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

                        <div className="container smallTable">
                            <div className="row">
                                <div className="col">
                                    {/* Here is PGA */}
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
                                                <th scope="row">133</th>
                                                <td className="">Bryson Dechambeau</td>
                                                <td>{this.state.dechambeau}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Justin Rose</td>
                                                <td>{this.state.rose}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Adam Scott</td>
                                                <td>{this.state.scott}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Kevin Kisner</td>
                                                <td>{this.state.kisner}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Si Woo Kim</td>
                                                <td>{this.state.kim}</td>
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

export default joe;