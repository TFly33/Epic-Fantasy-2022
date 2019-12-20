import axios from "axios";
// NEED TO IMPORT CHEERIO HERE. 
// import cheerio from "cheerio";

export default {
    // Gets all books
    getTeams: function() {
      return axios.get("/api/Teams");
    },

// ADD A SCCRAPE FUNCTYION HERE THAT AUTO SCRAPES USING COMPONENT DID RENDER. YOU WILL CALL IT FROM THE FRONT END. 

    // Gets the book with the given id
    getMyTeams: function(id) {
      return axios.get("/api/MyTeams/" + id);
    },
  };