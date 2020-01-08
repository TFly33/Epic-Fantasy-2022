import React from "react";
import API from "../../utils/API";

class neptune extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        neptuneNBA: "",
        celtics: "",
        pacers: "",
        hornets: "",
        // NFL STARTING HERE 
        rams: 90,
        jaguars: 60,
        giants: 40,
        totalNFL: 190,
        leicester: "",
        norwich: "",
        neptuneEPL: "",
        // NHL Going here. 
        sharks: "",
        rangers: "",
        devils: "",
        totalNHL: "",

    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        this.getScoresNHL();
    };

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

                console.log(metroResults);
                var sharksWins;
                var sharksOTLS;
                var sharksTotal;
                var rangersWins;
                var rangersOTLS;
                var rangersTotal;
                var devilsWins;
                var devilsOTLS;
                var devilsTotal;
                var allNHL;

                // Here is the sharks loop. 
                for (var i = 0; i < pacificResults.length; i++) {
                    // sharks
                    if (pacificResults[i].team.id === 28) {
                        sharksWins = pacificResults[i].leagueRecord.wins;
                        sharksOTLS = pacificResults[i].leagueRecord.ot;
                        console.log(sharksWins);
                        console.log(sharksOTLS);
                        console.log("this loop is running")
                    }

                }

                // sharks total
                sharksTotal = (sharksWins * 2) + sharksOTLS;
                console.log(sharksTotal);

                // Here is the loop for the sharks
                for (var i = 0; i < metroResults.length; i++) {

                    // devils
                    if (metroResults[i].team.id === 1) {
                        devilsWins = metroResults[i].leagueRecord.wins;
                        devilsOTLS = metroResults[i].leagueRecord.ot;
                        console.log(devilsWins);
                        console.log(devilsOTLS);
                        console.log("this loop is running")
                    }

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
                console.log(rangersTotal)

                // rangers total
                devilsTotal = (devilsWins * 2) + devilsOTLS;
                console.log(devilsTotal);

                var allNHL = sharksTotal + rangersTotal + devilsTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ sharks: sharksTotal });
                this.setState({ rangers: rangersTotal });
                this.setState({ devils: devilsTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR Neptune. 
                //  Leicester
                var leicesterWin = res.data.api.standings[0][1].all.win;
                var leicesterTie = res.data.api.standings[0][1].all.draw;
                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);

                // Now Norwich results
                var norwichWin = res.data.api.standings[0][19].all.win;
                var norwichTie = res.data.api.standings[0][19].all.draw;
                var norwichTotal = (norwichWin * 4.25) + (norwichTie)

                // Here is the final result
                var neptunePoints = leicesterTotal + norwichTotal
                this.setState({ neptuneEPL: neptunePoints });
                this.setState({ leicester: leicesterTotal });
                this.setState({ norwich: norwichTotal });

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
                var celticsWin = res.data.api.standings[7].win;
                var pacersWin = res.data.api.standings[11].win;
                var hornetsWin = res.data.api.standings[1].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleCeltics = (celticsWin * 2);
                var doublePacers = (pacersWin * 2);
                var doubleHornets = (hornetsWin * 2);

                const tempNeptuneNBA = this.state.allNBA;

                tempNeptuneNBA.push(celticsWin);
                tempNeptuneNBA.push(pacersWin);
                tempNeptuneNBA.push(hornetsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });
                this.setState({ celtics: doubleCeltics });
                this.setState({ pacers: doublePacers });
                this.setState({ hornets: doubleHornets });
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
                                        <th scope="row">24</th>
                                        <td>Boston Celtics</td>
                                        <td>{this.state.celtics}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">46</th>
                                        <td>Indiana Pacers</td>
                                        <td>{this.state.pacers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">122</th>
                                        <td>Charlotte Hornets</td>
                                        <td>{this.state.hornets}</td>
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
                                        <th scope="row">9</th>
                                        <td>Los Angeles Rams</td>
                                        <td>{this.state.rams}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">90</th>
                                        <td>Jacksonville Jaguars</td>
                                        <td>{this.state.jaguars}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">139</th>
                                        <td>New York Giants</td>
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
                                        <th scope="row">55</th>
                                        <td>Leicester City</td>
                                        <td>{this.state.leicester}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">111</th>
                                        <td>Norwich City</td>
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
                                        <th scope="row">37</th>
                                        <td>San Jose Sharks</td>
                                        <td>{this.state.sharks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">91</th>
                                        <td>New York Rangers</td>
                                        <td>{this.state.rangers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">108</th>
                                        <td>New Jersey Devils</td>
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

export default neptune;