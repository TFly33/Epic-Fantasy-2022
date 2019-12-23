import React, { Component } from 'react';
import "./Table.css";
import API from "../../utils/API"

// This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 

class Table extends Component {

    //since we are extending class Table so we have to use super in order to override Component class constructor
    state = {
        allTeams: []
    }

    componentDidMount() {
        this.getTeams();
    };

    // This will be the function used to show the teams. 
    getTeams = () => {
        API.getTeams()
            .then(res =>
                this.setState({ allTeams: res.data })
                // console.log(res)
            )
            .catch(err => console.log(err));
    }

    returnTable() {
        return this.state.allTeams.map((teams, index) => {
            const { id, name, EPL, NFL, NHL, NBA, MLB, totalPoints } = teams //Here is a destructuring of the teams list. 
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{EPL}</td>
                    <td>{NFL}</td>
                    <td>{NHL}</td>
                    <td>{NBA}</td>
                    <td>{MLB}</td>
                    <td>{totalPoints}</td>
                </tr>
            )
        })
    }
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div className="container">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Team</th>
                            <th scope="col">EPL</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">NBA</th>
                            <th scope="col">MLB</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* returning the state. Eventually this will be an API call to the mongo database, which will include each user's team info. For now, going to have a hard-coded table. */}
                        {this.returnTable()}

                    </tbody>
                </table>
            </div>
        )
    }
}

// Let's export the table.
export default Table;