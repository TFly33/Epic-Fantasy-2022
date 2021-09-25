import React from "react";
import Table from "../components/Table"
// import DatatablePage from "../components/fakeTable";
// here is the user login stuff 

class Home extends React.Component {
    // Here is the function we will use for creating the actual table. 

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/Home">Epic Fantasy League 2021</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown show">
                                    <div className="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="/tommy">Bommy</a>
                                        <a className="dropdown-item" href="/patrick">Patrick</a>
                                        <a className="dropdown-item" href="/james">James</a>
                                        <a className="dropdown-item" href="/neptune">Neptune</a>
                                        <a className="dropdown-item" href="/dj">DJ</a>
                                        <a className="dropdown-item" href="/goose">Goose</a>
                                        <a className="dropdown-item" href="/al">Al</a>
                                        <a className="dropdown-item" href="/joe">Joe</a>
                                        <a className="dropdown-item" href="/steids">Steids</a>
                                        <a className="dropdown-item" href="/ben">Eres/JMar</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/draft">Draft Results</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/points">Points System</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container specialTable">
                    <Table />
                </div>
                {/* <div class ="container">
                <DatatablePage/>
                </div> */}

                <footer id="sticky-footer" className="py-2 bg-dark text-white-50">
                    <div className="container text-center footerText">
                        <small>Copyright &copy; Epic Fantasy League 2021</small>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Home;