import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class james extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arastros here. Each person's array will include three NBA teams. 
        allNBA: [],
        jamesNBA: "",
        lakers: "",
        pacers: "",
        thunder: "",
        saints: 130,
        falcons: 70,
        lions: 32.5,
        totalNFL: 232.5,
        // EPL States HEre
        manU: "",
        leicester: "",
        jamesEPL: "",
        // NHL HERE
        flames: "",
        panthers: "",
        stars: "",
        totalNHL: "",
        // Golf here
        koepka: "",
        im: "",
        horschel: "",
        na: "",
        lowry: "",
        totalGolf: "",
        // MLB Here
        astros: "",
        cardinals: "",
        phillies: "",
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
                var astrosWin;
                var cardinalsWin;
                var philliesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // astros
                    if (fullIndex[i].team.id === 15) {
                        astrosWin = fullIndex[i].games.win.total
                    }

                    // phillies
                    if (fullIndex[i].team.id === 27) {
                        philliesWin = fullIndex[i].games.win.total
                    }

                    // cardinals
                    if (fullIndex[i].team.id === 33) {
                        cardinalsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = astrosWin + philliesWin + cardinalsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ astros: astrosWin });
                this.setState({ phillies: philliesWin });
                this.setState({ cardinals: cardinalsWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ im: x.Im });
        this.setState({ koepka: x.Koepka });
        this.setState({ horschel: x.Horschel });
        this.setState({ na: x.Na });
        this.setState({ lowry: x.Lowry });
        var allGolf = x.Lowry + x.Im + x.Koepka + x.Na + x.Horschel;
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

                console.log(centralResults);
                var flamesWins;
                var flamesOTLS;
                var flamesTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var starsWins;
                var starsOTLS;
                var starsTotal;
                var allNHL;

                // Here is the flames loop. 
                for (var i = 0; i < pacificResults.length; i++) {
                    // flames
                    if (pacificResults[i].team.id === 20) {
                        flamesWins = pacificResults[i].leagueRecord.wins;
                        flamesOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(flamesWins);
                        console.log(flamesOTLS);
                        console.log("this loop is running")
                    }
                }


                // Here is the loop for the panthers
                for (var i = 0; i < atlanticResults.length; i++) {

                    // panthers
                    if (atlanticResults[i].team.id === 13) {
                        panthersWins = atlanticResults[i].leagueRecord.wins;
                        panthersOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // stars
                    if (centralResults[i].team.id === 25) {
                        starsWins = centralResults[i].leagueRecord.wins;
                        starsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(starsWins);
                        console.log(starsOTLS);
                        console.log("this loop is running")
                    }
                }

                // panthers total
                panthersTotal = (panthersWins * 2) + panthersOTLS;
                console.log(panthersTotal)

                // stars total
                starsTotal = (starsWins * 2) + starsOTLS;
                console.log(starsTotal);

                // flames total
                flamesTotal = (flamesWins * 2) + flamesOTLS;
                console.log(flamesTotal);

                var allNHL = flamesTotal + panthersTotal + starsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ flames: flamesTotal });
                this.setState({ panthers: panthersTotal });
                this.setState({ stars: starsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var manUWin;
                var manUTie;
                var leicesterWin;
                var leicesterTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 33) {
                        manUWin = forLoopArray[i].all.win
                        manUTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manUWin);
                        console.log("here are the ties" + manUTie);
                    }

                    if (forLoopArray[i].team.id === 46) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + leicesterWin);
                        console.log("here are the ties" + leicesterTie);
                    }
                }

                var manUTotal = (manUWin * 4.25) + (manUTie);
                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);

                // Here is the final result
                var jamesPoints = manUTotal + leicesterTotal;
                this.setState({ manU: manUTotal });
                this.setState({ leicester: leicesterTotal });
                this.setState({ eplTotal: jamesPoints });
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
                var lakersWin = res.data.api.standings[24].win;
                var pacersWin = res.data.api.standings[13].win;
                var thunderWin = res.data.api.standings[29].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublelakers = (lakersWin * 2);
                var doublepacers = (pacersWin * 2);
                var doublethunder = (thunderWin * 2);

                const tempJamesNBA = this.state.allNBA;

                tempJamesNBA.push(lakersWin);
                tempJamesNBA.push(pacersWin);
                tempJamesNBA.push(thunderWin);

                var JamesDoubledScores = tempJamesNBA.map(team => team * 2);

                var JamesPoints = 0;

                for (var i = 0; i < JamesDoubledScores.length; i++) {
                    JamesPoints += JamesDoubledScores[i];
                }
                console.log(JamesPoints);
                this.setState({ jamesNBA: JamesPoints });
                this.setState({ lakers: doublelakers });
                this.setState({ pacers: doublepacers });
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
                                        <th scope="row">17</th>
                                        <td className="lakers">LA Lakers</td>
                                        <td>{this.state.lakers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">80</th>
                                        <td className="pacers">Indiana Pacers</td>
                                        <td>{this.state.pacers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">187</th>
                                        <td className="thunder">OKC Thunder</td>
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
                                                <th scope="row">15</th>
                                                <td className="saints">New Orleans Saints</td>
                                                <td>{this.state.saints}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">74</th>
                                                <td className="falcons">Atlanta Falcons</td>
                                                <td>{this.state.falcons}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">134</th>
                                                <td className="lions">Detroit Lions</td>
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
                                                <th scope="row">4</th>
                                                <td className="manU">Manchester United</td>
                                                <td>{this.state.manU}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">60</th>
                                                <td className="leicester"> Leicester City</td>
                                                <td>{this.state.leicester}</td>
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
                                                <th scope="row">116</th>
                                                <td className="fPanthers">Florida Panthers</td>
                                                <td>{this.state.flames}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">136</th>
                                                <td className="stars">Dallas Stars</td>
                                                <td>{this.state.stars}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">117</th>
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
                                                <th scope="row">61</th>
                                                <td className="astros">Houston Astros</td>
                                                <td>{this.state.astros}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">97</th>
                                                <td className="cardinals">St. Louis Cardinals</td>
                                                <td>{this.state.cardinals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">105</th>
                                                <td className="phillies">Philadelphia Phillies</td>
                                                <td>{this.state.phillies}</td>
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
                                                <th scope="row">41</th>
                                                <td className="senators">Brooks Koepka</td>
                                                <td>{this.state.koepka}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">84</th>
                                                <td className="senators">Sungjae Im</td>
                                                <td>{this.state.im}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">152</th>
                                                <td className="senators">Billy Horschel</td>
                                                <td>{this.state.horschel}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">161</th>
                                                <td className="senators">Kevin Na</td>
                                                <td>{this.state.na}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">180</th>
                                                <td className="senators">Shane Lowry</td>
                                                <td>{this.state.lowry}</td>
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

export default james;