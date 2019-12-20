import React from "react";
import Table from "../components/Table"



class Home extends React.Component {
    // Here is the function we will use for creating the actual table. 

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <Table />
            </div>
        )
    }
}

export default Home;