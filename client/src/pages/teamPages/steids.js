import React from "react";
import API from "../../utils/API";

class steids extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        steidsNBA: "",
        clippers: "",
        hawks: "",
        bulls: "",
        browns: 60,
        steelers: 80,
        buccaneers: 70,
        totalNFL: 210,
        // EPL Teams Here
        arsenal: "",
        watford: "",
        steidsEPL: "",
        // NHL
        caps: "",
        sabres: "",
        panthers: "",
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

                console.log(atlanticResults)
                var capsWins;
                var capsOTLS;
                var capsTotal;
                var panthersWins;
                var panthersOTLS;
                var panthersTotal;
                var sabresWins;
                var sabresOTLS;
                var sabresTotal;
                var allNHL;

                // Here is the panthers for loop. 
                for (var i = 0; i < centralResults.length; i++) {

                    if (atlanticResults[i].team.id === 13) {
                        panthersWins = atlanticResults[i].leagueRecord.wins;
                        panthersOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(panthersWins);
                        console.log(panthersOTLS);
                        console.log("this loop is running")
                    }

                    // sabres
                    if (atlanticResults[i].team.id === 7) {
                        sabresWins = atlanticResults[i].leagueRecord.wins;
                        sabresOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(sabresWins);
                        console.log(sabresOTLS);
                        console.log("this loop is running")
                    }
                }
                // panthers total
                panthersTotal = (panthersWins * 2) + panthersOTLS;
                console.log(panthersTotal)

                // Here is the loop for the caps
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

                // caps total
                capsTotal = (capsWins * 2) + capsOTLS;
                console.log(capsTotal);

                // sabres total
                sabresTotal = (sabresWins * 2) + sabresOTLS;
                console.log(sabresTotal);

                var allNHL = capsTotal + sabresTotal + panthersTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ caps: capsTotal });
                this.setState({ sabres: sabresTotal });
                this.setState({ panthers: panthersTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR Steids. 
                //  Arsenal
                var arsenalWin = res.data.api.standings[0][9].all.win;
                var arsenalTie = res.data.api.standings[0][9].all.draw;
                var arsenalTotal = (arsenalWin * 4.25) + (arsenalTie);

                // Watford results
                var watfordWin = res.data.api.standings[0][18].all.win;
                var watfordTie = res.data.api.standings[0][18].all.draw;
                var watfordTotal = (watfordWin * 4.25) + (watfordTie)

                // Here is the final result
                var steidsPoints = arsenalTotal + watfordTotal
                this.setState({ arsenal: arsenalTotal });
                this.setState({ watford: watfordTotal });
                this.setState({ steidsEPL: steidsPoints });

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
                // HERE ARE NBA TEAMS FOR TOMMY. 
                // console.log(res);
                // console.log(res.data.api.standings);
                var clippersWin = res.data.api.standings[21].win;
                var hawksWin = res.data.api.standings[4].win;
                var bullsWin = res.data.api.standings[13].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleclippers = (clippersWin * 2);
                var doublehawks = (hawksWin * 2);
                var doublebulls = (bullsWin * 2);

                const tempsteidsNBA = this.state.allNBA;

                tempsteidsNBA.push(clippersWin);
                tempsteidsNBA.push(hawksWin);
                tempsteidsNBA.push(bullsWin);

                var steidsDoubledScores = tempsteidsNBA.map(team => team * 2);

                var steidsPoints = 0;

                for (var i = 0; i < steidsDoubledScores.length; i++) {
                    steidsPoints += steidsDoubledScores[i];
                }
                // console.log(steidsPoints);
                this.setState({ steidsNBA: steidsPoints });
                this.setState({ clippers: doubleclippers });
                this.setState({ hawks: doublehawks });
                this.setState({ bulls: doublebulls });
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
                        Steids
  </div>
                </div>
                {/* Starting my new table here */}
                <div class="container">
                    <div class="row">
                        {/* Here is NBA */}
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
                                        <th scope="row">8</th>
                                        <td>Los Angeles Clippers</td>
                                        <td>{this.state.clippers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">100</th>
                                        <td>Atlanta Hawks</td>
                                        <td>{this.state.hawks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">112</th>
                                        <td>Chicago Bulls</td>
                                        <td>{this.state.bulls}</td>
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
                                        <th scope="row">42</th>
                                        <td>Cleveland Browns</td>
                                        <td>{this.state.browns}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">62</th>
                                        <td>Pittsburgh Steelers</td>
                                        <td>{this.state.steelers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">107</th>
                                        <td>Tampa Bay Buccaneers</td>
                                        <td>{this.state.buccaneers}</td>
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
                                        <th scope="row">13</th>
                                        <td>Arsenal</td>
                                        <td>{this.state.arsenal}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">81</th>
                                        <td>Watford</td>
                                        <td>{this.state.watford}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.steidsEPL}</td>
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
                                        <th scope="row">33</th>
                                        <td>Washington Capitals</td>
                                        <td>{this.state.caps}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">79</th>
                                        <td>Florida Panthers</td>
                                        <td>{this.state.panthers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">129</th>
                                        <td>Buffalo Sabres</td>
                                        <td>{this.state.sabres}</td>
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

export default steids;