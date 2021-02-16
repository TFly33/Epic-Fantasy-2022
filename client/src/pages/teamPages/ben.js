import React from "react";
import API from "../../utils/API";

// THIS IS NOW MARK ERES 

class ben extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        benNBA: "",
        pelicans: "",
        wizards: "",
        pistons: "",
        eagles: "",
        cowboys: "",
        redskins: "",
        totalNFL: "",
        // EPL
        tottenham: "",
        bournemouth: "",
        benEPL: "",
        // NHL 
        leafs: "",
        avalanche: "",
        flyers: "",
        totalNHL: "",
        // PGA
        thomas: "",
        berger: "",
        fitzpatrick: "",
        todd: "",
        kuchar: "",
        totalPGA: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresNHL();
    };

    getScoresPGA = () => {
        // DJ's PGA Here. Golf Team 1. 
        var Thomas = 42
        var Berger = 39
        var Fitzpatrick = 5
        var Todd = 13
        var Kuchar = 3
        var pgaTotal = Thomas + Berger + Fitzpatrick + Todd + Kuchar
        this.setState({ totalPGA: pgaTotal });
        this.setState({ thomas: Thomas });
        this.setState({ berger: Berger });
        this.setState({ fitzpatrick: Fitzpatrick });
        this.setState({ todd: Todd });
        this.setState({ kuchar: Kuchar });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // starting Mark Eres Here: 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                this.setState({ totalNHL: allNHL });
                this.setState({ lightning: lightningTotal });
                this.setState({ bruins: bruinsTotal });
                this.setState({ flames: flamesTotal });


            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Goose EPL Here 
                var tottenhamWin;
                var tottenhamTie;
                var bournemouthWin;
                var bournemouthTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 52) {
                        tottenhamWin = forLoopArray[i].all.win
                        tottenhamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + tottenhamWin);
                        console.log("here are the ties" + tottenhamTie);
                    }

                    if (forLoopArray[i].team.id === 36) {
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
                this.setState({ tottenham: tottenhamTotal });
                this.setState({ bournemouth: bournemouthTotal });
                this.setState({ benEPL: benPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // NBA Teams for Mark and Johnny. 
                var pelicansWin = res.data.api.standings[19].win;
                var wizardsWin = res.data.api.standings[4].win;
                var pistonsWin = res.data.api.standings[12].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublepelicans = (pelicansWin * 2.25);
                var doublewizards = (wizardsWin * 2.25);
                var doublepistons = (pistonsWin * 2.25);

                const tempbenNBA = this.state.allNBA;

                tempbenNBA.push(pelicansWin);
                tempbenNBA.push(wizardsWin);
                tempbenNBA.push(pistonsWin);

                var benDoubledScores = tempbenNBA.map(team => team * 2.25);

                var benPoints = 0;

                for (var i = 0; i < benDoubledScores.length; i++) {
                    benPoints += benDoubledScores[i];
                }
                console.log(benPoints);
                this.setState({ benNBA: benPoints });
                this.setState({ pelicans: doublepelicans });
                this.setState({ wizards: doublewizards });
                this.setState({ pistons: doublepistons });
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
                        Eres/JMar
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
                                        <th scope="row">59</th>
                                        <td className="pelicans">New Orleans Pelicans</td>
                                        <td>{this.state.pelicans}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">79</th>
                                        <td className="wiz">Washington Wizards</td>
                                        <td>{this.state.wizards}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">113</th>
                                        <td className="pistons">Detroit Pistons</td>
                                        <td>{this.state.pistons}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.benNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container">
                            <div class="row">
                                {/* Here is NFL */}
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td className="eagles">Green Bay Packers</td>
                                                <td>{this.state.eagles}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">33</th>
                                                <td className="titans">Tennessee Titans</td>
                                                <td>{this.state.cowboys}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">100</th>
                                                <td className="bears">Chicago Bears</td>
                                                <td>{this.state.redskins}</td>
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

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is EPL */}
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">62</th>
                                                <td className="crystalP">Crystal Palace</td>
                                                <td>{this.state.tottenham}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">129</th>
                                                <td className="fulham">Fulham</td>
                                                <td>{this.state.bournemouth}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.benEPL}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Adding the NHL Table here */}
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is NFL */}
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">13</th>
                                                <td className="lightning">Tampa Bay Lightning</td>
                                                <td>{this.state.lightning}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">42</th>
                                                <td className="bruins">Boston Bruins</td>
                                                <td>{this.state.bruins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">108</th>
                                                <td className="flames">Calgary Flames</td>
                                                <td>{this.state.flames}</td>
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

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">28</th>
                                                <td className="rays">Tampa Bay Rays</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">81</th>
                                                <td className="nationals">Washington Nationals</td>
                                                <td>{this.state.avalanche}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">142</th>
                                                <td className="rangers">Texas Rangers</td>
                                                <td>{this.state.flyers}</td>
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
                                                <th scope="row">132</th>
                                                <td className="">Justin Thomas</td>
                                                <td>{this.state.thomas}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Daniel Berger</td>
                                                <td>{this.state.berger}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Matthew Fitzpatrick</td>
                                                <td>{this.state.fitzpatrick}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Brenden Todd</td>
                                                <td>{this.state.todd}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Matt Kuchar</td>
                                                <td>{this.state.kuchar}</td>
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

export default ben;