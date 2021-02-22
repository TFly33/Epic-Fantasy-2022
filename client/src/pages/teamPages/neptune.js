import React from "react";
import API from "../../utils/API";

class neptune extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        neptuneNBA: "",
        sixers: "",
        mavs: "",
        blazers: "",
        // NFL STARTING HERE 
        rams: "",
        jaguars: "",
        giants: "",
        totalNFL: "",
        // EPL Starting HERE 
        leicester: "",
        norwich: "",
        neptuneEPL: "",
        // NHL Going here. 
        sharks: "",
        rangers: "",
        devils: "",
        totalNHL: "",
        // PGA Going here.
        rahm: "",
        scheffler: "",
        spieth: "",
        casey: "",
        watson: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresNHL();
    };

    getScoresPGA = () => {
        // Pat's PGA Here. Golf Team 10. 
        var Rahm = 38
        var Scheffler = 16
        var Spieth = 19
        var Casey = 14
        var Watson = 13
        var pgaTotal = Rahm + Scheffler + Spieth + Casey + Watson

        this.setState({ totalPGA: pgaTotal });
        this.setState({ rahm: Rahm });
        this.setState({ scheffler: Scheffler });
        this.setState({ spieth: Spieth });
        this.setState({ casey: Casey });
        this.setState({ watson: Watson });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                //  starting Neptune NHL here
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

                var starsWins;
                var starsOTLS;
                var starsTotal;
                var blueJacketsWins;
                var blueJacketsOTLS;
                var blueJacketsTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var allNHL;

                // Here is the stars loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                       // Here is the stars loop. 
                       for (var i = 0; i < eastResults.length; i++) {
                        // stars
                        if (eastResults[i].team.id === 25) {
                            starsWins = eastResults[i].leagueRecord.wins;
                            starsOTLS = eastResults[i].leagueRecord.ot;
                            // console.log(starsWins);
                            // console.log(starsOTLS);
                            // console.log("this loop is running")
                        }
    
                    }

                           // Here is the stars loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // stars
                    if (westResults[i].team.id === 25) {
                        starsWins = westResults[i].leagueRecord.wins;
                        starsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(starsWins);
                        // console.log(starsOTLS);
                        // console.log("this loop is running")
                    }

                }

                       // Here is the stars loop. 
                       for (var i = 0; i < northResults.length; i++) {
                        // stars
                        if (northResults[i].team.id === 25) {
                            starsWins = northResults[i].leagueRecord.wins;
                            starsOTLS = northResults[i].leagueRecord.ot;
                            // console.log(starsWins);
                            // console.log(starsOTLS);
                            // console.log("this loop is running")
                        }
    
                    }

              

                // Here is the loop for the blue jackets
                for (var i = 0; i < centralResults.length; i++) {

                    // blueJackets
                    if (centralResults[i].team.id === 29) {
                        blueJacketsWins = centralResults[i].leagueRecord.wins;
                        blueJacketsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                  // Here is the loop for the blue jackets
                  for (var i = 0; i < westResults.length; i++) {

                    // blueJackets
                    if (westResults[i].team.id === 29) {
                        blueJacketsWins = westResults[i].leagueRecord.wins;
                        blueJacketsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                  // Here is the loop for the blue jackets
                  for (var i = 0; i < northResults.length; i++) {

                    // blueJackets
                    if (northResults[i].team.id === 29) {
                        blueJacketsWins = northResults[i].leagueRecord.wins;
                        blueJacketsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

                  // Here is the loop for the blue jackets
                  for (var i = 0; i < eastResults.length; i++) {

                    // blueJackets
                    if (eastResults[i].team.id === 29) {
                        blueJacketsWins = eastResults[i].leagueRecord.wins;
                        blueJacketsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(blueJacketsWins);
                        // console.log(blueJacketsOTLS);
                        // console.log("this loop is running")
                    }
                };

    
                // Here is the loop for the Devils
                for (var i = 0; i < eastResults.length; i++) {
                    // devils
                    if (eastResults[i].team.id === 1) {
                        devilsWins = eastResults[i].leagueRecord.wins;
                        devilsOTLS = eastResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

    
                // Here is the loop for the Devils
                for (var i = 0; i < northResults.length; i++) {
                    // devils
                    if (northResults[i].team.id === 1) {
                        devilsWins = northResults[i].leagueRecord.wins;
                        devilsOTLS = northResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                
                // Here is the loop for the Devils
                for (var i = 0; i < westResults.length; i++) {
                    // devils
                    if (westResults[i].team.id === 1) {
                        devilsWins = westResults[i].leagueRecord.wins;
                        devilsOTLS = westResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                
                // Here is the loop for the Devils
                for (var i = 0; i < centralResults.length; i++) {
                    // devils
                    if (centralResults[i].team.id === 1) {
                        devilsWins = centralResults[i].leagueRecord.wins;
                        devilsOTLS = centralResults[i].leagueRecord.ot;
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }
                };

                // Devils total
                devilsTotal = (devilsWins * 2.9) + (devilsOTLS * 1.45);

                  // stars total
                  starsTotal = (starsWins * 2.9) + (starsOTLS * 1.45);

                  
                // blueJackets total
                blueJacketsTotal = (blueJacketsWins * 2.9) + (blueJacketsOTLS * 1.45);
           

                var allNHL = (starsTotal + blueJacketsTotal + devilsTotal).toFixed(1);

                this.setState({ totalNHL: allNHL });
                this.setState({ stars: starsTotal });
                this.setState({ blueJackets: blueJacketsTotal });
                this.setState({ devils: devilsTotal });
            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Neptune EPL Here 
                var leicesterWin;
                var leicesterTie;
                var norwichWin;
                var norwichTie;
                // console.log(res);
                console.log(res.data.response[0].league.standings[0][1].team.id);
                console.log(res.data.response[0].league.standings[0][1].all.win);

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);
                for (var i = 0; i < forLoopArray.length; i++) {

                    // I had to change all of this for 2021 version. 
                    // These are no longer the correct teams, just the correct IDS. 

                    if (forLoopArray[i].team.id === 40) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("This loop is running");
                        console.log("here are the wins " + leicesterWin);
                        console.log("here are the ties " + leicesterTie);
                    }

                    if (forLoopArray[i].team.id === 51) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + norwichWin);
                        console.log("here are the ties" + norwichTie);
                    }
                }

                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);
                var norwichTotal = (norwichWin * 4.25) + (norwichTie);

                // Here is the final result
                var neptunePoints = leicesterTotal + norwichTotal;
                this.setState({ leicester: leicesterTotal });
                this.setState({ norwich: norwichTotal });
                this.setState({ neptuneEPL: neptunePoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // 2021 Neptune NBA. 
                // celtics becomes 76ers
                var sixersWin = res.data.api.standings[9].win;
                // pacers becomes Mavs 
                var mavsWin = res.data.api.standings[16].win;
                // Hornets becomes Blazers
                var blazersWin = res.data.api.standings[29].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublesixers = (sixersWin * 2.25);
                var doublemavs = (mavsWin * 2.25);
                var doubleblazers = (blazersWin * 2.25);

                const tempNeptuneNBA = this.state.allNBA;

                tempNeptuneNBA.push(sixersWin);
                tempNeptuneNBA.push(mavsWin);
                tempNeptuneNBA.push(blazersWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2.25);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });
                this.setState({ sixers: doublesixers });
                this.setState({ mavs: doublemavs });
                this.setState({ blazers: doubleblazers });
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
                        Neptune
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
                                        <th scope="row">30</th>
                                        <td className="sixers">Philadelphia 76ers</td>
                                        <td>{this.state.sixers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td className="mavs">Dallas Mavericks</td>
                                        <td>{this.state.mavs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">45</th>
                                        <td className="blazers">Portland Trailblazers</td>
                                        <td>{this.state.blazers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.neptuneNBA}</td>
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
                                                <th scope="row">20</th>
                                                <td className="bills">Buffalo Bills</td>
                                                <td>{this.state.rams}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">56</th>
                                                <td className="cardinals">Arizona Cardinals</td>
                                                <td>{this.state.jaguars}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">106</th>
                                                <td className="eagles">Philadelphia Eagles</td>
                                                <td>{this.state.giants}</td>
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
                                                <th scope="row">1</th>
                                                <td className="liverpool">Liverpool</td>
                                                <td>{this.state.leicester}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">68</th>
                                                <td className="brighton">Brighton and Hove Albion</td>
                                                <td>{this.state.norwich}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.neptuneEPL}</td>
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
                                    {/* Here is NHL */}
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
                                                <th scope="row">73</th>
                                                <td className="stars">Dallas Stars</td>
                                                <td>{this.state.stars}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">115</th>
                                                <td className="blueJackets">Columbus Blue Jackets</td>
                                                <td>{this.state.blueJackets}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">137</th>
                                                <td className="devils">New Jersey Devils</td>
                                                <td>{this.state.devils}</td>
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
                                                <th scope="row">83</th>
                                                <td className="cardinals">St. Louis Cardinals</td>
                                                <td>{this.state.sharks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">98</th>
                                                <td className="marlins">Miami Marlins</td>
                                                <td>{this.state.rangers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">124</th>
                                                <td className="royals">Kansas City Royals</td>
                                                {/* <td>{this.state.devils}</td> */}
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
                                                <th scope="row">148</th>
                                                <td className="">Jon Rahm</td>
                                                <td>{this.state.rahm}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Scottie Scheffler</td>
                                                <td>{this.state.scheffler}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Jordan Spieth</td>
                                                <td>{this.state.spieth}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Paul Casey</td>
                                                <td>{this.state.casey}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Bubba Watson</td>
                                                <td>{this.state.watson}</td>
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
                            <small>Copyright &copy; Epic Fantasy League 2020</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default neptune;