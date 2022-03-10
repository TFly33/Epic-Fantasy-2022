import axios from "axios";
// NEED TO IMPORT CHEERIO HERE. 
// import cheerio from "cheerio";

export default {
  // Gets all books
  getTeams: function () {
    return axios.get("/api/team");
  },


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

  // Going to add the EPL API call here. This isn't working yet. 

  getScoresEPL: function () {
    return axios({
      "method": "GET",
      "url": "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
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

  // Gets the teams with the given id
  getMyTeams: function (id) {
    return axios.get("/api/myteam/" + id);
  },
};