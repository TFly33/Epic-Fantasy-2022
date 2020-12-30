import React from "react";
import API from "../../utils/API";

class neptune extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        neptuneNBA: "",
        sixers: "",
        mavs: "",
        blazers: "",
        // NFL STARTING HERE 
        rams: "",
        jaguars: "",
        giants: "",
        totalNFL: "",
        // EPL Starting HERE 
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
        // this.getScoresNHL();
    };

    getScoresNHL = () => {
        API.getScoresNHL()
            .then(res => {
                // This is the Metro Division
                var metroResults = res.data.records[0].teamRecords;
                // Atlantic Division
                // var atlanticResults = res.data.records[1].teamRecords;
                // // Central Division
                // var centralResults = res.data.records[2].teamRecords;
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
                        // console.log(devilsWins);
                        // console.log(devilsOTLS);
                        // console.log("this loop is running")
                    }

                    // rangers
                    if (metroResults[i].team.id === 3) {
                        rangersWins = metroResults[i].leagueRecord.wins;
                        rangersOTLS = metroResults[i].leagueRecord.ot;
                        // console.log(rangersWins);
                        // console.log(rangersOTLS);
                        // console.log("this loop is running")
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
                //   Starting Neptune EPL Here 
                var leicesterWin;
                var leicesterTie;
                var norwichWin;
                var norwichTie;
                // console.log(res);
                console.log(res.data.response[0].league.standings[0][1].team.id);
                console.log(res.data.response[0].league.standings[0][1].all.win);

                // running the for loop here. 
                var forLoopArray = res.data.response[0].league.standings[0];
                console.log(forLoopArray);
                for (var i = 0; i < forLoopArray.length; i++) {

                    // I had to change all of this for 2021 version. 
                    // These are no longer the correct teams, just the correct IDS. 

                    if (forLoopArray[i].team.id === 40) {
                        leicesterWin = forLoopArray[i].all.win
                        leicesterTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("This loop is running");
                        console.log("here are the wins " + leicesterWin);
                        console.log("here are the ties " + leicesterTie);
                    }

                    if (forLoopArray[i].team.id === 51) {
                        norwichWin = forLoopArray[i].all.win
                        norwichTie = forLoopArray[i].all.draw
                        //then so something
                        //return something here
                        console.log("here are the wins" + norwichWin);
                        console.log("here are the ties" + norwichTie);
                    }
                }

                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);
                var norwichTotal = (norwichWin * 4.25) + (norwichTie);

                // Here is the final result
                var neptunePoints = leicesterTotal + norwichTotal;
                this.setState({ leicester: leicesterTotal });
                this.setState({ norwich: norwichTotal });
                this.setState({ neptuneEPL: neptunePoints });

            })
            .catch(error => {
                console.log(error)
            });
    };

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // 2021 Neptune NBA. 
                // celtics becomes 76ers
                var sixersWin = res.data.api.standings[9].win;
                // pacers becomes Mavs 
                var mavsWin = res.data.api.standings[16].win;
                // Hornets becomes Blazers
                var blazersWin = res.data.api.standings[25].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublesixers = (sixersWin * 2.25);
                var doublemavs = (mavsWin * 2.25);
                var doubleblazers = (blazersWin * 2.25);

                const tempNeptuneNBA = this.state.allNBA;

                tempNeptuneNBA.push(sixersWin);
                tempNeptuneNBA.push(mavsWin);
                tempNeptuneNBA.push(blazersWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2.25);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });
                this.setState({ sixers: doublesixers });
                this.setState({ mavs: doublemavs });
                this.setState({ blazers: doubleblazers });
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
                                        <th scope="row">30</th>
                                        <td className="sixers">Philadelphia 76ers</td>
                                        <td>{this.state.sixers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td className="mavs">Dallas Mavericks</td>
                                        <td>{this.state.mavs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">45</th>
                                        <td className="blazers">Portland Trailblazers</td>
                                        <td>{this.state.blazers}</td>
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
                                                <th scope="row">20</th>
                                                <td className="bills">Buffalo Bills</td>
                                                <td>{this.state.rams}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">56</th>
                                                <td className="cardinals">Arizona Cardinals</td>
                                                <td>{this.state.jaguars}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">106</th>
                                                <td className="eagles">Philadelphia Eagles</td>
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
                                                <th scope="row">1</th>
                                                <td className="liverpool">Liverpool</td>
                                                <td>{this.state.leicester}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">68</th>
                                                <td className="brighton">Brighton and Hove Albion</td>
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
                                                <th scope="row">73</th>
                                                <td className="stars">Dallas Stars</td>
                                                <td>{this.state.sharks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">115</th>
                                                <td className="blueJackets">Columbus Blue Jackets</td>
                                                <td>{this.state.rangers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">137</th>
                                                <td className="devils">New Jersey Devils</td>
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

                    
                        <div class="container smallTable">
                            <div class="row">
                                <div class="col">
                                    {/* Here is MLB */}
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
                                                <th scope="row">83</th>
                                                <td className="cardinals">St. Louis Cardinals</td>
                                                <td>{this.state.sharks}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">98</th>
                                                <td className="marlins">Miami Marlins</td>
                                                <td>{this.state.rangers}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">124</th>
                                                <td className="royals">Kansas City Royals</td>
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