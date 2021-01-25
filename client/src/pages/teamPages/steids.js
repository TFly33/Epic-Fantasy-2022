import React from "react";
import API from "../../utils/API";

class steids extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        steidsNBA: "",
        lakers: "",
        nets: "",
        knicks: "",
        browns: "",
        steelers: "",
        buccaneers: "",
        totalNFL: "",
        // EPL Teams Here
        arsenal: "",
        watford: "",
        steidsEPL: "",
        // NHL
        caps: "",
        sabres: "",
        panthers: "",
        totalNHL: "",
        // PGA States here
        schauffele: "",
        finau: "",
        woods: "",
        ancer: "",
        griffin: "",
        totalPGA: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresPGA();
        this.getScoresEPL();
        this.getScoresNHL();
    };

    getScoresPGA = () => {
        // Tom's PGA Here. Golf Team 8. 
        // Steids's PGA Here. Golf Team 6. 
        var Schauffele = 31
        var Finau = 22
        var Woods = 1
        var Ancer = 23
        var Griffin = 12
        var pgaTotal = Schauffele + Finau + Woods + Ancer + Griffin
        this.setState({ totalPGA: pgaTotal });
        this.setState({ schauffele: Schauffele });
        this.setState({ finau: Finau });
        this.setState({ woods: Woods });
        this.setState({ ancer: Ancer });
        this.setState({ griffin: Griffin });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // starting Steids NHL here
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                this.setState({ totalNHL: allNHL });
                this.setState({ blues: bluesTotal });
                this.setState({ panthers: panthersTotal });
                this.setState({ predators: predatorsTotal });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Steids EPL Here 
                var arsenalWin;
                var arsenalTie;
                var watfordWin;
                var watfordTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 33) {
                        arsenalWin = forLoopArray[i].all.win
                        arsenalTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + arsenalWin);
                        console.log("here are the ties" + arsenalTie);
                    }

                    if (forLoopArray[i].team.id === 34) {
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
                this.setState({ arsenal: arsenalTotal });
                this.setState({ watford: watfordTotal });
                this.setState({ steidsEPL: steidsPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // New Steids Teams for 2021
                // This is now Lakers
                console.log(res.data.api.standings)
                // This is now 
                var lakersWin = res.data.api.standings[23].win;
                // This is now Nets
                var netsWin = res.data.api.standings[5].win;
                // This is now Knicks. 
                var knicksWin = res.data.api.standings[7].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublelakers = (lakersWin * 2.25);
                var doublenets = (netsWin * 2.25);
                var doubleknicks = (knicksWin * 2.25);

                const tempsteidsNBA = this.state.allNBA;

                tempsteidsNBA.push(lakersWin);
                tempsteidsNBA.push(netsWin);
                tempsteidsNBA.push(knicksWin);

                var steidsDoubledScores = tempsteidsNBA.map(team => team * 2.25);

                var steidsPoints = 0;

                for (var i = 0; i < steidsDoubledScores.length; i++) {
                    steidsPoints += steidsDoubledScores[i];
                }
                // console.log(steidsPoints);
                this.setState({ steidsNBA: steidsPoints });
                this.setState({ lakers: doublelakers });
                this.setState({ nets: doublenets });
                this.setState({ knicks: doubleknicks });
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
                        Steids
  </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        {/* Here is NBA */}
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
                                        <th scope="row">7</th>
                                        <td className="lakers">LA Lakers</td>
                                        <td>{this.state.lakers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">36</th>
                                        <td className="nets">Brooklyn Nets</td>
                                        <td>{this.state.nets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">144</th>
                                        <td className="knicks">New York Knicks</td>
                                        <td>{this.state.knicks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.steidsNBA}</td>
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
                                                <th scope="row">25</th>
                                                <td className="ravens">Baltimore Ravens</td>
                                                <td>{this.state.browns}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">78</th>
                                                <td className="cowboys">Dallas Cowboys</td>
                                                <td>{this.state.steelers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">103</th>
                                                <td className="chargers">LA Chargers</td>
                                                <td>{this.state.buccaneers}</td>
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
                                                <th scope="row">14</th>
                                                <td className="manU">Manchester United</td>
                                                <td>{this.state.arsenal}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">63</th>
                                                <td className="newcastle">Newcastle</td>
                                                <td>{this.state.watford}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.steidsEPL}</td>
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
                                                <th scope="row">51</th>
                                                <td className="blues">St. Louis Blues</td>
                                                <td>{this.state.blues}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">88</th>
                                                <td className="predators">Nashville Predators</td>
                                                <td>{this.state.predators}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">118</th>
                                                <td className="fPanthers">Florida Panthers</td>
                                                <td>{this.state.panthers}</td>
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
                                                <th scope="row">50</th>
                                                <td className="twins">Minnesota Twins</td>
                                                <td>{this.state.knights}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">93</th>
                                                <td className="angels">Los Angeles Angels</td>
                                                <td>{this.state.blackhawks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">128</th>
                                                <td className="rockies">Colorado Rockies</td>
                                                <td>{this.state.canucks}</td>
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
                                                <th scope="row">133</th>
                                                <td className="">Xander Schauffele</td>
                                                <td>{this.state.schauffele}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Tony Finau</td>
                                                <td>{this.state.finau}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Tiger Woods</td>
                                                <td>{this.state.woods}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Abraham Ancer</td>
                                                <td>{this.state.ancer}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Lanto Griffin</td>
                                                <td>{this.state.griffin}</td>
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

export default steids;