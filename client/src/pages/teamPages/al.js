import React from "react";
import API from "../../utils/API";

class al extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        alNBA: "",
        heat: "",
        hornets: "",
        cavs: "",
        chargers: "",
        packers: "",
        bills: "",
        totalNFL: "",
        // EPL
        everton: "",
        southhampton: "",
        alEPL: "",
        // NHL
        lightning: "",
        bruins: "",
        wings: "",
        totalNHL: "",
        // PGA here
        morikawa: "",
        simpson: "",
        hatton: "",
        smith: "",
        conners: "",
        totalPGA: ""
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresPGA();
        // this.getScoresNHL();
    }

    getScoresPGA = () => {
        // Al's PGA Here. Golf Team 1. 
        var Morikawa = 3.95
        var Simpson = 13.65
        var Hatton = 15.3
        var Smith = 25.1
        var Conners = 18.15
        var pgaTotal = Morikawa + Simpson + Hatton + Smith + Conners
        this.setState({ totalPGA: pgaTotal });
        this.setState({ morikawa: Morikawa });
        this.setState({ simpson: Simpson });
        this.setState({ hatton: Hatton });
        this.setState({ smith: Smith });
        this.setState({ conners: Conners });
    };

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
                // var pacificResults = res.data.records[3].teamRecords;

                console.log(atlanticResults);

                var lightningWins;
                var lightningOTLS;
                var lightningTotal;
                var bruinsWins;
                var bruinsOTLS;
                var bruinsTotal;
                var wingsWins;
                var wingsOTLS;
                var wingsTotal;
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

                    // wings
                    if (atlanticResults[i].team.id === 17) {
                        wingsWins = atlanticResults[i].leagueRecord.wins;
                        wingsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(wingsWins);
                        console.log(wingsOTLS);
                        console.log("this loop is running")
                    }

                    // bruins
                    if (atlanticResults[i].team.id === 6) {
                        bruinsWins = atlanticResults[i].leagueRecord.wins;
                        bruinsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(bruinsWins);
                        console.log(bruinsOTLS);
                        console.log("this loop is running")
                    }
                }

                // lightning total
                lightningTotal = (lightningWins * 2) + lightningOTLS;
                console.log(lightningTotal);

                // bruins total
                bruinsTotal = (bruinsWins * 2) + bruinsOTLS;
                console.log(bruinsTotal)

                // wings total
                wingsTotal = (wingsWins * 2) + wingsOTLS;
                console.log(wingsTotal);

                var allNHL = lightningTotal + bruinsTotal + wingsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ lightning: lightningTotal });
                this.setState({ bruins: bruinsTotal });
                this.setState({ wings: wingsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Goose EPL Here 
                var evertonWin;
                var evertonTie;
                var southhamptonWin;
                var southhamptonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);

                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 49) {
                        evertonWin = forLoopArray[i].all.win
                        evertonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + evertonWin);
                        console.log("here are the ties" + evertonTie);
                    }

                    if (forLoopArray[i].team.id === 63) {
                        southhamptonWin = forLoopArray[i].all.win
                        southhamptonTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + southhamptonWin);
                        console.log("here are the ties" + southhamptonTie);
                    }
                }

                var evertonTotal = (evertonWin * 4.25) + (evertonTie);
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie);

                // Here is the final result
                var alPoints = evertonTotal + southhamptonTotal;
                this.setState({ everton: evertonTotal });
                this.setState({ southhampton: southhamptonTotal });
                this.setState({ alEPL: alPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // Here are Al NBA points. 
                var heatWin = res.data.api.standings[0].win;
                var hornetsWin = res.data.api.standings[3].win;
                var cavsWin = res.data.api.standings[14].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleheat = (heatWin * 2.25);
                var doublehornets = (hornetsWin * 2.25);
                var doublecavs = (cavsWin * 2.25);

                const tempAlNBA = this.state.allNBA;

                tempAlNBA.push(heatWin);
                tempAlNBA.push(hornetsWin);
                tempAlNBA.push(cavsWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2.25);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                console.log(AlPoints);
                this.setState({ alNBA: AlPoints });
                this.setState({ heat: doubleheat });
                this.setState({ hornets: doublehornets });
                this.setState({ cavs: doublecavs });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/Home">Epic Fantasy League</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <div className="dropdown show">
                                    <div className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="tommy">Tommy</a>
                                        <a className="dropdown-item" href="patrick">Patrick</a>
                                        <a className="dropdown-item" href="james">James</a>
                                        <a className="dropdown-item" href="neptune">Neptune</a>
                                        <a className="dropdown-item" href="dj">DJ</a>
                                        <a className="dropdown-item" href="goose">Goose</a>
                                        <a className="dropdown-item" href="al">Al</a>
                                        <a className="dropdown-item" href="joe">Joe</a>
                                        <a className="dropdown-item" href="steids">Steids</a>
                                        <a className="dropdown-item" href="ben">Eres/JMar</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/Login">Login</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/draft">Draft Results</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/points">Points System</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="card">
                    <div className="card-body text-center bg-light text-secondary">
                        Al
                </div>
                </div>
                {/* Starting my new table here */}
                <div className="container smallTable">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-bordered table-hover text-center ">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">26</th>
                                        <td className="heat">Miami Heat</td>
                                        <td>{this.state.heat}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">104</th>
                                        <td className="hornets">Charlotte Hornets</td>
                                        <td>{this.state.hornets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">146</th>
                                        <td className="wiz">Cleveland Cavaliers</td>
                                        <td>{this.state.cavs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.alNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="container">
                            <div className="row">
                                {/* Here is NFL */}
                                <div className="col">
                                    <table className="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">35</th>
                                                <td className="browns">Cleveland Browns</td>
                                                <td>{this.state.chargers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">87</th>
                                                <td className="panthers">Carolina Panthers</td>
                                                <td>{this.state.packers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">117</th>
                                                <td className="lions">Detroit Lions</td>
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
                                                <th scope="row">6</th>
                                                <td className="chelsea">Chelsea</td>
                                                <td>{this.state.everton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">67</th>
                                                <td className="leeds">Leeds United</td>
                                                <td>{this.state.southhampton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.alEPL}</td>
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
                                                <th scope="row">53</th>
                                                <td className="capitals">Washington Capitals</td>
                                                <td>{this.state.lightning}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">74</th>
                                                <td className="hurricanes">Carolina Hurricanes</td>
                                                <td>{this.state.bruins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">94</th>
                                                <td className="rangers">New York Rangers</td>
                                                <td>{this.state.wings}</td>
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

                        {/* Adding the MLB Table here*/}
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
                                    <table class="table table-striped table-bordered table-hover text-center smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">15</th>
                                                <td className="yankees">New York Yankees</td>
                                                <td>{this.state.lightning}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">48</th>
                                                <td className="athletics">Oakland Athletics</td>
                                                <td>{this.state.bruins}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">127</th>
                                                <td className="tigers">Detroit Tigers</td>
                                                <td>{this.state.wings}</td>
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
                                                <th scope="row">134</th>
                                                <td className="">Colin Morikawa</td>
                                                <td>{this.state.morikawa}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Webb Simpson</td>
                                                <td>{this.state.simpson}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Tyrell Hatton</td>
                                                <td>{this.state.hatton}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Cameron Smith</td>
                                                <td>{this.state.smith}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Corey Conners</td>
                                                <td>{this.state.conners}</td>
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

export default al;
