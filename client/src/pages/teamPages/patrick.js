import React from "react";
import API from "../../utils/API";

class patrick extends React.Component {
    // Here is the function we will use for creating the actual table. 
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        PatrickNBA: "",
        lakers: "",
        jazz: "",
        warriors: ""
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
                var lakersWin = res.data.api.standings[23].win;
                var warriorsWin = res.data.api.standings[20].win;
                var jazzWin = res.data.api.standings[27].win;

                // I need to multiply the API result by 2 FIRST since we need them individually. 

                var doubleLakers = (lakersWin * 2);
                var doubleWarriors = (warriorsWin * 2);
                var doubleJazz = (jazzWin * 2);

                const tempPatrickNBA = this.state.allNBA;

                tempPatrickNBA.push(lakersWin);
                tempPatrickNBA.push(warriorsWin);
                tempPatrickNBA.push(jazzWin);

                var PatrickDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < PatrickDoubledScores.length; i++) {
                    PatrickPoints += PatrickDoubledScores[i];
                }
                console.log(PatrickPoints);
                this.setState({ PatrickNBA: PatrickPoints });
                this.setState({ lakers: doubleLakers });
                this.setState({ jazz: doubleJazz });
                this.setState({ warriors: doubleWarriors });
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
                        Patrick
  </div>
                </div>
                {/* Starting my new table here */}
                <div class="container">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col-6">Draft Pick</th>
                                <th scope="col-6">NBA Team</th>
                                <th scope="col-6">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">19</th>
                                <td>Los Angeles Lakers</td>
                                <td>{this.state.lakers}</td>
                            </tr>
                            <tr>
                                <th scope="row">23</th>
                                <td>Utah Jazz</td>
                                <td>{this.state.jazz}</td>
                            </tr>
                            <tr>
                                <th scope="row">38</th>
                                <td>Golden State Warriors</td>
                                <td>{this.state.warriors}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td></td>
                                <td>{this.state.PatrickNBA}</td>
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

export default patrick;