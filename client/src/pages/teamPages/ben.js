import React from "react";
import API from "../../utils/API";

// THIS IS NOW MARK ERES 

class ben extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        benNBA: "",
        pelicans: "",
        wizards: "",
        pistons: "",
        eagles: "",
        cowboys: "",
        redskins: "",
        totalNFL: "",
        // EPL
        tottenham: "",
        bournemouth: "",
        benEPL: "",
        // NHL 
        leafs: "",
        avalanche: "",
        flyers: "",
        totalNHL: "",
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
        // this.getScoresNHL();
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
                // var pacificResults = res.data.records[3].teamRecords;

                console.log(metroResults);

                var leafsWins;
                var leafsOTLS;
                var leafsTotal;
                var avalancheWins;
                var avalancheOTLS;
                var avalancheTotal;
                var flyersWins;
                var flyersOTLS;
                var flyersTotal;
                var allNHL;

                // Here is the leafs loop. 
                for (var i = 0; i < atlanticResults.length; i++) {
                    // leafs
                    if (atlanticResults[i].team.id === 10) {
                        leafsWins = atlanticResults[i].leagueRecord.wins;
                        leafsOTLS = atlanticResults[i].leagueRecord.ot;
                        console.log(leafsWins);
                        console.log(leafsOTLS);
                        console.log("this loop is running")
                    }
                }

                // leafs total
                leafsTotal = (leafsWins * 2) + leafsOTLS;
                console.log(leafsTotal);

                for (var i = 0; i < metroResults.length; i++) {

                    // flyers
                    if (metroResults[i].team.id === 4) {
                        flyersWins = metroResults[i].leagueRecord.wins;
                        flyersOTLS = metroResults[i].leagueRecord.ot;
                        console.log(flyersWins);
                        console.log(flyersOTLS);
                        console.log("this loop is running")
                    }
                }

                for (var i = 0; i < centralResults.length; i++) {

                    // avalanche
                    if (centralResults[i].team.id === 21) {
                        avalancheWins = centralResults[i].leagueRecord.wins;
                        avalancheOTLS = centralResults[i].leagueRecord.ot;
                        console.log(avalancheWins);
                        console.log(avalancheOTLS);
                        console.log("this loop is running")
                    }
                }

                // avalanche total
                avalancheTotal = (avalancheWins * 2) + avalancheOTLS;
                console.log(avalancheTotal)

                // flyers total
                flyersTotal = (flyersWins * 2) + flyersOTLS;
                console.log(flyersTotal);

                var allNHL = leafsTotal + avalancheTotal + flyersTotal

                this.setState({ totalNHL: allNHL });
                this.setState({ leafs: leafsTotal });
                this.setState({ avalanche: avalancheTotal });
                this.setState({ flyers: flyersTotal });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                //   Starting Goose EPL Here 
               var tottenhamWin;
               var tottenhamTie;
               var bournemouthWin;
               var bournemouthTie;

               // running the for loop here. 
               var forLoopArray = res.data.response[0].league.standings[0];
               console.log(forLoopArray);

               for (var i = 0; i < forLoopArray.length; i++) {

                   if (forLoopArray[i].team.id === 52) {
                       tottenhamWin = forLoopArray[i].all.win
                       tottenhamTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + tottenhamWin);
                       console.log("here are the ties" + tottenhamTie);
                   }

                   if (forLoopArray[i].team.id === 36) {
                       bournemouthWin = forLoopArray[i].all.win
                       bournemouthTie = forLoopArray[i].all.draw
                       //then so something
                       //return something here
                       console.log("here are the wins" + bournemouthWin);
                       console.log("here are the ties" + bournemouthTie);
                   }
               }

               var tottenhamTotal = (tottenhamWin * 4.25) + (tottenhamTie);
               var bournemouthTotal = (bournemouthWin * 4.25) + (bournemouthTie);

               // Here is the final result
               var benPoints = tottenhamTotal + bournemouthTotal;
               this.setState({ tottenham: tottenhamTotal });
               this.setState({ bournemouth: bournemouthTotal });
               this.setState({ benEPL: benPoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // NBA Teams for Mark and Johnny. 
                var pelicansWin = res.data.api.standings[19].win;
                var wizardsWin = res.data.api.standings[4].win;
                var pistonsWin = res.data.api.standings[12].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublepelicans = (pelicansWin * 2.25);
                var doublewizards = (wizardsWin * 2.25);
                var doublepistons = (pistonsWin * 2.25);

                const tempbenNBA = this.state.allNBA;

                tempbenNBA.push(pelicansWin);
                tempbenNBA.push(wizardsWin);
                tempbenNBA.push(pistonsWin);

                var benDoubledScores = tempbenNBA.map(team => team * 2.25);

                var benPoints = 0;

                for (var i = 0; i < benDoubledScores.length; i++) {
                    benPoints += benDoubledScores[i];
                }
                console.log(benPoints);
                this.setState({ benNBA: benPoints });
                this.setState({ pelicans: doublepelicans });
                this.setState({ wizards: doublewizards });
                this.setState({ pistons: doublepistons });
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
                                    <div class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                        <a class="dropdown-item" href="ben">Eres/JMar</a>
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
                        Eres/JMar
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
                                        <th scope="row">59</th>
                                        <td className="pelicans">New Orleans Pelicans</td>
                                        <td>{this.state.pelicans}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">79</th>
                                        <td className="wiz">Washington Wizards</td>
                                        <td>{this.state.wizards}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">113</th>
                                        <td className="pistons">Detroit Pistons</td>
                                        <td>{this.state.pistons}</td>
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
                                                <th scope="row">8</th>
                                                <td className="eagles">Green Bay Packers</td>
                                                <td>{this.state.eagles}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">33</th>
                                                <td className="titans">Tennessee Titans</td>
                                                <td>{this.state.cowboys}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">100</th>
                                                <td className="bears">Chicago Bears</td>
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
                                                <th scope="row">62</th>
                                                <td className="crystalP">Crystal Palace</td>
                                                <td>{this.state.tottenham}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">129</th>
                                                <td className="fulham">Fulham</td>
                                                <td>{this.state.bournemouth}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total</th>
                                                <td></td>
                                                <td>{this.state.benEPL}</td>
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
                                                <th scope="row">13</th>
                                                <td className="lightning">Tampa Bay Lightning</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">42</th>
                                                <td className="bruins">Boston Bruins</td>
                                                <td>{this.state.avalanche}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">108</th>
                                                <td className="flames">Calgary Flames</td>
                                                <td>{this.state.flyers}</td>
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

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
                                    <table class="table table-striped table-bordered table-hover smallTable">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col-6">Draft Pick</th>
                                                <th scope="col-6">MLB Team</th>
                                                <th scope="col-6">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">28</th>
                                                <td className="rays">Tampa Bay Rays</td>
                                                <td>{this.state.leafs}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">81</th>
                                                <td className="nationals">Washington Nationals</td>
                                                <td>{this.state.avalanche}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">142</th>
                                                <td className="rangers">Texas Rangers</td>
                                                <td>{this.state.flyers}</td>
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

export default ben;