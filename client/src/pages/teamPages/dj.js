import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class dj extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        djNBA: "",
        bucks: "",
        grizzlies: "",
        pistons: "",
        bears: 80,
        texans: 100,
        broncos: 70,
        totalNFL: 250,
        // EPL
        brighton: "",
        astonVilla: "",
        djEPL: "",
        // NHL 
        bruins: "",
        pens: "",
        krakens: "",
        totalNHL: "",
        // Golf here
        morikawa: "",
        mcilroy: "",
        casey: "",
        rose: "",
        garcia: "",
        totalGolf: "",
        // MLB Here
        brewers: "",
        rockies: "",
        orioles: "",
        totalMLB: ""
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        this.getScoresMLB();
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var brewersWin;
                var rockiesWin;
                var oriolesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    //brewers
                    if (fullIndex[i].team.id === 20) {
                        brewersWin = fullIndex[i].games.win.total
                    }

                    // orioles
                    if (fullIndex[i].team.id === 4) {
                        oriolesWin = fullIndex[i].games.win.total
                    }

                    // rockies
                    if (fullIndex[i].team.id === 10) {
                        rockiesWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = brewersWin + oriolesWin + rockiesWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ brewers: brewersWin });
                this.setState({ orioles: oriolesWin });
                this.setState({ rockies: rockiesWin });

            });
    };


    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ mcilroy: x.Mcilroy });
        this.setState({ morikawa: x.Morikawa });
        this.setState({ casey: x.Casey });
        this.setState({ rose: x.Rose });
        this.setState({ garcia: x.Garcia });
        var allGolf = x.Garcia + x.Mcilroy + x.Morikawa + x.Rose + x.Casey;
        this.setState({ totalGolf: allGolf });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);

                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var pensWins;
                var pensOTLS;
                var pensTotal;
                var krakensWins;
                var krakensOTLS;
                var krakensTotal;
                var allNHL;

                // Here is the bruins loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // krakens
                    if (pacificResults[i].team.id === 55) {
                        krakensWins = pacificResults[i].leagueRecord.wins;
                        krakensOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(krakensWins);
                        console.log(krakensOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // pens
                    if (metroResults[i].team.id === 5) {
                        pensWins = metroResults[i].leagueRecord.wins;
                        pensOTLS = metroResults[i].leagueRecord.ot;
                        console.log(pensWins);
                        console.log(pensOTLS);
                        console.log("this loop is running")
                    }
                }

                // pens total
                pensTotal = (pensWins * 2) + pensOTLS;
                console.log(pensTotal)

                // krakens total
                krakensTotal = (krakensWins * 2) + krakensOTLS;
                console.log(krakensTotal);

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal);

                var allNHL = bruinsTotal + pensTotal + krakensTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ bruins: bruinsTotal });
                this.setState({ pens: pensTotal });
                this.setState({ krakens: krakensTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {

                console.log(res.data.response[0].league.standings[0])
                var brightonWin;
                var brightonTie;
                var astonVWin;
                var astonVTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 51) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + brightonWin);
                        console.log("here are the ties" + brightonTie);
                    }

                    if (forLoopArray[i].team.id === 66) {
                        astonVWin = forLoopArray[i].all.win
                        astonVTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + astonVWin);
                        console.log("here are the ties" + astonVTie);
                    }
                }

                var brightonTotal = (brightonWin * 4.25) + (brightonTie);
                var astonVTotal = (astonVWin * 4.25) + (astonVTie);

                // Here is the final result
                var djPoints = brightonTotal + astonVTotal;
                this.setState({ brighton: brightonTotal });
                this.setState({ astonV: astonVTotal });
                this.setState({ eplTotal: djPoints });

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
                // console.log(res.data.api.standings);
                var bucksWin = res.data.api.standings[11].win;
                var grizzliesWin = res.data.api.standings[15].win;
                var pistonsWin = res.data.api.standings[14].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublebucks = (bucksWin * 2);
                var doublegrizzlies = (grizzliesWin * 2);
                var doublepistons = (pistonsWin * 2);

                const tempdjNBA = this.state.allNBA;

                tempdjNBA.push(bucksWin);
                tempdjNBA.push(grizzliesWin);
                tempdjNBA.push(pistonsWin);

                var djDoubledScores = tempdjNBA.map(team => team * 2);

                var djPoints = 0;

                for (var i = 0; i < djDoubledScores.length; i++) {
                    djPoints += djDoubledScores[i];
                }
                console.log(djPoints);
                this.setState({ djNBA: djPoints });
                this.setState({ bucks: doublebucks });
                this.setState({ grizzlies: doublegrizzlies });
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
                                        <th scope="row">8</th>
                                        <td className="bucks">Milwaukee Bucks</td>
                                        <td>{this.state.bucks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">81</th>
                                        <td className="grizzlies">Memphis Grizzlies</td>
                                        <td>{this.state.grizzlies}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">164</th>
                                        <td className="pistons">Detroit Pistons</td>
                                        <td>{this.state.pistons}</td>
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
                                                <th scope="row">22</th>
                                                <td className="bears">Chicago Bears</td>
                                                <td>{this.state.bears}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">41</th>
                                                <td className="texans">Houston Texans</td>
                                                <td>{this.state.texans}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">97</th>
                                                <td className="broncos">Denver Broncos</td>
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
                                                <th scope="row">59</th>
                                                <td className="brighton">Brighton and Hove Albion</td>
                                                <td>{this.state.brighton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">62</th>
                                                <td className="astonV">Aston Villa</td>
                                                <td>{this.state.astonV}</td>
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
                                                <th scope="row">80</th>
                                                <td className="bruins">Boston Bruins</td>
                                                <td>{this.state.bruins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">109</th>
                                                <td className="penguins">Pittsburgh Penguins</td>
                                                <td>{this.state.pens}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">143</th>
                                                <td className="mariners">Seattle Kraken</td>
                                                <td>{this.state.krakens}</td>
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

                        {/* MLB Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
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
                                                <th scope="row">33</th>
                                                <td className="brewers">Milwaukee Brewers</td>
                                                <td>{this.state.brewers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">129</th>
                                                <td className="rockies">Colorado Rockies</td>
                                                <td>{this.state.rockies}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">185</th>
                                                <td className="orioles">Baltimore Orioles</td>
                                                <td>{this.state.orioles}</td>
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


                        {/* Adding Golf Here */}

                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">Golfer</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">13</th>
                                                <td className="senators">Colin Morikawa</td>
                                                <td>{this.state.morikawa}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">28</th>
                                                <td className="senators">Rory Mcilroy</td>
                                                <td>{this.state.mcilroy}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">113</th>
                                                <td className="senators">Paul Casey</td>
                                                <td>{this.state.casey}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">159</th>
                                                <td className="senators">Justin Rose</td>
                                                <td>{this.state.rose}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">177</th>
                                                <td className="senators">Sergio Garcia</td>
                                                <td>{this.state.garcia}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.totalGolf}</td>
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

export default dj;