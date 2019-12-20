import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {
            //   Let's define our team's here.Eventually this will be an empty array, which we will fill with an API call. The model will match the structure that we want to use for the table. 
            teams: [
                { id: 1, name: 'Bommy', age: 21, email: 'fake@email.com' },
                { id: 2, name: 'Pat', age: 19, email: 'fake@email.com' },
                { id: 3, name: 'Big Dog', age: 16, email: 'fake@email.com' },
                { id: 4, name: 'DJ', age: 25, email: 'fake@email.com' }
            ]
        }
    }

    returnTable() {
        return this.state.teams.map((teams, index) => {
            const { id, name, age, email } = teams //Here is a destructuring of the teams list. 
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }
    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <table>
                    <thead>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </thead>
                    <tbody>
                        {this.returnTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Let's export the table.
export default Table;