import React from "react";
import API from "../../utils/API";

class patrick extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        PatrickNBA: "",
        jazz: "",
        rockets: "",
        suns: "",
        saints: 9.4,
        colts: 0,
        fortyniners: 18.8,
        totalNFL: 28.2,
        // EPL HERE
        city: "",
        wolves: "",
        patEPL: "",
        // NHL HERE
        islanders: "",
        ducks: "",
        kings: "",
        totalNHL: "",
        // PGA Here
        hovland: "",
        wolff: "",
        champ: "",
        munoz: "",
        henley: "",
        jays: "",
        dbacks: "",
        pirates: "",
        totalMLB: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresNHL();
        this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var Saints = 18.8
        var Colts = 9.4
        var Fortyniners = 18.8
        var allNFL = Saints + Colts + Fortyniners
        this.setState({ totalNFL: allNFL.toFixed(2) })
        this.setState({ colts: Colts })
        this.setState({ fortyniners: Fortyniners })
        this.setState({ saints: Saints })
    };

    getScoresPGA = () => {
        // Pat's PGA Here. Golf Team 10. 
        var Hovland = 86
        var Wolff = 39
        var Champ = 42
        var Munoz = 37
        var Henley = 47
        var pgaTotal = Hovland + Wolff + Champ + Munoz + Henley

        this.setState({ totalPGA: pgaTotal });
        this.setState({ hovland: Hovland });
        this.setState({ wolff: Wolff });
        this.setState({ champ: Champ });
        this.setState({ munoz: Munoz });
        this.setState({ henley: Henley });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var jaysWin;
                var dbacksWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running.")

                    // jays
                    if (fullIndex[i].team.id === 36) {
                        jaysWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                    // dbacks
                    if (fullIndex[i].team.id === 2) {
                        dbacksWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = jaysWin + piratesWin + dbacksWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ jays: jaysWin });
                this.setState({ dbacks: dbacksWin });
                this.setState({ pirates: piratesWin });

            });
    };


    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // start of Patrick NHL: 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

                var islandersWins;
                var islandersOTLS;
                var islandersTotal;
                var wildWins;
                var wildOTLS;
                var wildTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var allNHL;

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // wild
                    if (westResults[i].team.id === 30) {
                        wildWins = westResults[i].leagueRecord.wins;
                        wildOTLS = westResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // wild
                    if (eastResults[i].team.id === 30) {
                        wildWins = eastResults[i].leagueRecord.wins;
                        wildOTLS = eastResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // wild
                    if (northResults[i].team.id === 30) {
                        wildWins = northResults[i].leagueRecord.wins;
                        wildOTLS = northResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }

                // Here is the wild/blackhawks for loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        // console.log("Wild Wins: " + wildWins);
                        // console.log("Wild OTs: " + wildOTLS);
                        // console.log("this loop is running");
                    }
                }



                // Here is the loop for the islanders
                for (var i = 0; i < eastResults.length; i++) {

                    // islanders
                    if (eastResults[i].team.id === 2) {
                        islandersWins = eastResults[i].leagueRecord.wins;
                        islandersOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }

                // Here is the loop for the islanders
                for (var i = 0; i < northResults.length; i++) {

                    // islanders
                    if (northResults[i].team.id === 2) {
                        islandersWins = northResults[i].leagueRecord.wins;
                        islandersOTLS = northResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // Here is the loop for the islanders
                for (var i = 0; i < westResults.length; i++) {

                    // islanders
                    if (westResults[i].team.id === 2) {
                        islandersWins = westResults[i].leagueRecord.wins;
                        islandersOTLS = westResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // Here is the loop for the islanders
                for (var i = 0; i < centralResults.length; i++) {

                    // islanders
                    if (centralResults[i].team.id === 2) {
                        islandersWins = centralResults[i].leagueRecord.wins;
                        islandersOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(islandersWins);
                        // console.log(islandersOTLS);
                        // console.log("this loop is running")
                    }
                }


                // blackhawks total
                for (var i = 0; i < centralResults.length; i++) {

                    // islanders
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }

                // blackhawks total
                for (var i = 0; i < westResults.length; i++) {

                    // islanders
                    if (westResults[i].team.id === 16) {
                        blackhawksWins = westResults[i].leagueRecord.wins;
                        blackhawksOTLS = westResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }


                // blackhawks total
                for (var i = 0; i < northResults.length; i++) {

                    // islanders
                    if (northResults[i].team.id === 16) {
                        blackhawksWins = northResults[i].leagueRecord.wins;
                        blackhawksOTLS = northResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }


                // blackhawks total
                for (var i = 0; i < eastResults.length; i++) {

                    // islanders
                    if (eastResults[i].team.id === 16) {
                        blackhawksWins = eastResults[i].leagueRecord.wins;
                        blackhawksOTLS = eastResults[i].leagueRecord.ot;
                        // console.log("blackhawks wins: " + blackhawksWins);
                        // console.log(blackhawksOTLS);
                        // console.log("this loop is running");
                    }
                }

                // wild total
                wildTotal = (wildWins * 2.9) + (wildOTLS * 1.45);
                // console.log(wildTotal);

                // islanders total
                islandersTotal = (islandersWins * 2.9) + (islandersOTLS * 1.45);
                // console.log(islandersTotal);

                blackhawksTotal = (blackhawksWins * 2.9) + (blackhawksOTLS * 1.45);

                var allNHL = (islandersTotal + wildTotal + blackhawksTotal).toFixed(1);

                this.setState({ totalNHL: allNHL });
                this.setState({ islanders: islandersTotal });
                this.setState({ wild: wildTotal });
                this.setState({ blackhawks: blackhawksTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Patrick EPL Here 
                var manCityWin;
                var manCityTie;
                var wolvesWin;
                var wolvesTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];

                // console.log (forLoopArray)

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manCityWin);
                        console.log("here are the ties" + manCityTie);
                    }

                    if (forLoopArray[i].team.id === 66) {
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
                this.setState({ city: manCityTotal });
                this.setState({ wolves: wolvesTotal });
                this.setState({ patEPL: patPoints });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // Patricks Teams for 2021. 
                console.log(res)
                var jazzWin = res.data.api.standings[25].win;
                var sunsWin = res.data.api.standings[21].win;
                var rocketsWin = res.data.api.standings[15].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublejazz = (jazzWin * 2.25);
                var doublesuns = (sunsWin * 2.25);
                var doublerockets = (rocketsWin * 2.25);

                const tempPatrickNBA = this.state.allNBA;

                tempPatrickNBA.push(jazzWin);
                tempPatrickNBA.push(sunsWin);
                tempPatrickNBA.push(rocketsWin);

                var PatrickDoubledScores = tempPatrickNBA.map(team => team * 2.25);

                var PatrickPoints = 0;

                for (var i = 0; i < PatrickDoubledScores.length; i++) {
                    PatrickPoints += PatrickDoubledScores[i];
                }
                console.log(PatrickPoints);
                this.setState({ PatrickNBA: PatrickPoints });
                this.setState({ jazz: doublejazz });
                this.setState({ rockets: doublerockets });
                this.setState({ suns: doublesuns });
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
                        Pat/JP
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
                                        <th scope="row">34</th>
                                        <td className="jazz">Utah Jazz</td>
                                        <td>{this.state.jazz}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">43</th>
                                        <td className="suns">Phoenix Suns</td>
                                        <td>{this.state.suns}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">70</th>
                                        <td className="rockets">Houston Rockets</td>
                                        <td>{this.state.rockets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.PatrickNBA}</td>
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
                                                <th scope="row">18</th>
                                                <td className="saints">New Orleans Saints</td>
                                                <td>{this.state.saints}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">58</th>
                                                <td className="colts">Indianapolis Colts</td>
                                                <td>{this.state.colts}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">71</th>
                                                <td className="niners">San Francisco 49ers</td>
                                                <td>{this.state.fortyniners}</td>
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
                                                <th scope="row">3</th>
                                                <td className="mancity">Manchester City</td>
                                                <td>{this.state.city}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">27</th>
                                                <td className="astonV">Aston Villa</td>
                                                <td>{this.state.wolves}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.patEPL}</td>
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
                                                <th scope="row">102</th>
                                                <td className="islanders">New York Islanders</td>
                                                <td>{this.state.islanders}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">119</th>
                                                <td className="wild">Minnesota Wild</td>
                                                <td>{this.state.wild}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">130</th>
                                                <td className="blackhawks">Chicago Blackhawks</td>
                                                <td>{this.state.blackhawks}</td>
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
                                                <th scope="row">82</th>
                                                <td className="blueJays">Toronto Blue Jays</td>
                                                <td>{this.state.jays}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">99</th>
                                                <td className="diamondbacks">Arizona Diamondbacks</td>
                                                <td>{this.state.dbacks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">143</th>
                                                <td className="pirates">Pittsburgh Pirates</td>
                                                <td>{this.state.pirates}</td>
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
                                                <th scope="row">131</th>
                                                <td className="">Viktor Hovland</td>
                                                <td>{this.state.hovland}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Matthew Wolff</td>
                                                <td>{this.state.wolff}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Cameron Champ</td>
                                                <td>{this.state.champ}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Sebastian Munoz</td>
                                                <td>{this.state.munoz}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Russell Henley</td>
                                                <td>{this.state.henley}</td>
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

export default patrick;