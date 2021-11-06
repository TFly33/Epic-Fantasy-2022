import React from "react";
import API from "../../utils/API";


class tommy extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        warriors: "",
        magic: "",
        twolves: "",
        // NFL Here
        rams: "",
        steelers: "",
        dolphins: "",
        totalNFL: "",
        // Adding EPL Results Here:
        chelsea: "",
        brighton: "",
        eplTotal: "",
        // NHL States here 
        blackhawks: "",
        knights: "",
        canucks: "",
        totalNHL: "",
        // PGA States here
        koepka: "",
        matsuyama: "",
        english: "",
        kokrak: "",
        lowry: "",
        totalPGA: "",
        // MLB States here 
        astros: "",
        reds: "",
        orioles: "",
        totalMLB: ""
    }

    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresNHL();
        this.getScoresEPL();
        this.getScoresPGA();
        this.getScoresMLB();
        this.getScoresNFL();
    }

    getScoresNFL = () => {
        var Rams = 65.8
        var Steelers = 37.6
        var Dolphins = 9.4
        var allNFL = Rams + Steelers + Dolphins
        this.setState({ totalNFL: allNFL.toFixed(2) })
        this.setState({ steelers: Steelers })
        this.setState({ dolphins: Dolphins })
        this.setState({ rams: Rams })
    };


    getScoresPGA = () => {
        // Tom's PGA Here. Golf Team 8. 
        var Koepka = 78
        var Matsuyama = 80
        var English = 102
        var Kokrak = 82
        var Lowry = 36
        var pgaTotal = Koepka + Matsuyama + English + Kokrak + Lowry
        this.setState({ totalPGA: pgaTotal });
        this.setState({ koepka: Koepka });
        this.setState({ matsuyama: Matsuyama });
        this.setState({ english: English });
        this.setState({ kokrak: Kokrak });
        this.setState({ lowry: Lowry });
    }

    getScoresMLB = () => {
        API.getScoresMLB()
            .then(res => {
                // console.log(res.data.response[0]);
                var fullIndex = res.data.response[0];
                var astrosWin;
                var oriolesWin;
                var redsWin;

                for (var i = 0; i < fullIndex.length; i++) {
                    // console.log("This loop is running."
                    // )

                    // Astros
                    if (fullIndex[i].team.id === 15) {
                        astrosWin = fullIndex[i].games.win.total
                    }

                    // Reds
                    if (fullIndex[i].team.id === 8) {
                        redsWin = fullIndex[i].games.win.total
                    }

                    // Orioles
                    if (fullIndex[i].team.id === 4) {
                        oriolesWin = fullIndex[i].games.win.total
                    }

                }

                var allMLB = astrosWin + redsWin + oriolesWin;

                this.setState({ totalMLB: allMLB });
                this.setState({ astros: astrosWin });
                this.setState({ reds: redsWin });
                this.setState({ orioles: oriolesWin });

            });
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // NHL FOR TOM. Let's try and create this properly for 2021.The Divisions got changed for 2021, so need to change this a bit. 
                var westResults = res.data.records[0].teamRecords;
                var northResults = res.data.records[2].teamRecords;
                var eastResults = res.data.records[1].teamRecords;
                var centralResults = res.data.records[3].teamRecords;

                var canucksWins;
                var canucksOTLS;
                var canucksTotal;
                var canadiansWins;
                var canadiansOTLS;
                var canadiansTotal;
                var ducksWins;
                var ducksOTLS;
                var ducksTotal;

                // For the Canucks: 
                for (var i = 0; i < northResults.length; i++) {

                    // Canucks
                    if (northResults[i].team.id === 23) {
                        canucksWins = northResults[i].leagueRecord.wins;
                        canucksOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < eastResults.length; i++) {

                    // Canucks
                    if (eastResults[i].team.id === 23) {
                        canucksWins = eastResults[i].leagueRecord.wins;
                        canucksOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < westResults.length; i++) {

                    // Canucks
                    if (westResults[i].team.id === 23) {
                        canucksWins = westResults[i].leagueRecord.wins;
                        canucksOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                // For the Canucks: 
                for (var i = 0; i < centralResults.length; i++) {

                    // Canucks
                    if (centralResults[i].team.id === 23) {
                        canucksWins = centralResults[i].leagueRecord.wins;
                        canucksOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Canadians

                for (var i = 0; i < northResults.length; i++) {

                    // canadians
                    if (northResults[i].team.id === 8) {
                        canadiansWins = northResults[i].leagueRecord.wins;
                        canadiansOTLS = northResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < eastResults.length; i++) {

                    // canadians
                    if (eastResults[i].team.id === 8) {
                        canadiansWins = eastResults[i].leagueRecord.wins;
                        canadiansOTLS = eastResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < westResults.length; i++) {

                    // canadians
                    if (westResults[i].team.id === 8) {
                        canadiansWins = westResults[i].leagueRecord.wins;
                        canadiansOTLS = westResults[i].leagueRecord.ot;
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // canadians
                    if (centralResults[i].team.id === 8) {
                        canadiansWins = centralResults[i].leagueRecord.wins;
                        canadiansOTLS = centralResults[i].leagueRecord.ot;
                    }
                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < westResults.length; i++) {
                    // ducks
                    if (westResults[i].team.id === 24) {
                        ducksWins = westResults[i].leagueRecord.wins;
                        ducksOTLS = westResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < eastResults.length; i++) {
                    // ducks
                    if (eastResults[i].team.id === 24) {
                        ducksWins = eastResults[i].leagueRecord.wins;
                        ducksOTLS = eastResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < centralResults.length; i++) {
                    // ducks
                    if (centralResults[i].team.id === 24) {
                        ducksWins = centralResults[i].leagueRecord.wins;
                        ducksOTLS = centralResults[i].leagueRecord.ot;
                    }

                }

                // Here is the ducks/kings for loop. 
                for (var i = 0; i < northResults.length; i++) {
                    // ducks
                    if (northResults[i].team.id === 24) {
                        ducksWins = northResults[i].leagueRecord.wins;
                        ducksOTLS = northResults[i].leagueRecord.ot;
                    }

                }

                // canucks total
                canucksTotal = (canucksWins * 2.9) + (canucksOTLS * 1.45);
                // console.log(canucksTotal);

                // canadians total
                canadiansTotal = (canadiansWins * 2.9) + (canadiansOTLS * 1.45);
                // console.log(canadiansTotal);

                // ducks total
                ducksTotal = (ducksWins * 2.9) + (ducksOTLS * 1.45);
                //  console.log(ducksTotal);

                var allNHL = (canucksTotal + canadiansTotal + ducksTotal).toFixed(1);
                // console.log(allNHL + " Here is Tom NHL")

                this.setState({ totalNHL: allNHL });
                this.setState({ canadians: canadiansTotal });
                this.setState({ canucks: canucksTotal });
                this.setState({ ducks: ducksTotal });
            })
            .catch(error => {
                console.log(error)
            });
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR TOMMY. 
                //  Chelsea
                // console.log(res)
                var chelseaWin;
                var chelseaTie;
                var brightonWin;
                var brightonTie;

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                for (var i = 0; i < forLoopArray.length; i++) {

                    if (forLoopArray[i].team.id === 47) {
                        chelseaWin = forLoopArray[i].all.win
                        chelseaTie = forLoopArray[i].all.draw
                    }

                    if (forLoopArray[i].team.id === 46) {
                        brightonWin = forLoopArray[i].all.win
                        brightonTie = forLoopArray[i].all.draw
                    }
                }

                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                var brightonTotal = (brightonWin * 4.25) + (brightonTie);

                // Here is the final result
                var tomPoints = chelseaTotal + brightonTotal;
                this.setState({ chelsea: chelseaTotal });
                this.setState({ brighton: brightonTotal });
                this.setState({ eplTotal: tomPoints });

                // And now I need to run the totalscores function so that it can get logged. 
                // this.totalScores();

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY 2021 
                // THis is now warriors. 
                var warriorsWin = res.data.api.standings[24].win;
                // And Magic
                var magicWin = res.data.api.standings[2].win;
                // and Twolves
                var twolvesWin = res.data.api.standings[28].win;
                // console.log(res.data.api.standings);

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleWarriors = (warriorsWin * 2.25);
                var doubleMagic = (magicWin * 2.25);
                var doubletwolves = (twolvesWin * 2.25);

                const tempTomNBA = this.state.allNBA;
                tempTomNBA.push(warriorsWin);
                tempTomNBA.push(magicWin);
                tempTomNBA.push(twolvesWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2.25);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                this.setState({ tomNBA: TomPoints });
                this.setState({ magic: doubleMagic });
                this.setState({ warriors: doubleWarriors });
                this.setState({ twolves: doubletwolves });
            })
            .catch(error => {
                console.log(error)
            });
    }


    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div className="text-center">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/Home">Epic Fantasy League</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Home">Standings</a>
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
                        Tommy
                     </div>
                </div>
                {/* Starting my new tables here */}
                <div className="container smallTable">
                    <div className="row">
                        <div className="col">
                            {/* Here is NBA */}
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft Pick</th>
                                        <th scope="col-6">NBA Team</th>
                                        <th scope="col-6">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">55</th>
                                        <td className="warriors">Golden State Warriors</td>
                                        <td>{this.state.warriors}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">90</th>
                                        <td className="magic">Orlando Magic</td>
                                        <td>{this.state.magic}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">91</th>
                                        <td className="tWolves">Minnesota Timberwolves</td>
                                        <td>{this.state.twolves}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.tomNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="container smallTable">
                            <div className="row">
                                <div className="col">
                                    {/* Here is NFL */}
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NFL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">24</th>
                                                <td className="rams">Los Angeles Rams</td>
                                                <td>{this.state.rams}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">37</th>
                                                <td className="steelers">Pittsburgh Steelers</td>
                                                <td>{this.state.steelers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">46</th>
                                                <td className="dolphins">Miami Dolphins</td>
                                                <td>{this.state.dolphins}</td>
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

                        <div className="container smallTable">
                            <div className="row">
                                <div className="col">
                                    {/* Here is EPL */}
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">EPL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td className="chelsea">Tottenham</td>
                                                <td>{this.state.chelsea}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">12</th>
                                                <td className="brighton">Leicester</td>
                                                <td>{this.state.brighton}</td>
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

                        <div className="container smallTable">
                            <div className="row">
                                <div className="col">
                                    {/* Here is NFL */}
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">NHL Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">109</th>
                                                <td className="canucks">Vancouver Canucks</td>
                                                <td>{this.state.canucks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">112</th>
                                                <td className="canadiens">Montreal Canadiens</td>
                                                <td>{this.state.canadians}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">139</th>
                                                <td className="ducks">Anaheim Mighty Ducks</td>
                                                <td>{this.state.ducks}</td>
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
                                    {/* Here is MLB */}
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">65</th>
                                                <td className="astros">Houston Astros</td>
                                                <td>{this.state.astros}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">76</th>
                                                <td className="reds">Cincinnati Reds</td>
                                                <td>{this.state.reds}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">122</th>
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
                                                <th scope="row">141</th>
                                                <td className="">Brooks Koepka</td>
                                                <td>{this.state.koepka}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Matsuyama</td>
                                                <td>{this.state.matsuyama}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Harris English</td>
                                                <td>{this.state.english}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Jason Kokrak</td>
                                                <td>{this.state.kokrak}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td className="">Shane Lowry</td>
                                                <td>{this.state.lowry}</td>
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

                <body className="d-flex flex-column">
                    <div id="page-content">
                        <div className="container text-center">
                            <div class="row justify-content-center">
                                <div className="col-md-7">
                                    {/* Adding this custom footer I found online. Requires some fake text. Here it is below.  */}
                                    <h1 className="font-weight-light mt-4 text-white">Sticky Footer using Flexbox</h1>
                                    <p className="lead text-white-50">Use just two Bootstrap 4 utility classes and three custom CSS rules and you will have a flexbox enabled sticky footer for your website!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer id="sticky-footer" className="py-2 bg-dark text-white-50">
                        <div className="container text-center">
                            <small>Copyright &copy; Epic Fantasy League 2021</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default tommy;