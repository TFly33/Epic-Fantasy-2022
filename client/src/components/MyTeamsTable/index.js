

// I'm currently not using this page, but eventually might need this code, so keeping it here for now. I initially planned a "my teams" page but converted to the individual team pages instead for now. I may come back to this. 





// import React, { Component } from 'react';
// import "./MyTeamsTable.css";
// import API from "../../utils/API"

// // This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 

// class MyTeamsTable extends Component {
//     constructor(props) {
//         super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//         this.state = {
//             //   Let's define our team's here.Eventually this will be an empty array, which we will fill with an API call. The model will match the structure that we want to use for the table. 
//             teams: [
//                 { id: 1, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 2, name: 'Al', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 3, name: 'Ryan', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 4, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 5, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 6, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 7, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 8, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 9, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//                 { id: 10, name: 'Bommy', EPL: "points", NFL: 'points', NHL: "points", NBA: "points", MLB: "points", Points: "Total Points" },
//             ]
//         }
//     }

//     componentDidMount() {
//         this.getMyTeams();
//     };

//     getMyTeams = () => {
//         API.getTeams()
//             .then(res =>
//                 this.setState({ teams: res.data })
//             )
//             .catch(err => console.log(err));
//     }

//     returnTable() {
//         return this.state.teams.map((teams, index) => {
//             const { id, name, EPL, NFL, NHL, NBA, MLB, Points } = teams //Here is a destructuring of the teams list. 
//             return (
//                 <tr key={index}>
//                     <td>{id}</td>
//                     <td>{name}</td>
//                     <td>{EPL}</td>
//                     <td>{NFL}</td>
//                     <td>{NHL}</td>
//                     <td>{NBA}</td>
//                     <td>{MLB}</td>
//                     <td>{Points}</td>
//                 </tr>
//             )
//         })
//     }

//     render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
//         return (
//             <div className="container">
//                 <table className="table table-striped table-hover table-bordered specialTable">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">Team</th>
//                             <th scope="col">EPL</th>
//                             <th scope="col">NFL</th>
//                             <th scope="col">NHL</th>
//                             <th scope="col">NBA</th>
//                             <th scope="col">MLB</th>
//                             <th scope="col">Total Points</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* returning the state. Eventually this will be an API call to the mongo database, which will include each user's team info. For now, going to have a hard-coded table. */}
//                         {this.returnTable()}

//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

// // Let's export the table.
// export default MyTeamsTable;