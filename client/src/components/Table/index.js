import React, { Component } from 'react';
import "./Table.css";
import API from "../../utils/API";
import { throws } from 'assert';

// This table is being used for the Home Page currently, but not for the My Teams page. I am going to create that table separately. 

class Table extends Component {

    //since we are extending class Table so we have to use super in order to override Component class constructor
    state = {
        allTeams: [],
        // Putting NBA arrays here. Each person's array will include three NBA teams. 
        allNBA: [],
        tomNBA: "",
        patrickNBA: "",
        jamesNBA: "",
        neptuneNBA: "",
        DJNBA: "",
        gooseNBA: "",
        alNBA: "",
        joeNBA: "",
        steidsNBA: "",
        benNBA: "",
        // Putting EPL arrays here. 
        allEPL: [],
        tomEPL: "",
        patEPL: "",
        jamesEPL: "",
        neptuneEPL: "",
        DJEPL: "",
        gooseEPL: "",
        alEPL: "",
        joeEPL: "",
        steidsEPL: "",
        benEPL: "",
    }

    componentDidMount() {
        // first we scrape. Inside the function, need to post to the Mongo DB. 
        this.getScoresNBA();
        // Now, once the updates have applied, we call the getteams. This will show updated results. 
        this.getScoresEPL();
    };

    getScoresEPL = () => {
        API.getScoresEPL()
            .then(res => {
                // HERE ARE EPL TEAMS FOR TOMMY. 
                //  Chelsea
                var chelseaWin = res.data.api.standings[0][3].all.win;
                var chelseaTie = res.data.api.standings[0][3].all.draw;
                var chelseaTotal = (chelseaWin * 4.25) + (chelseaTie);
                console.log(res);
                // Now Brighton results
                var brightonWin = res.data.api.standings[0][13].all.win;
                var brightonTie = res.data.api.standings[0][13].all.draw;
                var brightonTotal = (brightonWin * 4.25) + (brightonTie)
               
                // Here is the final result
                var tomPoints = chelseaTotal + brightonTotal
                this.setState({ tomEPL: tomPoints });

                // HERE ARE EPL TEAMS FOR Patrick. 
                //  Manchester City
                var cityWin = res.data.api.standings[0][2].all.win;
                var cityTie = res.data.api.standings[0][2].all.draw;
                var cityTotal = (cityWin * 4.25) + (cityTie);

                // Now Wolves results
                var wolvesWin = res.data.api.standings[0][6].all.win;
                var wolvesTie = res.data.api.standings[0][6].all.draw;
                var wolvesTotal = (wolvesWin * 4.25) + (wolvesTie)
               
                // Here is the final result
                var patPoints = cityTotal + wolvesTotal
                this.setState({ patEPL: patPoints });

                // HERE ARE EPL TEAMS FOR James. 
                //  NewCastle
                var newcastleWin = res.data.api.standings[0][12].all.win;
                var newcastleTie = res.data.api.standings[0][12].all.draw;
                var newcastleTotal = (newcastleWin * 4.25) + (newcastleTie);

                // Now Crystal Palace results
                var palaceWin = res.data.api.standings[0][8].all.win;
                var palaceTie = res.data.api.standings[0][8].all.draw;
                var palaceTotal = (palaceWin * 4.25) + (palaceTie)
               
                // Here is the final result
                var jamesPoints = newcastleTotal + palaceTotal
                this.setState({ jamesEPL: jamesPoints });

                // HERE ARE EPL TEAMS FOR Neptune. 
                //  Leicester
                var leicesterWin = res.data.api.standings[0][1].all.win;
                var leicesterTie = res.data.api.standings[0][1].all.draw;
                var leicesterTotal = (leicesterWin * 4.25) + (leicesterTie);

                // Now Norwich results
                var norwichWin = res.data.api.standings[0][19].all.win;
                var norwichTie = res.data.api.standings[0][19].all.draw;
                var norwichTotal = (norwichWin * 4.25) + (norwichTie)
               
                // Here is the final result
                var neptunePoints = leicesterTotal + norwichTotal
                this.setState({ neptuneEPL: neptunePoints });

                // HERE ARE EPL TEAMS FOR DJ. 
                //  sheffield
                var sheffieldWin = res.data.api.standings[0][7].all.win;
                var sheffieldTie = res.data.api.standings[0][7].all.draw;
                var sheffieldTotal = (sheffieldWin * 4.25) + (sheffieldTie);

                // Now burnley results
                var burnleyWin = res.data.api.standings[0][14].all.win;
                var burnleyTie = res.data.api.standings[0][14].all.draw;
                var burnleyTotal = (burnleyWin * 4.25) + (burnleyTie)
               
                // Here is the final result
                var djPoints = sheffieldTotal + burnleyTotal
                this.setState({ djEPL: djPoints });

                // HERE ARE EPL TEAMS FOR Goose. 
                //  manU
                var manuWin = res.data.api.standings[0][4].all.win;
                var manuTie = res.data.api.standings[0][4].all.draw;
                var manuTotal = (manuWin * 4.25) + (manuTie);

                // Now westham results
                var westhamWin = res.data.api.standings[0][15].all.win;
                var westhamTie = res.data.api.standings[0][15].all.draw;
                var westhamTotal = (westhamWin * 4.25) + (westhamTie)
               
                // Here is the final result
                var goosePoints = manuTotal + westhamTotal
                this.setState({ gooseEPL: goosePoints });

                // HERE ARE EPL TEAMS FOR Al. 
                //  everton
                var evertonWin = res.data.api.standings[0][10].all.win;
                var evertonTie = res.data.api.standings[0][10].all.draw;
                var evertonTotal = (evertonWin * 4.25) + (evertonTie);

                // southhampton results
                var southhamptonWin = res.data.api.standings[0][11].all.win;
                var southhamptonTie = res.data.api.standings[0][11].all.draw;
                var southhamptonTotal = (southhamptonWin * 4.25) + (southhamptonTie)
               
                // Here is the final result
                var alPoints = evertonTotal + southhamptonTotal
                this.setState({ alEPL: alPoints });

                // HERE ARE EPL TEAMS FOR Joe. 
                //  Liverpool
                var liverpoolWin = res.data.api.standings[0][0].all.win;
                var liverpoolTie = res.data.api.standings[0][0].all.draw;
                var liverpoolTotal = (liverpoolWin * 4.25) + (liverpoolTie);

                // Aston Villa results
                var astonWin = res.data.api.standings[0][16].all.win;
                var astonTie = res.data.api.standings[0][16].all.draw;
                var astonTotal = (astonWin * 4.25) + (astonTie)
               
                // Here is the final result
                var joePoints = liverpoolTotal + astonTotal
                this.setState({ joeEPL: joePoints });

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

                // HERE ARE EPL TEAMS FOR Steids. 
                //  Arsenal
                var arsenalWin = res.data.api.standings[0][9].all.win;
                var arsenalTie = res.data.api.standings[0][9].all.draw;
                var arsenalTotal = (arsenalWin * 4.25) + (arsenalTie);

                // Watford results
                var watfordWin = res.data.api.standings[0][18].all.win;
                var watfordTie = res.data.api.standings[0][18].all.draw;
                var watfordTotal = (watfordWin * 4.25) + (watfordTie)
               
                // Here is the final result
                var steidsPoints = arsenalTotal + watfordTotal
                this.setState({ steidsEPL: steidsPoints });
            })
            .catch(error => {
                console.log(error)
            });
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

                // PATRICK
                var lakersWin = res.data.api.standings[23].win;
                var warriorsWin = res.data.api.standings[20].win;
                var jazzWin = res.data.api.standings[27].win;

                const tempPatrickNBA = [];

                tempPatrickNBA.push(lakersWin);
                tempPatrickNBA.push(warriorsWin);
                tempPatrickNBA.push(jazzWin);

                var patDoubledScores = tempPatrickNBA.map(team => team * 2);

                var PatrickPoints = 0;

                for (var i = 0; i < patDoubledScores.length; i++) {
                    PatrickPoints += patDoubledScores[i];
                }
                console.log(PatrickPoints);
                this.setState({ patrickNBA: PatrickPoints });

                // James
                var bucksWin = res.data.api.standings[10].win;
                var thunderWin = res.data.api.standings[28].win;
                var sunsWin = res.data.api.standings[24].win;

                const tempJamesNBA = [];

                tempJamesNBA.push(bucksWin);
                tempJamesNBA.push(thunderWin);
                tempJamesNBA.push(sunsWin);

                var jamesDoubledScores = tempJamesNBA.map(team => team * 2);

                var jamesPoints = 0;

                for (var i = 0; i < jamesDoubledScores.length; i++) {
                    jamesPoints += jamesDoubledScores[i];
                }
                console.log(jamesPoints);
                this.setState({ jamesNBA: jamesPoints });

                // Neptune
                var celticsWin = res.data.api.standings[7].win;
                var pacersWin = res.data.api.standings[11].win;
                var hornetsWin = res.data.api.standings[1].win;

                const tempNeptuneNBA = [];

                tempNeptuneNBA.push(celticsWin);
                tempNeptuneNBA.push(pacersWin);
                tempNeptuneNBA.push(hornetsWin);

                var NeptuneDoubledScores = tempNeptuneNBA.map(team => team * 2);

                var NeptunePoints = 0;

                for (var i = 0; i < NeptuneDoubledScores.length; i++) {
                    NeptunePoints += NeptuneDoubledScores[i];
                }
                console.log(NeptunePoints);
                this.setState({ neptuneNBA: NeptunePoints });

                // DJ
                var sixersWin = res.data.api.standings[6].win;
                var rocketsWin = res.data.api.standings[15].win;
                var timberwolvesWin = res.data.api.standings[29].win;

                const tempDJNBA = [];

                tempDJNBA.push(sixersWin);
                tempDJNBA.push(rocketsWin);
                tempDJNBA.push(timberwolvesWin);

                var DJDoubledScores = tempDJNBA.map(team => team * 2);

                var DJPoints = 0;

                for (var i = 0; i < DJDoubledScores.length; i++) {
                    DJPoints += DJDoubledScores[i];
                }
                console.log(DJPoints);
                this.setState({ DJNBA: DJPoints });

                // Goose
                var raptorsWin = res.data.api.standings[5].win;
                var pistonsWin = res.data.api.standings[12].win;
                var knicksWin = res.data.api.standings[9].win;

                const tempGooseNBA = [];

                tempGooseNBA.push(raptorsWin);
                tempGooseNBA.push(pistonsWin);
                tempGooseNBA.push(knicksWin);

                var GooseDoubledScores = tempGooseNBA.map(team => team * 2);

                var GoosePoints = 0;

                for (var i = 0; i < GooseDoubledScores.length; i++) {
                    GoosePoints += GooseDoubledScores[i];
                }
                console.log(GoosePoints);
                this.setState({ gooseNBA: GoosePoints });

                // Al
                var mavericksWin = res.data.api.standings[19].win;
                var magicWin = res.data.api.standings[0].win;
                var wizardsWin = res.data.api.standings[3].win;

                const tempAlNBA = [];

                tempAlNBA.push(mavericksWin);
                tempAlNBA.push(magicWin);
                tempAlNBA.push(wizardsWin);

                var AlDoubledScores = tempAlNBA.map(team => team * 2);

                var AlPoints = 0;

                for (var i = 0; i < AlDoubledScores.length; i++) {
                    AlPoints += AlDoubledScores[i];
                }
                console.log(AlPoints);
                this.setState({ alNBA: AlPoints });

                // Joe
                var nuggetsWin = res.data.api.standings[25].win;
                var blazersWin = res.data.api.standings[26].win;
                var kingsWin = res.data.api.standings[22].win;

                const tempJoeNBA = [];

                tempJoeNBA.push(nuggetsWin);
                tempJoeNBA.push(blazersWin);
                tempJoeNBA.push(kingsWin);

                var JoeDoubledScores = tempJoeNBA.map(team => team * 2);

                var JoePoints = 0;

                for (var i = 0; i < JoeDoubledScores.length; i++) {
                    JoePoints += JoeDoubledScores[i];
                }
                console.log(JoePoints);
                this.setState({ joeNBA: JoePoints });

                // Steids
                var clippersWin = res.data.api.standings[21].win;
                var hawksWin = res.data.api.standings[4].win;
                var bullsWin = res.data.api.standings[13].win;

                const tempSteidsNBA = [];

                tempSteidsNBA.push(clippersWin);
                tempSteidsNBA.push(hawksWin);
                tempSteidsNBA.push(bullsWin);

                var SteidsDoubledScores = tempSteidsNBA.map(team => team * 2);

                var SteidsPoints = 0;

                for (var i = 0; i < SteidsDoubledScores.length; i++) {
                    SteidsPoints += SteidsDoubledScores[i];
                }
                console.log(SteidsPoints);
                this.setState({ steidsNBA: SteidsPoints });

                // Ben
                var pelicansWin = res.data.api.standings[18].win;
                var grizzliesWin = res.data.api.standings[17].win;
                var cavsWin = res.data.api.standings[14].win;

                const tempBenNBA = [];

                tempBenNBA.push(pelicansWin);
                tempBenNBA.push(grizzliesWin);
                tempBenNBA.push(cavsWin);

                var BenDoubledScores = tempBenNBA.map(team => team * 2);

                var BenPoints = 0;

                for (var i = 0; i < BenDoubledScores.length; i++) {
                    BenPoints += BenDoubledScores[i];
                }
                console.log(BenPoints);
                this.setState({ benNBA: BenPoints });
            })
            .catch(error => {
                console.log(error)
            });
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
                        <tr>
                            <th scope="col">Tommy</th>
                            <th scope="col">{this.state.tomEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.tomNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Patrick</th>
                            <th scope="col">{this.state.patEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.patrickNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">James</th>
                            <th scope="col">{this.state.jamesEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.jamesNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Neptune</th>
                            <th scope="col">{this.state.neptuneEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.neptuneNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">DJ</th>
                            <th scope="col">{this.state.djEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.DJNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Goose</th>
                            <th scope="col">{this.state.gooseEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.gooseNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Al</th>
                            <th scope="col">{this.state.alEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.alNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Joe</th>
                            <th scope="col">{this.state.joeEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.joeNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Steids</th>
                            <th scope="col">{this.state.steidsEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.steidsNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="col">Ben</th>
                            <th scope="col">{this.state.benEPL}</th>
                            <th scope="col">NFL</th>
                            <th scope="col">NHL</th>
                            <th scope="col">{this.state.benNBA}</th>
                            <th scope="col">0</th>
                            <th scope="col">Total Points</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


// Let's export the table.
export default Table; 