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
        dechambeau:"",
        rose: "",
        scott: "",
        kisner: "",
        kim: "",
        totalPGA: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        // this.getScoresEPL();
        // this.getScoresNHL();
        this.getScoresEPL();
        this.getScoresPGA();
    };

    getScoresPGA = () => {
        // Joe's PGA Here. Golf Team 2. 
        var Dechambeau = 39
        var Rose = 4
        var Scott = 6
        var Kisner = 21
        var Kim = 10
        var pgaTotal = Dechambeau + Rose + Scott + Kisner + Kim
        this.setState({ totalPGA: pgaTotal });
        this.setState({ dechambeau: Dechambeau });
        this.setState({ rose: Rose });
        this.setState({ scott: Scott });
        this.setState({ kisner: Kisner });
        this.setState({ kim: Kim });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                // var atlanticResults = res.data.records[1].teamRecords;
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

                this.setState({ totalNHL: allNHL });
                this.setState({ blues: bluesTotal });
                this.setState({ jackets: jacketsTotal });
                this.setState({ oilers: oilersTotal });

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
                                        <td>{this.state.bulls}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">75</th>
                                        <td className="grizzlies">Memphis Grizzlies</td>
                                        <td>{this.state.bucks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">85</th>
                                        <td className="bulls">Chicago Bulls</td>
                                        <td>{this.state.grizzlies}</td>
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
                                                <td>{this.state.blues}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">121</th>
                                                <td className="sabres">Buffalo Sabres</td>
                                                <td>{this.state.jackets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">145</th>
                                                <td className="senators">Ottawa Senators</td>
                                                <td>{this.state.oilers}</td>
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
                                                <td>{this.state.blues}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">57</th>
                                                <td className="indians">Cleveland Indians</td>
                                                <td>{this.state.jackets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">96</th>
                                                <td className="redSox">Boston Red Sox</td>
                                                <td>{this.state.oilers}</td>
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