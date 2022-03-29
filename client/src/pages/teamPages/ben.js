import React from "react";
import API from "../../utils/API";
import { golfHelper } from "../../middleware/helper";

// This page is now for Mark Eres. 

class ben extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA aryankees here. Each person's array will include three NBA teams. 
        allNBA: [],
        benNBA: "",
        clippers: "",
        magic: "",
        rockets: "",
        // eagles: 90,
        // cowboys: 80,
        // redskins: 30,
        // totalNFL: 200,
        // EPL
        tottenham: "",
        bournemouth: "",
        benEPL: "",
        // NHL 
        caps: "",
        canes: "",
        blackhawks: "",
        totalNHL: "",
        // Golf here
        reed: "",
        fitzpatrick: "",
        hatton: "",
        fowler: "",
        cantlay: "",
        totalGolf: "",
        // MLB Here
        yankees: "",
        giants: "",
        redSox: "",
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
                var yankeesWin;
                var giantsWin;
                var redSoxWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    console.log("This loop is running."
                    )

                    // yankees
                    if (fullIndex[i].team.id === 25) {
                        yankeesWin = fullIndex[i].games.win.total
                    }

                    // redSox
                    if (fullIndex[i].team.id === 5) {
                        redSoxWin = fullIndex[i].games.win.total
                    }

                    // giants
                    if (fullIndex[i].team.id === 31) {
                        giantsWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = yankeesWin + redSoxWin + giantsWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ yankees: yankeesWin });
                this.setState({ redSox: redSoxWin });
                this.setState({ giants: giantsWin });

            });
    };


    getScoresPGA = () => {
        var x = golfHelper();
        Object.keys(x).forEach((key) => { x[key] = x[key] / 20 })
        this.setState({ fitzpatrick: x.Fitzpatrick });
        this.setState({ reed: x.Reed });
        this.setState({ hatton: x.Hatton });
        this.setState({ fowler: x.Fowler });
        this.setState({ cantlay: x.Cantlay });
        var allGolf = x.Cantlay + x.Fitzpatrick + x.Reed + x.Fowler + x.Hatton;
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

                var capsWins;
                var capsOTLS;
                var capsTotal;
                var canesWins;
                var canesOTLS;
                var canesTotal;
                var blackhawksWins;
                var blackhawksOTLS;
                var blackhawksTotal;
                var allNHL;

                // Here is the caps loop. 
                for (var i = 0; i < metroResults.length; i++) {
                    // caps
                    if (metroResults[i].team.id === 15) {
                        capsWins = metroResults[i].leagueRecord.wins;
                        capsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(capsWins);
                        console.log(capsOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // blackhawks
                    if (centralResults[i].team.id === 16) {
                        blackhawksWins = centralResults[i].leagueRecord.wins;
                        blackhawksOTLS = centralResults[i].leagueRecord.ot;
                        console.log(blackhawksWins);
                        console.log(blackhawksOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < metroResults.length; i++) {

                    // canes
                    if (metroResults[i].team.id === 12) {
                        canesWins = metroResults[i].leagueRecord.wins;
                        canesOTLS = metroResults[i].leagueRecord.ot;
                        console.log(canesWins);
                        console.log(canesOTLS);
                        console.log("this loop is running")
                    }
                }

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal);

                // canes total
                canesTotal = (canesWins * 2) + canesOTLS;
                console.log(canesTotal)

                // blackhawks total
                blackhawksTotal = (blackhawksWins * 2) + blackhawksOTLS;
                console.log(blackhawksTotal);

                var allNHL = capsTotal + canesTotal + blackhawksTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ caps: capsTotal });
                this.setState({ canes: canesTotal });
                this.setState({ blackhawks: blackhawksTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Eres EPL Here 

                console.log(res.data.response[0].league.standings[0])
                var manCityWin;
                var manCityTie;
                var norwichWin;
                var norwichTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0]
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 50) {
                        manCityWin = forLoopArray[i].all.win
                        manCityTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + manCityWin);
                        console.log("here are the ties" + manCityTie);
                    }

                    if (forLoopArray[i].team.id === 71) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + norwichWin);
                        console.log("here are the ties" + norwichTie);
                    }
                }

                var manCityTotal = (manCityWin * 4.25) + (manCityTie);
                var norwichTotal = (norwichWin * 4.25) + (norwichTie);

                // Here is the final result
                var eresPoints = manCityTotal + norwichTotal;
                this.setState({ manCity: manCityTotal });
                this.setState({ norwich: norwichTotal });
                this.setState({ eplTotal: eresPoints });

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
                var clippersWin = res.data.api.standings[23].win;
                var magicWin = res.data.api.standings[4].win;
                var rocketsWin = res.data.api.standings[16].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleclippers = (clippersWin * 2);
                var doublemagic = (magicWin * 2);
                var doublerockets = (rocketsWin * 2);

                const tempbenNBA = this.state.allNBA;

                tempbenNBA.push(clippersWin);
                tempbenNBA.push(magicWin);
                tempbenNBA.push(rocketsWin);

                var benDoubledScores = tempbenNBA.map(team => team * 2);

                var benPoints = 0;

                for (var i = 0; i < benDoubledScores.length; i++) {
                    benPoints += benDoubledScores[i];
                }
                console.log(benPoints);
                this.setState({ benNBA: benPoints });
                this.setState({ clippers: doubleclippers });
                this.setState({ magic: doublemagic });
                this.setState({ rockets: doublerockets });
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
                        Eres
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
                                        <th scope="row">31</th>
                                        <td className="clippers">LA Clippers</td>
                                        <td>{this.state.clippers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">162</th>
                                        <td className="magic">Orlando Magic</td>
                                        <td>{this.state.magic}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">179</th>
                                        <td className="rockets">Houston Rockets</td>
                                        <td>{this.state.rockets}</td>
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
                                                <th scope="row">16</th>
                                                <td className="eagles">Philadelphia Eagles</td>
                                                <td>{this.state.eagles}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">72</th>
                                                <td className="cowboys">Dallas Cowboys</td>
                                                <td>{this.state.cowboys}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">126</th>
                                                <td className="redskins">Washington Redskins</td>
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
                                                <th scope="row">5</th>
                                                <td className="mancity">Manchester City</td>
                                                <td>{this.state.manCity}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">189</th>
                                                <td className="norwich">Norwich</td>
                                                <td>{this.state.norwich}</td>
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
                                                <th scope="row">99</th>
                                                <td className="capitals">Washington Capitals</td>
                                                <td>{this.state.caps}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">116</th>
                                                <td className="hurricanes">Carolina Hurricanes</td>
                                                <td>{this.state.canes}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">149</th>
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
                                                <th scope="row">30</th>
                                                <td className="yankees">New York Yankees</td>
                                                <td>{this.state.yankees}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">73</th>
                                                <td className="sfGiants">San Francisco Giants</td>
                                                <td>{this.state.giants}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">83</th>
                                                <td className="redSox">Boston Red Sox</td>
                                                <td>{this.state.redSox}</td>
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
                                                <th scope="row">20</th>
                                                <td className="senators">Patrick Cantlay</td>
                                                <td>{this.state.cantlay}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">68</th>
                                                <td className="senators">Patrick Reed</td>
                                                <td>{this.state.reed}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">124</th>
                                                <td className="senators">Matthew Fitzpatrick</td>
                                                <td>{this.state.fitzpatrick}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">137</th>
                                                <td className="senators">Tyrell Hatton</td>
                                                <td>{this.state.hatton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">153</th>
                                                <td className="senators">Rickie Fowler</td>
                                                <td>{this.state.fowler}</td>
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

export default ben;