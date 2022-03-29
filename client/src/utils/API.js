import axios from "axios";

export default {
  // Everything here is working. Shouldn't need to touch this again. 
  getScoresNBA: function () {
    // Sports API Search Here. 
    return axios({
      "method": "GET",
      "url": "https://api-nba-v1.p.rapidapi.com/standings/standard/2021",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
      }
    })
  },

  getScoresEPL: function () {
    return axios({
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/standings',
      params: { season: '2021', league: '39' },
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

  // This one isn't working yet. 
  getScoresPGA: function () {
    // Sports API Search Here. 
    return axios.get("https://www.cbssports.com/golf/rankings/cup-points/")
  },

  // Gets the teams with the given id
  getMyTeams: function (id) {
    return axios.get("/api/myteam/" + id);
  },

  // MLB API here. 
  getScoresMLB: function () {
    return axios({
      method: 'GET',
      url: 'https://api-baseball.p.rapidapi.com/standings',
      params: { season: '2022', league: '1' },
      headers: {
        'x-rapidapi-key': '52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b',
        'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
      }
    });
  }

};