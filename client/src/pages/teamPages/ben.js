import React from "react";
import API from "../../utils/API";

class ben extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        benNBA: "",
        pelicans: "",
        grizzlies: "",
        cavs: "",
        eagles: 90,
        cowboys: 80,
        redskins: 30,
        totalNFL: 200,
        // EPL
        tottenham: "",
        bournemouth: "",
        benEPL: "",
    }
    componentDidMount = () => {
        this.getScoresNBA();
        this.getScoresEPL();
    }

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR Ben. 
                //  tottenham
                var tottenhamWin = res.data.api.standings[0][5].all.win;
                var tottenhamTie = res.data.api.standings[0][5].all.draw;
                var tottenhamTotal = (tottenhamWin * 4.25) + (tottenhamTie);

                // bournemouth results
                var bournemouthWin = res.data.api.standings[0][17].all.win;
                var bournemouthTie = res.data.api.standings[0][17].all.draw;
                var bournemouthTotal = (bournemouthWin * 4.25) + (bournemouthTie)

                // Here is the final result
                var benPoints = tottenhamTotal + bournemouthTotal
                this.setState({ benEPL: benPoints });
                this.setState({ tottenham: tottenhamTotal });
                this.setState({ bournemouth: bournemouthTotal });

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
                var pelicansWin = res.data.api.standings[18].win;
                var grizzliesWin = res.data.api.standings[17].win;
                var cavsWin = res.data.api.standings[14].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doublepelicans = (pelicansWin * 2);
                var doublegrizzlies = (grizzliesWin * 2);
                var doublecavs = (cavsWin * 2);

                const tempbenNBA = this.state.allNBA;

                tempbenNBA.push(pelicansWin);
                tempbenNBA.push(grizzliesWin);
                tempbenNBA.push(cavsWin);

                var benDoubledScores = tempbenNBA.map(team => team * 2);

                var benPoints = 0;

                for (var i = 0; i < benDoubledScores.length; i++) {
                    benPoints += benDoubledScores[i];
                }
                console.log(benPoints);
                this.setState({ benNBA: benPoints });
                this.setState({ pelicans: doublepelicans });
                this.setState({ grizzlies: doublegrizzlies });
                this.setState({ cavs: doublecavs });
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
                        Ben
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
                                        <th scope="row">69</th>
                                        <td>New Orleans Pelicans</td>
                                        <td>{this.state.pelicans}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">120</th>
                                        <td>Memphis Grizzlies</td>
                                        <td>{this.state.grizzlies}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">135</th>
                                        <td>Cleveland Cavaliers</td>
                                        <td>{this.state.cavs}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td></td>
                                        <td>{this.state.benNBA}</td>
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
                                        <th scope="row">16</th>
                                        <td>Philadelphia Eagles</td>
                                        <td>{this.state.eagles}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">72</th>
                                        <td>Dallas Cowboys</td>
                                        <td>{this.state.cowboys}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">126</th>
                                        <td>Washington Redskins</td>
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
                                        <th scope="row">5</th>
                                        <td>Tottenham</td>
                                        <td>{this.state.tottenham}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">101</th>
                                        <td>Bournemouth</td>
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
                                        <th scope="row">29</th>
                                        <td>Vegas Knights</td>
                                        <td>{this.state.knights}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">106</th>
                                        <td>Chicago Blackhawks</td>
                                        <td>{this.state.blackhawks}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">113</th>
                                        <td>Vancouver Canucks</td>
                                        <td>{this.state.canucks}</td>
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

export default ben;