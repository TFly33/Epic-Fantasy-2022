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
                                        <td>Tampa Bay Lightning</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Manchester City</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Liverpool</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Philadelphia 76ers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Tottenham</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Milwaukee Bucks</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Kansas City Chiefs</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Los Angeles Clippers</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Los Angeles Rams</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Chelsea</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>New England Patriots</td>
                                        <td>Tommy </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>Los Angeles Dodgers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">13</th>
                                        <td>Arsenal</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">14</th>
                                        <td>Manchester United</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15</th>
                                        <td>New Orleans Saints</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16</th>
                                        <td>Philadelphia Eagles</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17</th>
                                        <td>Houston Rockets</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18</th>
                                        <td>Denver Nuggets</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">19</th>
                                        <td>Los Angeles Lakers</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td>San Diego Chargers</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">21</th>
                                        <td>Toronto Maple Leafs</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">22</th>
                                        <td>Chicago Bears</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23</th>
                                        <td>Utah Jazz</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">24</th>
                                        <td>Boston Celtics</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td>Houston Astros</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">26</th>
                                        <td>New York Yankees</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">27</th>
                                        <td>Indianapolis Colts</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">28</th>
                                        <td>Atlanta Braves</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">29</th>
                                        <td>Vegas Knights</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">30</th>
                                        <td>Boston Bruins</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">31</th>
                                        <td>Green Bay Packers</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">32</th>
                                        <td>Minnesota Twins</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">33</th>
                                        <td>Washington Capitals</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">34</th>
                                        <td>Portland Blazers</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">35</th>
                                        <td>Calgary Flames</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">36</th>
                                        <td>Nashville Predators</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">37</th>
                                        <td>San Jose Sharks</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">38</th>
                                        <td>Golden State Warriors</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">39</th>
                                        <td>Winnipeg Jets</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">40</th>
                                        <td>Colorado Avalanche</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">41</th>
                                        <td>Houston Texans</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">42</th>
                                        <td>Cleveland Browns</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">43</th>
                                        <td>St. Louis Blues</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">44</th>
                                        <td>Wolverhampton</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">45</th>
                                        <td>Everton</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">46</th>
                                        <td>Indiana Pacers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">47</th>
                                        <td>Brooklyn Nets</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">48</th>
                                        <td>Pittsburgh Penguins</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">49</th>
                                        <td>Cleveland Indians</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">50</th>
                                        <td>Dallas Stars</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">51</th>
                                        <td>Toronto Raptors</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">52</th>
                                        <td>Washington Nationals</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">53</th>
                                        <td>Boston Red Sox</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">54</th>
                                        <td>San Antonio Spurs</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">55</th>
                                        <td>Leicester City</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">56</th>
                                        <td>Dallas Mavericks</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">57</th>
                                        <td>Tampa Bay Rays</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">58</th>
                                        <td>Minnesota Vikings</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">59</th>
                                        <td>Chicago Cubs</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">60</th>
                                        <td>Oakland Athletics</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">61</th>
                                        <td>Carolina Hurricanes</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">62</th>
                                        <td>Pittsburgh Steelers</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">63</th>
                                        <td>West Ham United</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">64</th>
                                        <td>Miami Heat</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">65</th>
                                        <td>Philadelphia Phillies</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">66</th>
                                        <td>New York Islanders</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">67</th>
                                        <td>Newcastle</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">68</th>
                                        <td>Texas Rangers</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">69</th>
                                        <td>New Orleans Pelicans</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">70</th>
                                        <td>Columbus Blue Jackets</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">71</th>
                                        <td>Anaheim Angels</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">72</th>
                                        <td>Dallas Cowboys</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">73</th>
                                        <td>Orlando Magic</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">74</th>
                                        <td>Atlanta Falcons</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">75</th>
                                        <td>Baltimore Ravens</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">76</th>
                                        <td>Milwaukee Brewers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">77</th>
                                        <td>Seattle Seahawks</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">78</th>
                                        <td>Detroit Pistons</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">79</th>
                                        <td>Carolina Panthers</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">80</th>
                                        <td>Arizona Coyotes</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">81</th>
                                        <td>Watford</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">82</th>
                                        <td>Sacramento Kings</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">83</th>
                                        <td>St. Louis Cardinals</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">84</th>
                                        <td>Minnesota Timberwolves</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">85</th>
                                        <td>San Diego Padres</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">86</th>
                                        <td>Philadelphia Flyers</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">87</th>
                                        <td>Crystal Palace</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">88</th>
                                        <td>Carolina Panthers</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">89</th>
                                        <td>San Francisco 49ers</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">90</th>
                                        <td>Jacksonville Jaguars</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">91</th>
                                        <td>New York Rangers</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">92</th>
                                        <td>Chicago White Sox</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">93</th>
                                        <td>Montreal Canadians</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">94</th>
                                        <td>Oklahoma City Thunder</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">95</th>
                                        <td>Arizona Diamondbacks</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">96</th>
                                        <td>Tennessee Titans</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">97</th>
                                        <td>Denver Broncos</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">98</th>
                                        <td>Colorado Rockies</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">99</th>
                                        <td>San Francisco Giants</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">100</th>
                                        <td>Atlanta Hawks</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">101</th>
                                        <td>Bournemouth</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">102</th>
                                        <td>Pittsburgh Pirates</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">103</th>
                                        <td>Cincinnati Reds</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">104</th>
                                        <td>New York Mets</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">105</th>
                                        <td>Seattle Mariners</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">106</th>
                                        <td>Chicago Blackhawks</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">107</th>
                                        <td>Tampa Bay Buccaneers</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">108</th>
                                        <td>New Jersey Devils</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">109</th>
                                        <td>New York Jets</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">110</th>
                                        <td>Toronto Blue Jays</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">111</th>
                                        <td>Norwich City</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">112</th>
                                        <td>Chicago Bulls</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">113</th>
                                        <td>Vancouver Canucks</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">114</th>
                                        <td>Buffalo Bills</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">115</th>
                                        <td>Southampton</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">116</th>
                                        <td>Sheffield United</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">117</th>
                                        <td>Minnesota Wild</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">118</th>
                                        <td>Kansas City Royals</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">119</th>
                                        <td>Edmonton Oilers</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">120</th>
                                        <td>Memphis Grizzlies</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">121</th>
                                        <td>Anaheim Mighty Ducks</td>
                                        <td>Patrick</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">122</th>
                                        <td>Charlotte Hornets</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">123</th>
                                        <td>Miami Marlins</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">124</th>
                                        <td>Washington Wizards</td>
                                        <td>AL</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">125</th>
                                        <td>Detroit Tigers</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">126</th>
                                        <td>Washington Redskins</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">127</th>
                                        <td>Phoenix Suns</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">128</th>
                                        <td>New York Knicks</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">129</th>
                                        <td>Buffalo Sabres</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">130</th>
                                        <td>Oakland Raiders</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">131</th>
                                        <td>Aston Villa</td>
                                        <td>Joe</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">132</th>
                                        <td>Baltimore Orioles</td>
                                        <td>Steids</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">133</th>
                                        <td>Cincinnati Bengals</td>
                                        <td>Goose</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">134</th>
                                        <td>Detroit Lions</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">135</th>
                                        <td>Cleveland Cavaliers</td>
                                        <td>Ben</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">136</th>
                                        <td>Burnley</td>
                                        <td>DJ</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">137</th>
                                        <td>Detroit Red Wings</td>
                                        <td>Al</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">138</th>
                                        <td>Brighton and Hove Albion</td>
                                        <td>Tommy</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">139</th>
                                        <td>New York Giants</td>
                                        <td>Neptune</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">140</th>
                                        <td>Los Angeles Kings</td>
                                        <td>Patrick</td>
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

export default draft;