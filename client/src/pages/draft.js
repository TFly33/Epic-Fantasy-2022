import React from "react";

class draft extends React.Component {

    componentDidMount = () => {
        // this.getScoresNBA();
        // this.getScoresNHL();
        // this.getScoresEPL();
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
                            <li class="nav-item">
                                <a class="nav-link" href="/Home">Standings <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown show">
                                    <div class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Teams
                                    </div>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="tommy">Bommy</a>
                                        <a class="dropdown-item" href="patrick">Patrick</a>
                                        <a class="dropdown-item" href="james">James</a>
                                        <a class="dropdown-item" href="neptune">Neptune</a>
                                        <a class="dropdown-item" href="dj">DJ</a>
                                        <a class="dropdown-item" href="goose">Goose</a>
                                        <a class="dropdown-item" href="al">Al</a>
                                        <a class="dropdown-item" href="joe">Joe</a>
                                        <a class="dropdown-item" href="steids">Steids</a>
                                        <a class="dropdown-item" href="ben">Eres/JMar</a>
                                    </div>
                                </div>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Login">Login</a>
                            </li> */}
                            <li class="nav-item active">
                                <a class="nav-link" href="/draft">Draft Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/points">Points System</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="card">
                    <div class="card-body text-center bg-light text-secondary">
                        Draft Results
                     </div>
                </div>
                {/* Starting my new tables here */}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            {/* Here are draft results */}
                            <table class="table table-striped table-bordered table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col-6">Draft #</th>
                                        <th scope="col-6">Pick</th>
                                        <th scope="col-6">Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td className="liverpool">Liverpool</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td className="bucks">Milwaukee Bucks</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td className="mancity">Man City</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td className="dodgers">LA Dodgers</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td className="chiefs">Kansas City Chiefs</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td className="chelsea">Chelsea</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td className="lakers">LA Lakers</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td className="packers">Green Bay Packers</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td className="tottenham">Tottenham</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td className="clippers">LA Clippers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td className="nuggets">Denver Nuggets</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td className="dodgers">Leicester City</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">13</th>
                                        <td className="lightning">Tampa Bay Lightning</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">14</th>
                                        <td className="manU">Manchester United</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15</th>
                                        <td className="yankees">New York Yankees</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16</th>
                                        <td className="braves">Atlanta Braves</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17</th>
                                        <td className="avalanche">Colorado Avalanche</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18</th>
                                        <td className="nuggets">New Orleans Saints</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">19</th>
                                        <td className="everton">Everton</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td className="bills">Buffalo Bills</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">21</th>
                                        <td className="southhampton">Southhampton</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">22</th>
                                        <td className="celtics">Boston Celtics</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23</th>
                                        <td className="knights">Vegas Knights</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">24</th>
                                        <td className="rams">Los Angeles Rams</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td className="ravens">Baltimore Ravens</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">26</th>
                                        <td className="heat">Miami Heat</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">27</th>
                                        <td className="astonV">Aston Villa</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">28</th>
                                        <td className="rays">Tampa Bay Rays</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">29</th>
                                        <td className="padres">San Diego Padres</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">30</th>
                                        <td className="sixers">Philadelphia 76ers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td className="mavs">Dallas Mavericks</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">32</th>
                                        <td className="raptors">Toronto Raptors</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">33</th>
                                        <td className="titans">Tennessee Titans</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">34</th>
                                        <td className="jazz">Utah Jazz</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">35</th>
                                        <td className="browns">Cleveland Browns</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">36</th>
                                        <td className="nets">Brooklyn Nets</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">37</th>
                                        <td className="steelers">Pittsburgh Steelers</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">38</th>
                                        <td className="westHam">West Ham United</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">39</th>
                                        <td className="wolverhampton">Wolverhampton</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">40</th>
                                        <td className="seahawks">Seattle Seahawks</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">41</th>
                                        <td className="arsenal">Arsenal</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">42</th>
                                        <td className="bruins">Boston Bruins</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">43</th>
                                        <td className="suns">Phoenix Suns</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">44</th>
                                        <td className="whiteSox">Chicago White Sox</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">45</th>
                                        <td className="blazers">Portland Trailblazers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">46</th>
                                        <td className="dolphins">Miami Dolphins</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">47</th>
                                        <td className="flyers">Philadelphia Flyers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">48</th>
                                        <td className="athletics">Oakland Athletics</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">49</th>
                                        <td className="leafs">Toronto Maple Leafs</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">50</th>
                                        <td className="twins">Minnesota Twins</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">51</th>
                                        <td className="blues">St. Louis Blues</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">52</th>
                                        <td className="bucs">Tampa Bay Bucaneers</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">53</th>
                                        <td className="capitals">Washington Capitals</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">54</th>
                                        <td className="patriots">New England Patriots</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">55</th>
                                        <td className="warriors">Golden State Warriors</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">56</th>
                                        <td className="cardinals">Arizona Cardinals</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">57</th>
                                        <td className="indians">Cleveland Indians</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">58</th>
                                        <td className="colts">Indianapolis Colts</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">59</th>
                                        <td className="pelicans">New Orleans Pelicans</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">60</th>
                                        <td className="penguins">Pittsburgh Penguins</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">61</th>
                                        <td className="mets">New York Mets</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">62</th>
                                        <td className="crystalP">Crystal Palace</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">63</th>
                                        <td className="newcastle">Newcastle</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">64</th>
                                        <td className="raiders">Vegas Raiders</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65</th>
                                        <td className="astros">Houston Astros</td>
                                        <td>Tom/Bari</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">66</th>
                                        <td className="redskins">Washington Football Team</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">67</th>
                                        <td className="leeds">Leeds United</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">68</th>
                                        <td className="brighton">Brighton and Hove Albion</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">69</th>
                                        <td className="pacers">Indiana Pacers</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">70</th>
                                        <td className="rockets">Houston Rockets</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">71</th>
                                        <td className="niners">San Francisco 49ers</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">72</th>
                                        <td className="hawks">Atlanta Hawks</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">73</th>
                                        <td className="stars">Dallas Stars</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">74</th>
                                        <td className="hurricanes">Carolina Hurricanes</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">75</th>
                                        <td className="grizzlies">Memphis Grizzlies</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">76</th>
                                        <td className="reds">Cincinnati Reds</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">77</th>
                                        <td className="oilers">Edmonton Oilers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">78</th>
                                        <td className="cowboys">Dallas Cowboys</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">79</th>
                                        <td className="wiz">Washington Wizards</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">80</th>
                                        <td className="giants">New York Giants</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">81</th>
                                        <td className="nationals">Washington Nationals</td>
                                        <td>Eres/Jmar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">82</th>
                                        <td className="blueJays">Toronto Blue Jays</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">83</th>
                                        <td className="cardinals">St. Louis Cardinals</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">84</th>
                                        <td className="spurs">San Antonio Spurs</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">85</th>
                                        <td className="bulls">Chicago Bulls</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">86</th>
                                        <td className="cubs">Chicago Cubs</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">87</th>
                                        <td className="panthers">Carolina Panthers</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">88</th>
                                        <td className="predators">Nashville Predators</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">89</th>
                                        <td className="phillies">Philadelphia Phillies</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">90</th>
                                        <td className="magic">Orlando Magic</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">91</th>
                                        <td className="tWolves">Minnesota Timberwolves</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">92</th>
                                        <td className="brewers">Milwaukee Brewers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">93</th>
                                        <td className="angels">Los Angeles Angels</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">94</th>
                                        <td className="rangers">New York Rangers</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">95</th>
                                        <td className="kings">Sacramento Kings</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">96</th>
                                        <td className="redSox">Boston Red Sox </td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">97</th>
                                        <td className="broncos">Denver Broncos</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">98</th>
                                        <td className="marlins">Miami Marlins</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">99</th>
                                        <td className="diamondbacks">Arizona Diamondbacks</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">100</th>
                                        <td className="bears">Chicago Bears</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">101</th>
                                        <td className="burnley">Burnley</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">102</th>
                                        <td className="islanders">New York Islanders</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">103</th>
                                        <td className="chargers">LA Chargers</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">104</th>
                                        <td className="hornets">Charlotte Hornets</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">105</th>
                                        <td className="vikings">Minnesota Vikings</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">106</th>
                                        <td className="eagles">Philadelphia Eagles</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">107</th>
                                        <td className="none">GT1 Johnson/Day/Niemann/Oosthuizen/Garcia </td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">108</th>
                                        <td className="flames">Calgary Flames</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">109</th>
                                        <td className="canucks">Vancouver Canucks</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">110</th>
                                        <td className="falcons">Atlanta Falcons</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">111</th>
                                        <td className="texans">Houston Texans</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">112</th>
                                        <td className="canadiens">Montreal Canadiens</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">113</th>
                                        <td className="pistons">Detroit Pistons</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">114</th>
                                        <td className="jets">Winnipeg Jets</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">115</th>
                                        <td className="blueJackets">Columbus Blue Jackets</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">116</th>
                                        <td className="sfGiants">San Francisco Giants</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">117</th>
                                        <td className="lions">Detroit Lions</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">118</th>
                                        <td className="fPanthers">Florida Panthers</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">119</th>
                                        <td className="wild">Minnesota Wild</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">120</th>
                                        <td className="mariners">Seattle Mariners</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">121</th>
                                        <td className="sabres">Buffalo Sabres</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">122</th>
                                        <td className="orioles">Baltimore Orioles</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">123</th>
                                        <td className="bengals">Cincinnati Bengals</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">124</th>
                                        <td className="royals">Kansas City Royals</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">125</th>
                                        <td className="thunder">OKC Thunder</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">126</th>
                                        <td className="sharks">San Jose Sharks</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">127</th>
                                        <td className="tigers">Detroit Tigers</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">128</th>
                                        <td className="rockies">Colorado Rockies</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">129</th>
                                        <td className="fulham">Fulham</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">130</th>
                                        <td className="blackhawks">Chicago Blackhawks</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">131</th>
                                        <td className="none">GT10 Hovland/Wolff/Champ/Munoz/Henley</td>
                                        <td>Pat/JP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">132</th>
                                        <td className="none">GT4 Thomas/Berger/Fitzpatrick/Todd/Kuchar</td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">133</th>
                                        <td className="none">GT6 Schauffele/Finau/Woods/Ancer/Griffin</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">134</th>
                                        <td className="none">GT9 Morikawa/Simpson/Hatton/Smith/Conners</td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">135</th>
                                        <td className="coyotes">Arizona Coyotes</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">136</th>
                                        <td className="lakings">Los Angeles Kings</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">137</th>
                                        <td className="devils">New Jersey Devils</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">138</th>
                                        <td className="wba">West Bromwich Albion</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">139</th>
                                        <td className="ducks">Anaheim Mighty Ducks</td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">140</th>
                                        <td className="none">GT2 Dechambeau/Rose/Scott/Kisner/Kim </td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">141</th>
                                        <td className="none">GT8 Koepka/Matsuyama/English/Kokrak/Lowry </td>
                                        <td>Bommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">142</th>
                                        <td className="rangers">Texas Rangers </td>
                                        <td>Eres/JMar</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">143</th>
                                        <td className="pirates">Pittsburgh Pirates </td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">144</th>
                                        <td className="knicks">New York Knicks</td>
                                        <td>Steids/Adam/Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">145</th>
                                        <td className="senators">Ottawa Senators</td>
                                        <td>Big Dog</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">146</th>
                                        <td className="cavs">Cleveland Cavaliers </td>
                                        <td>Daddy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">147</th>
                                        <td className="none">GT5 Mcilroy/Im/Fleetwood/Leishman/Horschel </td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">148</th>
                                        <td className="none">GT3 Rahm/Scheffler/Spieth/Casey/Watson </td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">149</th>
                                        <td className="none">GT7 Cantlay/Reed/Fowler/Woodland/Mickelson </td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">150</th>
                                        <td className="sheffield">Sheffield United </td>
                                        <td>DJ</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>
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
                    <footer id="sticky-footer" class="py-2 bg-dark text-white-50">
                        <div class="container text-center">
                            <small>Copyright &copy; Epic Fantasy League 2020</small>
                        </div>
                    </footer>
                </body>
            </div>
        )
    }
}

export default draft;