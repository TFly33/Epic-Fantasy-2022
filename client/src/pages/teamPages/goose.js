import React from "react";
import API from "../../utils/API";

class goose extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        gooseNBA: "",
        pacers: "",
        hawks: "",
        kings: "",
        chiefs: "",
        panthers: "",
        bengals: "",
        totalNFL: "",
        // EPL
        manu: "",
        westham: "",
        gooseEPL: "",
        // NHL Here
        preds: "",
        stars: "",
        canadians: "",
        // PGA Here
        mcIlroy: "",
        im: "",
        fleetwood: "",
        leishman: "",
        horschel: "",
        totalPGA: "",
        // MLB
        braves:"",
        mariners:"",
        cubs:"",
        totalMLB:""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresNHL();
        this.getScoresMLB();
    }

    getScoresPGA = () => {
        // Goose's PGA Here. Golf Team 5. 
        var McIlroy = 29
        var Im = 44
        var Fleetwood = 13
        var Leishman = 22
        var Horschel = 54
        var pgaTotal = McIlroy + Im + Fleetwood + Leishman + Horschel
        this.setState({ totalPGA: pgaTotal });
        this.setState({ mcIlroy: McIlroy });
        this.setState({ im: Im });
        this.setState({ fleetwood: Fleetwood });
        this.setState({ leishman: Leishman });
        this.setState({ horschel: Horschel });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
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

                var allMLB = bravesWin + cubsWin + marinersWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ braves: bravesWin });
                this.setState({ mariners: marinersWin });
                this.setState({ cubs: cubsWin });

            });
    };


    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // starting Goose NHL here 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                this.setState({ totalNHL: allNHL });
                this.setState({ leafs: leafsTotal });
                this.setState({ sharks: sharksTotal });
                this.setState({ coyotes: coyotesTotal });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Goose EPL Here 
                var manuWin;
                var manuTie;
                var westhamWin;
                var westhamTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 41) {
                        manuWin = forLoopArray[i].all.win
                        manuTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manuWin);
                        console.log("here are the ties" + manuTie);
                    }

                    if (forLoopArray[i].team.id === 44) {
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
                this.setState({ manu: manuTotal });
                this.setState({ westham: westhamTotal });
                this.setState({ gooseEPL: goosePoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR Goose 2021. 
                var pacersWin = res.data.api.standings[11].win;
                var hawksWin = res.data.api.standings[1].win;
                var kingsWin = res.data.api.standings[22].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublepacers = (pacersWin * 2.25);
                var doublehawks = (hawksWin * 2.25);
                var doublekings = (kingsWin * 2.25);

                const tempGooseNBA = this.state.allNBA;

                tempGooseNBA.push(pacersWin);
                tempGooseNBA.push(hawksWin);
                tempGooseNBA.push(kingsWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2.25);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });
                this.setState({ pacers: doublepacers });
                this.setState({ hawks: doublehawks });
                this.setState({ kings: doublekings });
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
                        Goose
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
                                        <th scope="row">69</th>
                                        <td className="pacers">Indiana Pacers</td>
                                        <td>{this.state.pacers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">71</th>
                                        <td className="hawks">Atlanta Hawks</td>
                                        <td>{this.state.hawks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">95</th>
                                        <td className="kings">Sacramento Kings</td>
                                        <td>{this.state.kings}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.gooseNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        <div class="container">
                            <div class="row">
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
                                                <th scope="row">5</th>
                                                <td className="chiefs">Kansas City Chiefs</td>
                                                <td>{this.state.chiefs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">40</th>
                                                <td className="seahawks">Seattle Seahawks</td>
                                                <td>{this.state.panthers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">52</th>
                                                <td className="bucs">Tampa Bay Bucs</td>
                                                <td>{this.state.bengals}</td>
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
                                                <th scope="row">21</th>
                                                <td className="southhampton">Southhampton</td>
                                                <td>{this.state.manu}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">101</th>
                                                <td className="burnley">Burnley</td>
                                                <td>{this.state.westham}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.gooseEPL}</td>
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
                                                <th scope="row">49</th>
                                                <td className="leafs">Toronto Maple Leafs</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">126</th>
                                                <td className="sharks">San Jose Sharks</td>
                                                <td>{this.state.sharks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">135</th>
                                                <td className="coyotes">Arizona Coyotes</td>
                                                <td>{this.state.coyotes}</td>
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
                                    {/* Here is mlb */}
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
                                                <th scope="row">16</th>
                                                <td className="braves">Atlanta Braves</td>
                                                <td>{this.state.braves}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">86</th>
                                                <td className="cubs">Chicago Cubs</td>
                                                <td>{this.state.cubs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">120</th>
                                                <td className="mariners">Seattle Mariners</td>
                                                <td>{this.state.mariners}</td>
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
                                                <th scope="row">131</th>
                                                <td className="">Rory McIlroy</td>
                                                <td>{this.state.mcIlroy}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Sung Jae Im</td>
                                                <td>{this.state.im}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Tommy Fleetwood</td>
                                                <td>{this.state.fleetwood}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Marc Leishman</td>
                                                <td>{this.state.leishman}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Billy Horschel</td>
                                                <td>{this.state.horschel}</td>
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

export default goose;