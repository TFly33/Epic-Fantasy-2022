import React from "react";
import MyTeamsTable from "../components/MyTeamsTable"

class MyTeams extends React.Component {
    // Here is the function we will use for creating the actual table. 

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                Here is the My Teams Table
                <MyTeamsTable />
            </div>
        )
    }
}

export default MyTeams;