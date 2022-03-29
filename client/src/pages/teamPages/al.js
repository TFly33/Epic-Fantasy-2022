import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class al extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arathletics here. Each person's array will include three NBA teams. 
        allNBA: [],
        alNBA: "",
        sixers: "",
        pelicans: "",
        cavaliers: "",
        // chargers: 50,
        // packers: 130,
        // bills: 100,
        // totalNFL: 280,
        // EPL
        everton: "",
        southhampton: "",
        alEPL: "",
        // NHL
        lightning: "",
        knights: "",
        canucks: "",
        totalNHL: "",
        // Golf here
        scheffler: "",
        smith: "",
        homa: "",
        peirera: "",
        gooch: "",
        totalGolf: "",
        // MLB Here
        athletics: "",
        tigers: "",
        marlins: "",
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
                var athleticsWin;
                var tigersWin;
                var marlinsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // athletics
                    if (fullIndex[i].team.id === 26) {
                        athleticsWin = fullIndex[i].games.win.total
                    }

                    //marlins
                    if (fullIndex[i].team.id === 19) {
                        marlinsWin = fullIndex[i].games.win.total
                    }

                    // tigers
                    if (fullIndex[i].team.id === 12) {
                        tigersWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = athleticsWin + marlinsWin + tigersWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ athletics: athleticsWin });
                this.setState({ marlins: marlinsWin });
                this.setState({ tigers: tigersWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ smith: x.Smith });
        this.setState({ scheffler: x.Scheffler });
        this.setState({ homa: x.Homa });
        this.setState({ peirera: x.Peirera });
        this.setState({ gooch: x.Gooch });
        var allGolf = x.Gooch + x.Smith + x.Scheffler + x.Peirera + x.Homa;
        this.setState({ totalGolf: allGolf });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                // var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                var atlanticResults = res.data.records[1].teamRecords;
                // Central Division
                // var centralResults = res.data.records[2].teamRecords;
                // // central
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults);

                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var knightsWins;
                var knightsOTLS;
                var knightsTotal;
                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var allNHL;

                // Here is the lightning loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // lightning
                    if (atlanticResults[i].team.id === 14) {
                        lightningWins = atlanticResults[i].leagueRecord.wins;
                        lightningOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(lightningWins);
                        console.log(lightningOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < pacificResults.length; i++) {

                    // canucks
                    if (pacificResults[i].team.id === 23) {
                        canucksWins = pacificResults[i].leagueRecord.wins;
                        canucksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(canucksWins);
                        console.log(canucksOTLS);
                        console.log("this loop is running")
                    }

                    // knights
                    if (pacificResults[i].team.id === 54) {
                        knightsWins = pacificResults[i].leagueRecord.wins;
                        knightsOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(knightsWins);
                        console.log(knightsOTLS);
                        console.log("this loop is running")
                    }
                }

                // lightning total
                lightningTotal = (lightningWins * 2) + lightningOTLS;
                console.log(lightningTotal);

                // knights total
                knightsTotal = (knightsWins * 2) + knightsOTLS;
                console.log(knightsTotal)

                // canucks total
                canucksTotal = (canucksWins * 2) + canucksOTLS;
                console.log(canucksTotal);

                var allNHL = lightningTotal + knightsTotal + canucksTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ lightning: lightningTotal });
                this.setState({ knights: knightsTotal });
                this.setState({ canucks: canucksTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var leedsWin;
                var leedsTie;
                var liverpoolWin;
                var liverpoolTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 63) {
                        leedsWin = forLoopArray[i].all.win
                        leedsTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leedsWin);
                        console.log("here are the ties" + leedsTie);
                    }

                    if (forLoopArray[i].team.id === 40) {
                        liverpoolWin = forLoopArray[i].all.win
                        liverpoolTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + liverpoolWin);
                        console.log("here are the ties" + liverpoolTie);
                    }
                }

                var leedsTotal = (leedsWin * 4.25) + (leedsTie);
                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);

                // Here is the final result
                var alPoints = leedsTotal + liverpoolTotal;
                this.setState({ leeds: leedsTotal });
                this.setState({ liverpool: liverpoolTotal });
                this.setState({ eplTotal: alPoints });
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
                var sixersWin = res.data.api.standings[7].win;
                var pelicansWin = res.data.api.standings[19].win;
                var cavaliersWin = res.data.api.standings[12].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublesixers = (sixersWin * 2);
                var doublepelicans = (pelicansWin * 2);
                var doublecavaliers = (cavaliersWin * 2);

                const tempAlNBA = this.state.allNBA;

                tempAlNBA.push(sixersWin);
                tempAlNBA.push(pelicansWin);
                tempAlNBA.push(cavaliersWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                console.log(AlPoints);
                this.setState({ alNBA: AlPoints });
                this.setState({ sixers: doublesixers });
                this.setState({ pelicans: doublepelicans });
                this.setState({ cavaliers: doublecavaliers });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
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
                        Al
                    </div>
                </div>
                {/* Starting my new table here */}
                <div class="container smallTable">
                    <div class="row">
                        <div class="col">
                            <table class="table table-striped table-bordered table-hover text-center ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">56</th>
                                        <td className="sixers">Philadelphia 76ers</td>
                                        <td>{this.state.sixers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">73</th>
                                        <td className="pelicans">New Orleans Pelicans</td>
                                        <td>{this.state.pelicans}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">172</th>
                                        <td className="cavs">Cleveland Cavaliers</td>
                                        <td>{this.state.cavaliers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.alNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="container">
                            <div class="row">
                                {/* Here is NFL */}
                                <div class="col">
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
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
                                                <td className="chargers">Los Angeles Chargers</td>
                                                <td>{this.state.chargers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">31</th>
                                                <td className="packers">Green Bay Packers</td>
                                                <td>{this.state.packers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">114</th>
                                                <td className="bills">Buffalo Bills</td>
                                                <td>{this.state.bills}</td>
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
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td className="liverpool">Liverpool</td>
                                                <td>{this.state.liverpool}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">75</th>
                                                <td className="leeds">Leeds United</td>
                                                <td>{this.state.leeds}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.eplTotal}</td>
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
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">20</th>
                                                <td className="lightning">Tampa Bay Lightning</td>
                                                <td>{this.state.lightning}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">39</th>
                                                <td className="knights">Vegas Golden Knights</td>
                                                <td>{this.state.knights}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">157</th>
                                                <td className="canucks">Vancouver Canucks</td>
                                                <td>{this.state.canucks}</td>
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
                                                <th scope="row">96</th>
                                                <td className="athletics">Oakland Athletics</td>
                                                <td>{this.state.athletics}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">121</th>
                                                <td className="tigers">Detroit Tigers</td>
                                                <td>{this.state.tigers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">145</th>
                                                <td className="marlins">Miami Marlins</td>
                                                <td>{this.state.marlins}</td>
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
                                                <th scope="row">44</th>
                                                <td className="senators">Scottie Scheffler</td>
                                                <td>{this.state.scheffler}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">66</th>
                                                <td className="senators">Cameron Smith</td>
                                                <td>{this.state.smith}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">110</th>
                                                <td className="senators">Max Homa</td>
                                                <td>{this.state.homa}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">169</th>
                                                <td className="senators">Mito Peirera</td>
                                                <td>{this.state.peirera}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">182</th>
                                                <td className="senators">Talor Gooch</td>
                                                <td>{this.state.gooch}</td>
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

export default al;
