import React from "react";
import API from "../../utils/API";

class al extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        alNBA: "",
        mavericks: "",
        magic: "",
        wizards: "",
        chargers: 50,
        packers: 130,
        bills: 100,
        totalNFL: 280,
        // EPL
        everton: "",
        southhampton: "",
        alEPL: "",
        // NHL
        lightning: "",
        bruins: "",
        wings: "",
        totalNHL: "",
    }

    componentDidMount = () => {
        this.getScoresNBA();
        // this.getScoresEPL();
        this.getScoresNHL();
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
                // HERE ARE EPL TEAMS FOR Al. 
                //  everton
                var evertonWin = res.data.api.standings[0][10].all.win;
                var evertonTie = res.data.api.standings[0][10].all.draw;
                var evertonTotal = (evertonWin * 4.25) + (evertonTie);

                // southhampton results
                var southhamptonWin = res.data.api.standings[0][11].all.win;
                var southhamptonTie = res.data.api.standings[0][11].all.draw;
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie)

                // Here is the final result
                var alPoints = evertonTotal + southhamptonTotal
                this.setState({ alEPL: alPoints });
                this.setState({ everton: evertonTotal });
                this.setState({ southhampton: southhamptonTotal });

                // And now I need to run the totalscores function so that it can get logged. 
                this.totalScores();

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
                var mavericksWin = res.data.api.standings[19].win;
                var magicWin = res.data.api.standings[0].win;
                var wizardsWin = res.data.api.standings[3].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleMavericks = (mavericksWin * 2);
                var doubleMagic = (magicWin * 2);
                var doubleWizards = (wizardsWin * 2);

                const tempAlNBA = this.state.allNBA;

                tempAlNBA.push(mavericksWin);
                tempAlNBA.push(magicWin);
                tempAlNBA.push(wizardsWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                console.log(AlPoints);
                this.setState({ alNBA: AlPoints });
                this.setState({ mavericks: doubleMavericks });
                this.setState({ magic: doubleMagic });
                this.setState({ wizards: doubleWizards });
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
                            <li class="nav-item active">
                                <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/MyTeams">My Teams</a> */}
                                <div class="dropdown show">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </a>
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
                                        <a class="dropdown-item" href="ben">Ben</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link" href="/draft">Draft Results</a>
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
                <div class="container">
                    <div class="row">
                        <div class="col-6">
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
                                        <th scope="row">56</th>
                                        <td>Dallas Mavericks</td>
                                        <td>{this.state.mavericks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">73</th>
                                        <td>Orlando Magic</td>
                                        <td>{this.state.magic}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">124</th>
                                        <td>Washington Wizards</td>
                                        <td>{this.state.wizards}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.alNBA}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Here is NFL */}
                        <div class="col-6">
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
                                        <td>San Diego Chargers</td>
                                        <td>{this.state.chargers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td>Green Bay Packers</td>
                                        <td>{this.state.packers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">114</th>
                                        <td>Buffalo Bills</td>
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

                        <div class="col-6">
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
                                        <th scope="row">45</th>
                                        <td>Everton</td>
                                        <td>{this.state.everton}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">115</th>
                                        <td>Southhampton</td>
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

                        {/* Adding the NHL Table here */}

                        <div class="col-6">
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
                                        <th scope="row">1</th>
                                        <td>Tampa Bay Lightning</td>
                                        <td>{this.state.lightning}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">30</th>
                                        <td>Boston Bruins</td>
                                        <td>{this.state.bruins}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">137</th>
                                        <td>Detroit Red Wings</td>
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
                    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
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
