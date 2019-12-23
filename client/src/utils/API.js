import axios from "axios";
// NEED TO IMPORT CHEERIO HERE. 
// import cheerio from "cheerio";

export default {
    // Gets all books
    getTeams: function() {
      return axios.get("/api/team");
    },

    getScoresNBA: function() {
      // Sports API Search Here. 
      return axios({
        "method":"GET",
        "url":"https://api-nba-v1.p.rapidapi.com/standings/standard/2019",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key":"52aa6a2637mshdf98d5a291eb6cep182376jsnfb67836d7b3b"
        }
        })
        
    },

    // Gets the book with the given id
    getMyTeams: function(id) {
      return axios.get("/api/myteam/" + id);
    },
  };