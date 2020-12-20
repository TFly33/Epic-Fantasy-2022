import React from "react";
import Table from "../components/Table"
// import DatatablePage from "../components/fakeTable";
// here is the user login stuff 

class Home extends React.Component {
    // Here is the function we will use for creating the actual table. 

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/Home">Epic Fantasy League 2021</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown show">
                                    <div class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="/tommy">Bommy</a>
                                        <a class="dropdown-item" href="/patrick">Patrick</a>
                                        <a class="dropdown-item" href="/james">James</a>
                                        <a class="dropdown-item" href="/neptune">Neptune</a>
                                        <a class="dropdown-item" href="/dj">DJ</a>
                                        <a class="dropdown-item" href="/goose">Goose</a>
                                        <a class="dropdown-item" href="/al">Al</a>
                                        <a class="dropdown-item" href="/joe">Joe</a>
                                        <a class="dropdown-item" href="/steids">Steids</a>
                                        <a class="dropdown-item" href="/ben">Ben</a>
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
                <div class="container specialTable">
                    <Table />
                </div>
                {/* <div class ="container">
                <DatatablePage/>
                </div> */}

                <footer id="sticky-footer" class="py-2 bg-dark text-white-50">
                    <div class="container text-center footerText">
                        <small>Copyright &copy; Epic Fantasy League 2021</small>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Home;