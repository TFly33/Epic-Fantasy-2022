import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

class steids extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA ardodgers here. Each person's array will include three NBA teams. 
        allNBA: [],
        steidsNBA: "",
        hawks: "",
        raptors: "",
        tWolves: "",
        // browns: 60,
        // steelers: 80,
        // buccaneers: 70,
        // totalNFL: 210,
        // EPL Teams Here
        westHam: "",
        watford: "",
        steidsEPL: "",
        // NHL
        avalanche: "",
        jackets: "",
        leafs: "",
        totalNHL: "",
        // Golf here
        english: "",
        burns: "",
        conners: "",
        kokrak: "",
        kim: "",
        totalGolf: "",
        // MLB Here
        dodgers: "",
        nationals: "",
        dBacks: "",
        totalMLB: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
        this.getScoresPGA();
        this.getScoresMLB();
        this.getScoresNFL();
    };

    getScoresNFL = () => {
        var x = golfHelper();
        this.setState({ panthers: x.Panthers });
        this.setState({ bears: x.Bears });
        this.setState({ ravens: x.Ravens });
        var allNFL = (x.Panthers + x.Bears + x.Ravens)
        this.setState({ totalNFL: allNFL });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var dodgersWin;
                var nationalsWin;
                var dBacksWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // dodgers
                    if (fullIndex[i].team.id === 18) {
                        dodgersWin = fullIndex[i].games.win.total
                    }

                    // dBacks
                    if (fullIndex[i].team.id === 2) {
                        dBacksWin = fullIndex[i].games.win.total
                    }

                    // nationals
                    if (fullIndex[i].team.id === 37) {
                        nationalsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = dodgersWin + dBacksWin + nationalsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ dodgers: dodgersWin });
                this.setState({ dBacks: dBacksWin });
                this.setState({ nationals: nationalsWin });

            });
    };

    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ burns: x.Burns });
        this.setState({ english: x.English });
        this.setState({ conners: x.Conners });
        this.setState({ kokrak: x.Kokrak });
        this.setState({ kim: x.Kim });
        var allGolf = x.Kim + x.Burns + x.English + x.Kokrak + x.Conners;
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
                // Pacific
                var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults)
                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var jacketsWins;
                var jacketsOTLS;
                var jacketsTotal;
                var allNHL;

                // Here is the avalanche for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        console.log(avalancheWins);
                        console.log(avalancheOTLS);
                        console.log("this loop is running")
                    }

                }

                for (var i = 0; i < atlanticResults.length; i++) {
                    // jackets
                    if (atlanticResults[i].team.id === 10) {
                        leafsWins = atlanticResults[i].leagueRecord.wins;
                        leafsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(leafsWins);
                        console.log(leafsOTLS);
                        console.log("this loop is running")
                    }
                }

                // Here is the loop for the jackets
                for (var i = 0; i < metroResults.length; i++) {

                    // avalanche
                    if (metroResults[i].team.id === 29) {
                        jacketsWins = metroResults[i].leagueRecord.wins;
                        jacketsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(jacketsWins);
                        console.log(jacketsOTLS);
                        console.log("this loop is running")
                    }
                }

                // avalanche total
                avalancheTotal = (avalancheWins * 2) + avalancheOTLS;
                console.log(avalancheTotal);

                // leafs total
                leafsTotal = (leafsWins * 2) + leafsOTLS;
                console.log(leafsTotal)

                // jackets total
                jacketsTotal = (jacketsWins * 2) + jacketsOTLS;
                console.log(jacketsTotal);

                var allNHL = avalancheTotal + jacketsTotal + leafsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ avalanche: avalancheTotal });
                this.setState({ jackets: jacketsTotal });
                this.setState({ leafs: leafsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                console.log(res.data.response[0].league.standings[0])
                var westHamWin;
                var westHamTie;
                var burnleyWin;
                var burnleyTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 48) {
                        westHamWin = forLoopArray[i].all.win
                        westHamTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + westHamWin);
                        console.log("here are the ties" + westHamTie);
                    }

                    if (forLoopArray[i].team.id === 44) {
                        burnleyWin = forLoopArray[i].all.win
                        burnleyTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + burnleyWin);
                        console.log("here are the ties" + burnleyTie);
                    }
                }

                var westHamTotal = (westHamWin * 4.25) + (westHamTie);
                var burnleyTotal = (burnleyWin * 4.25) + (burnleyTie);

                // Here is the final result
                var steidsPoints = westHamTotal + burnleyTotal;
                this.setState({ westHam: westHamTotal });
                this.setState({ burnley: burnleyTotal });
                this.setState({ eplTotal: steidsPoints });

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
                var hawksWin = res.data.api.standings[3].win;
                var raptorsWin = res.data.api.standings[8].win;
                var tWolvesWin = res.data.api.standings[26].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublehawks = (hawksWin * 2);
                var doubleraptors = (raptorsWin * 2);
                var doubletWolves = (tWolvesWin * 2);

                const tempsteidsNBA = this.state.allNBA;

                tempsteidsNBA.push(hawksWin);
                tempsteidsNBA.push(raptorsWin);
                tempsteidsNBA.push(tWolvesWin);

                var steidsDoubledScores = tempsteidsNBA.map(team => team * 2);

                var steidsPoints = 0;

                for (var i = 0; i < steidsDoubledScores.length; i++) {
                    steidsPoints += steidsDoubledScores[i];
                }
                // console.log(steidsPoints);
                this.setState({ steidsNBA: steidsPoints });
                this.setState({ hawks: doublehawks });
                this.setState({ raptors: doubleraptors });
                this.setState({ tWolves: doubletWolves });
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
                                        <th scope="row">35</th>
                                        <td className="hawks">Atlanta Hawks</td>
                                        <td>{this.state.hawks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">94</th>
                                        <td className="raptors">Toronto Raptors</td>
                                        <td>{this.state.raptors}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">104</th>
                                        <td className="tWolves">Minnesota Timberwolves</td>
                                        <td>{this.state.tWolves}</td>
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
                                                <th scope="row">26</th>
                                                <td className="ravens">Baltimore Ravens</td>
                                                <td>{this.state.ravens}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">117</th>
                                                <td className="bears">Chicago Bears</td>
                                                <td>{this.state.bears}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">127</th>
                                                <td className="panthers">Carolina Panthers</td>
                                                <td>{this.state.panthers}</td>
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
                                                <th scope="row">53</th>
                                                <td className="westHam">Westham United</td>
                                                <td>{this.state.westHam}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">81</th>
                                                <td className="burnley">Burnley</td>
                                                <td>{this.state.burnley}</td>
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
                                                <th scope="row">15</th>
                                                <td className="avalanche">Colorado Avalanche</td>
                                                <td>{this.state.avalanche}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">67</th>
                                                <td className="leafs">Toronto Maple Leafs</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">173</th>
                                                <td className="jackets">Columbus Blue Jackets</td>
                                                <td>{this.state.jackets}</td>
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
                                                <th scope="row">6</th>
                                                <td className="dodgers">LA Dodgers</td>
                                                <td>{this.state.dodgers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">146</th>
                                                <td className="nationals">Washington Nationals</td>
                                                <td>{this.state.nationals}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">190</th>
                                                <td className="diamondbacks">Arizona Diamondbacks</td>
                                                <td>{this.state.dBacks}</td>
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
                                                <th scope="row">48</th>
                                                <td className="senators">Harris English</td>
                                                <td>{this.state.english}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">74</th>
                                                <td className="senators">Sam Burns</td>
                                                <td>{this.state.burns}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">87</th>
                                                <td className="senators">Corey Conners</td>
                                                <td>{this.state.conners}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">134</th>
                                                <td className="senators">Jason Kokrak</td>
                                                <td>{this.state.kokrak}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">168</th>
                                                <td className="senators">Si Woo Kim</td>
                                                <td>{this.state.kim}</td>
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

export default steids;