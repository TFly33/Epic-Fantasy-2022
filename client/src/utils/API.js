import axios from "axios";
// NEED TO IMPORT CHEERIO HERE. 
// import cheerio from "cheerio";

export default {
  getTeams: function () {
    return axios.get("/api/team");
  },


  // Everything here is working. Shouldn't need to touch this again. 
  getScoresNBA: function () {
    // Sports API Search Here. 
    return axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2020",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
      }
    })
  },

  // Going to add the EPL API call here. This isn't working yet. 

  // // Here is the old version of the EPL API call that worked. Going to set up the new one below. 
  // getScoresEPL: function () {
  //   return axios({
  //     "method": "GET",
  //     "url": "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524",
  //     "headers": {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
  //     }
  //   })
  // },

  // 2021 Attempt at EPL API Grab 
  getScoresEPL: function () {
    return axios({
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/standings',
      params: { season: '2020', league: '39' },
      headers: {
        'x-rapidapi-key': '52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b',
        'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
      }
    })
  },

  // This one isn't working yet. 
  getScoresNFL: function () {
    // Sports API Search Here. 
    return axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
      }
    })
  },

  // This one isn't working yet. 
  getScoresNHL: function () {
    // Sports API Search Here. 
    return axios.get("https://statsapi.web.nhl.com/api/v1/standings")
  },

  // Attempting to make the golf API here. 
  getScoresPGA: function () {
    return axios.get("http://philly.stats.com/golf/averages.asp?tour=PGA")
  },

  // MLB API here. 
  getScoresMLB: function () {
    return axios({
      method: 'GET',
      url: 'https://api-baseball.p.rapidapi.com/standings',
      params: { season: '2021', league: '1'},
      headers: {
        'x-rapidapi-key': '52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b',
        'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
      }
    });
  }


};
