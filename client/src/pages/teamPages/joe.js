import React from "react";
import API from "../../utils/API";

class joe extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        joeNBA: "",
        nuggets: "",
        blazers: "",
        kings: "",
        colts: 70,
        vikings: 100,
        raiders: 70,
        totalNFL: 240,
        // EPL HERE
        liverpool: "",
        aston: "",
        joeEPL: "",
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR Joe. 
                //  Liverpool
                var liverpoolWin = res.data.api.standings[0][0].all.win;
                var liverpoolTie = res.data.api.standings[0][0].all.draw;
                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);

                // Aston Villa results
                var astonWin = res.data.api.standings[0][16].all.win;
                var astonTie = res.data.api.standings[0][16].all.draw;
                var astonTotal = (astonWin * 4.25) + (astonTie)

                // Here is the final result
                var joePoints = liverpoolTotal + astonTotal
                this.setState({ joeEPL: joePoints });
                this.setState({ liverpool: liverpoolTotal });
                this.setState({ aston: astonTotal });

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
                var nuggetsWin = res.data.api.standings[25].win;
                var blazersWin = res.data.api.standings[26].win;
                var kingsWin = res.data.api.standings[22].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublenuggets = (nuggetsWin * 2);
                var doubleblazers = (blazersWin * 2);
                var doublekings = (kingsWin * 2);

                const tempjoeNBA = this.state.allNBA;

                tempjoeNBA.push(nuggetsWin);
                tempjoeNBA.push(blazersWin);
                tempjoeNBA.push(kingsWin);

                var joeDoubledScores = tempjoeNBA.map(team => team * 2);

                var joePoints = 0;

                for (var i = 0; i < joeDoubledScores.length; i++) {
                    joePoints += joeDoubledScores[i];
                }
                console.log(joePoints);
                this.setState({ joeNBA: joePoints });
                this.setState({ nuggets: doublenuggets });
                this.setState({ blazers: doubleblazers });
                this.setState({ kings: doublekings });
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
                            <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Joe
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
                                        <th scope="row">18</th>
                                        <td>Denver Nuggets</td>
                                        <td>{this.state.nuggets}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">34</th>
                                        <td>Portland Blazers</td>
                                        <td>{this.state.blazers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">82</th>
                                        <td>Sacramento Kings</td>
                                        <td>{this.state.kings}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.joeNBA}</td>
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
                                        <th scope="row">27</th>
                                        <td>Indianapolis Colts</td>
                                        <td>{this.state.colts}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">58</th>
                                        <td>Minnesota Vikings</td>
                                        <td>{this.state.vikings}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">130</th>
                                        <td>Oakland Raiders</td>
                                        <td>{this.state.raiders}</td>
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
                                        <th scope="row">3</th>
                                        <td>Liverpool</td>
                                        <td>{this.state.liverpool}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">131</th>
                                        <td>Aston Villa</td>
                                        <td>{this.state.aston}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.joeEPL}</td>
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

export default joe;