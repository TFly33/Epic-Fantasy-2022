import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class neptune extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arcubs here. Each person's array will include three NBA teams. 
        allNBA: [],
        neptuneNBA: "",
        jazz: "",
        celtics: "",
        wizardss: "",
        // NFL STARTING HERE 
        // rams: 90,
        // jaguars: 60,
        // giants: 40,
        // totalNFL: 190,
        // EPL Starting HERE 
        leicester: "",
        norwich: "",
        neptuneEPL: "",
        // NHL Going here. 
        wild: "",
        rangers: "",
        jets: "",
        totalNHL: "",
        // Golf here
        spieth: "",
        ancer: "",
        zalatoris: "",
        matsuyama: "",
        fleetwood: "",
        totalGolf: "",
        // MLB Here
        cubs: 74,
        rangers: 68,
        pirates: 62,
        totalMLB: 204
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        // this.getScoresMLB();
        this.getScoresNFL();
    };

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ colts: x.Colts });
        this.setState({ cardinals: x.Cardinals });
        this.setState({ patriots: x.Patriots });
        var allNFL = (x.Colts + x.Cardinals + x.Patriots)
        this.setState({ totalNFL: allNFL });
    };


    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var cubsWin;
                var rangersWin;
                var piratesWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // cubs
                    if (fullIndex[i].team.id === 6) {
                        cubsWin = fullIndex[i].games.win.total
                    }

                    // pirates
                    if (fullIndex[i].team.id === 28) {
                        piratesWin = fullIndex[i].games.win.total
                    }

                    // rangers
                    if (fullIndex[i].team.id === 35) {
                        rangersWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = cubsWin + piratesWin + rangersWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ cubs: cubsWin });
                this.setState({ pirates: piratesWin });
                this.setState({ rangers: rangersWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ ancer: x.Ancer });
        this.setState({ spieth: x.Spieth });
        this.setState({ zalatoris: x.Zalatoris });
        this.setState({ matsuyama: x.Matsuyama });
        this.setState({ fleetwood: x.Fleetwood });
        var allGolf = x.Fleetwood + x.Zalatoris + x.Spieth + x.Matsuyama + x.Ancer;
        this.setState({ totalGolf: allGolf });
    }

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                // var atlanticResults = res.data.records[1].teamRecords;
                // // Central Division
                var centralResults = res.data.records[2].teamRecords;
                // Pacific
                // var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);
                var wildWins;
                var wildOTLS;
                var wildTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var jetsWins;
                var jetsOTLS;
                var jetsTotal;
                var allNHL;

                // Here is the wild loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // wild
                    if (centralResults[i].team.id === 30) {
                        wildWins = centralResults[i].leagueRecord.wins;
                        wildOTLS = centralResults[i].leagueRecord.ot;
                        console.log(wildWins);
                        console.log(wildOTLS);
                        console.log("this loop is running")
                    }

                    // jets
                    if (centralResults[i].team.id === 52) {
                        jetsWins = centralResults[i].leagueRecord.wins;
                        jetsOTLS = centralResults[i].leagueRecord.ot;
                        console.log(jetsWins);
                        console.log(jetsOTLS);
                        console.log("this loop is running")
                    }

                }

                // Here is the loop for the wild
                for (var i = 0; i < metroResults.length; i++) {

                    // rangers
                    if (metroResults[i].team.id === 3) {
                        rangersWins = metroResults[i].leagueRecord.wins;
                        rangersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(rangersWins);
                        console.log(rangersOTLS);
                        console.log("this loop is running")
                    }
                }

                // rangers total
                rangersTotal = (rangersWins * 2) + rangersOTLS;
                console.log(rangersTotal);

                // wild total
                wildTotal = (wildWins * 2) + wildOTLS;
                console.log(wildTotal);

                // rangers total
                jetsTotal = (jetsWins * 2) + jetsOTLS;
                console.log(jetsTotal);

                var allNHL = wildTotal + rangersTotal + jetsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ wild: wildTotal });
                this.setState({ rangers: rangersTotal });
                this.setState({ jets: jetsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var chelseaWin;
                var chelseaTie;
                var watfordWin;
                var watfordTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 49) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + chelseaWin);
                        console.log("here are the ties" + chelseaTie);
                    }

                    if (forLoopArray[i].team.id === 38) {
                        watfordWin = forLoopArray[i].all.win
                        watfordTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + watfordWin);
                        console.log("here are the ties" + watfordTie);
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var watfordTotal = (watfordWin * 4.25) + (watfordTie);

                // Here is the final result
                var neptunePoints = chelseaTotal + watfordTotal;
                this.setState({ chelsea: chelseaTotal });
                this.setState({ watford: watfordTotal });
                this.setState({ eplTotal: neptunePoints });

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
                var jazzWin = res.data.api.standings[25].win;
                var celticsWin = res.data.api.standings[9].win;
                var wizardsWin = res.data.api.standings[0].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublejazz = (jazzWin * 2);
                var doubleceltics = (celticsWin * 2);
                var doublewizards = (wizardsWin * 2);

                const tempNeptuneNBA = this.state.allNBA;

                tempNeptuneNBA.push(jazzWin);
                tempNeptuneNBA.push(celticsWin);
                tempNeptuneNBA.push(wizardsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });
                this.setState({ jazz: doublejazz });
                this.setState({ celtics: doubleceltics });
                this.setState({ wizards: doublewizards });
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
                                        <th scope="row">24</th>
                                        <td className="jazz">Utah jazz</td>
                                        <td>{this.state.jazz}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">46</th>
                                        <td className="celtics">Boston Celtics</td>
                                        <td>{this.state.celtics}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">122</th>
                                        <td className="wiz">Washington Wizards</td>
                                        <td>{this.state.wizards}</td>
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
                                                <th scope="row">34</th>
                                                <td className="cardinals">Arizona Cardinals</td>
                                                <td>{this.state.cardinals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">102</th>
                                                <td className="patriots">New England Patriots</td>
                                                <td>{this.state.patriots}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">130</th>
                                                <td className="colts">Indianapolis Colts </td>
                                                <td>{this.state.colts}</td>
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
                                                <td className="chelsea">Chelsea</td>
                                                <td>{this.state.chelsea}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">82</th>
                                                <td className="watford">Watford</td>
                                                <td>{this.state.watford}</td>
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
                                                <th scope="row">119</th>
                                                <td className="rangers">New York Rangers</td>
                                                <td>{this.state.rangers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">131</th>
                                                <td className="wild">Minnesota Wild</td>
                                                <td>{this.state.wild}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">143</th>
                                                <td className="jets">Winnipeg Jets</td>
                                                <td>{this.state.jets}</td>
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
                                                <th scope="row">158</th>
                                                <td className="cubs">Chicago Cubs</td>
                                                <td>{this.state.cubs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">170</th>
                                                <td className="rangers">Texas Rangers</td>
                                                <td>{this.state.rangers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">171</th>
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
                                                <th scope="row">27</th>
                                                <td className="senators">Jordan Spieth</td>
                                                <td>{this.state.spieth}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">58</th>
                                                <td className="senators">Abraham Ancer</td>
                                                <td>{this.state.ancer}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">70</th>
                                                <td className="senators">Will Zalatoris</td>
                                                <td>{this.state.zalatoris}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">71</th>
                                                <td className="senators">Hideki Matsuyama</td>
                                                <td>{this.state.matsuyama}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">188</th>
                                                <td className="senators">Tommy Fleetwood</td>
                                                <td>{this.state.fleetwood}</td>
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

export default neptune;