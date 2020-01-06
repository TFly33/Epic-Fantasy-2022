import React from "react";
import API from "../../utils/API";

class tommy extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        heat: "",
        nets: "",
        spurs: ""
    }
    componentDidMount = () => {
        this.getScoresNBA();
    }

    getScoresNBA = () => {
        API.getScoresNBA()
            .then(res => {
                // HERE ARE NBA TEAMS FOR TOMMY. 
                // console.log(res);
                // console.log(res.data.api.standings);
                var heatWin = res.data.api.standings[2].win;
                var netsWin = res.data.api.standings[8].win;
                var spursWin = res.data.api.standings[16].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleHeat = (heatWin * 2);
                var doubleNets = (netsWin * 2);
                var doubleSpurs = (spursWin * 2);

                const tempTomNBA = this.state.allNBA;

                tempTomNBA.push(heatWin);
                tempTomNBA.push(netsWin);
                tempTomNBA.push(spursWin);

                var tomDoubledScores = tempTomNBA.map(team => team * 2);

                var TomPoints = 0;

                for (var i = 0; i < tomDoubledScores.length; i++) {
                    TomPoints += tomDoubledScores[i];
                }
                console.log(TomPoints);
                this.setState({ tomNBA: TomPoints });
                this.setState({ heat: doubleHeat});
                this.setState({ nets: doubleNets});
                this.setState({ spurs: doubleSpurs});
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
                        Tommy
  </div>
                </div>
                {/* Starting my new table here */}
                <div class="container">
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
                                <th scope="row">47</th>
                                <td>Brooklyn Nets</td>
                                <td>{this.state.nets}</td>
                            </tr>
                            <tr>
                                <th scope="row">54</th>
                                <td>San Antonio Spurs</td>
                                <td>{this.state.spurs}</td>
                            </tr>
                            <tr>
                                <th scope="row">64</th>
                                <td>Miami Heat</td>
                                <td>{this.state.heat}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td></td>
                                <td>{this.state.tomNBA}</td>
                            </tr>
                        </tbody>
                    </table>
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

export default tommy;