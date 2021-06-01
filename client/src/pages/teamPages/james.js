import React from "react";
import API from "../../utils/API";

class james extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        jamesNBA: "",
        celtics: "",
        spurs: "",
        thunder: "",
        saints: "",
        falcons: "",
        lions: "",
        totalNFL: "",
        // EPL States HEre
        newcastle: "",
        palace: "",
        jamesEPL: "",
        // NHL HERE
        flames: "",
        pens: "",
        wild: "",
        totalNHL: "",
        // PGA Here
        cantlay: "",
        reed: "",
        fowler: "",
        woodland: "",
        mickelson: "",
        // MLB 
        dodgers:"",
        mets:"",
        giants:"",
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
        // James's PGA Here. Golf Team 2. 
        var Cantlay = 68
        var Reed = 56
        var Fowler = 14
        var Woodland = 18
        var Mickelson = 36
        var jamesPGATotal = Cantlay + Reed + Fowler + Woodland + Mickelson
        this.setState({ jamesPGA: jamesPGATotal });
        // console.log(jamesPGATotal);
        var pgaTotal = Cantlay + Reed + Fowler + Woodland + Mickelson
        this.setState({ totalPGA: pgaTotal });
        this.setState({ cantlay: Cantlay });
        this.setState({ reed: Reed });
        this.setState({ fowler: Fowler });
        this.setState({ woodland: Woodland });
        this.setState({ mickelson: Mickelson });
    };

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var dodgersWin;
                var metsWin;
                var giantsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // dodgers
                    if (fullIndex[i].team.id === 18) {
                        dodgersWin = fullIndex[i].games.win.total
                    }

                    // giants
                    if (fullIndex[i].team.id === 31) {
                        giantsWin = fullIndex[i].games.win.total
                    }

                    // mets
                    if (fullIndex[i].team.id === 24) {
                        metsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = dodgersWin + giantsWin + metsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ dodgers: dodgersWin });
                this.setState({ mets: metsWin });
                this.setState({ giants: giantsWin });

            });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // Start of James NHL here
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

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

                // Here is the avalanche loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // avalanche
                    if (eastResults[i].team.id === 21) {
                        avalancheWins = eastResults[i].leagueRecord.wins;
                        avalancheOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the avalanche loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // avalanche
                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the avalanche loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // avalanche
                    if (northResults[i].team.id === 21) {
                        avalancheWins = northResults[i].leagueRecord.wins;
                        avalancheOTLS = northResults[i].leagueRecord.ot;
                        // console.log(avalancheWins);
                        // console.log(avalancheOTLS);
                        // console.log("this loop is running")
                    }
                }

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

                // Here is the loop for the pens
                for (var i = 0; i < northResults.length; i++) {

                    // pens
                    if (northResults[i].team.id === 5) {
                        pensWins = northResults[i].leagueRecord.wins;
                        pensOTLS = northResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the pens
                for (var i = 0; i < westResults.length; i++) {

                    // pens
                    if (westResults[i].team.id === 5) {
                        pensWins = westResults[i].leagueRecord.wins;
                        pensOTLS = westResults[i].leagueRecord.ot;
                        // console.log(pensWins);
                        // console.log(pensOTLS);
                        // console.log("this loop is running")
                    }
                }
                // Here is the loop for the pens
                for (var i = 0; i < centralResults.length; i++) {

                    // pens
                    if (centralResults[i].team.id === 5) {
                        pensWins = centralResults[i].leagueRecord.wins;
                        pensOTLS = centralResults[i].leagueRecord.ot;
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

                for (var i = 0; i < eastResults.length; i++) {

                    // kings
                    if (eastResults[i].team.id === 26) {
                        kingsWins = eastResults[i].leagueRecord.wins;
                        kingsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                for (var i = 0; i < centralResults.length; i++) {

                    // kings
                    if (centralResults[i].team.id === 26) {
                        kingsWins = centralResults[i].leagueRecord.wins;
                        kingsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                for (var i = 0; i < northResults.length; i++) {

                    // kings
                    if (northResults[i].team.id === 26) {
                        kingsWins = northResults[i].leagueRecord.wins;
                        kingsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(kingsWins);
                        // console.log(kingsOTLS);
                        // console.log("this loop is running")
                    }
                }


                // avalanche total
                avalancheTotal = (avalancheWins * 2.9) + (avalancheOTLS * 1.45);
                console.log(avalancheTotal);

                // pens total
                pensTotal = (pensWins * 2.9) + (pensOTLS * 1.45);
                // console.log(pensTotal)

                // kings total
                kingsTotal = (kingsWins * 2.9) + (kingsOTLS * 1.45);
                // console.log(kingsTotal);

                var allNHL = (avalancheTotal + pensTotal + kingsTotal).toFixed(1);

                this.setState({ totalNHL: allNHL });
                this.setState({ avalanche: avalancheTotal });
                this.setState({ pens: pensTotal });
                this.setState({ kings: kingsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Neptune EPL Here 
                var newcastleWin;
                var newcastleTie;
                var palaceWin;
                var palaceTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 39) {
                        newcastleWin = forLoopArray[i].all.win
                        newcastleTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + newcastleWin);
                        console.log("here are the ties" + newcastleTie);
                    }

                    if (forLoopArray[i].team.id === 42) {
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
                this.setState({ newcastle: newcastleTotal });
                this.setState({ palace: palaceTotal });
                this.setState({ jamesEPL: jamesPoints });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // James NBA 2021
                var celticsWin = res.data.api.standings[6].win;
                var spursWin = res.data.api.standings[18].win;
                var thunderWin = res.data.api.standings[27].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleceltics = (celticsWin * 2.25);
                var doublespurs = (spursWin * 2.25);
                var doublethunder = (thunderWin * 2.25);

                const tempJamesNBA = this.state.allNBA;

                tempJamesNBA.push(celticsWin);
                tempJamesNBA.push(spursWin);
                tempJamesNBA.push(thunderWin);

                var JamesDoubledScores = tempJamesNBA.map(team => team * 2.25);

                var JamesPoints = 0;

                for (var i = 0; i < JamesDoubledScores.length; i++) {
                    JamesPoints += JamesDoubledScores[i];
                }
                console.log(JamesPoints);
                this.setState({ jamesNBA: JamesPoints });
                this.setState({ celtics: doubleceltics });
                this.setState({ spurs: doublespurs });
                this.setState({ thunder: doublethunder });
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
                        James
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
                                        <th scope="row">22</th>
                                        <td className="celtics">Boston Celtics</td>
                                        <td>{this.state.celtics}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">84</th>
                                        <td className="spurs">San Antonio Spurs</td>
                                        <td>{this.state.spurs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">125</th>
                                        <td className="thunder">Oklahoma City Thunder</td>
                                        <td>{this.state.thunder}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.jamesNBA}</td>
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
                                                <th scope="row">80</th>
                                                <td className="giants">New York Giants</td>
                                                <td>{this.state.saints}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">97</th>
                                                <td className="broncos">Denver Broncos</td>
                                                <td>{this.state.falcons}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">105</th>
                                                <td className="vikings">Minnesota Vikings</td>
                                                <td>{this.state.lions}</td>
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
                                                <th scope="row">39</th>
                                                <td className="wolverhampton">Wolverhampton</td>
                                                <td>{this.state.newcastle}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">41</th>
                                                <td className="arsenal">Arsenal</td>
                                                <td>{this.state.palace}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.jamesEPL}</td>
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
                                                <th scope="row">17</th>
                                                <td className="avalanche">Colorado Avalanche</td>
                                                <td>{this.state.avalanche}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">60</th>
                                                <td className="penguins">Pittsburgh Penguins</td>
                                                <td>{this.state.pens}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">136</th>
                                                <td className="lakings">LA Kings</td>
                                                <td>{this.state.kings}</td>
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
                                                <th scope="row">4</th>
                                                <td className="dodgers">LA Dodgers</td>
                                                <td>{this.state.dodgers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">61</th>
                                                <td className="mets">New York mets</td>
                                                <td>{this.state.mets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">116</th>
                                                <td className="sfGiants">San Francisco Giants</td>
                                                <td>{this.state.giants}</td>
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
                                                <th scope="row">149</th>
                                                <td className="">Patrick Cantlay</td>
                                                <td>{this.state.cantlay}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Patrick Reed</td>
                                                <td>{this.state.reed}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Rickie Fowler</td>
                                                <td>{this.state.fowler}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Gary Woodland</td>
                                                <td>{this.state.woodland}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Phil Mickelson</td>
                                                <td>{this.state.mickelson}</td>
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

export default james;