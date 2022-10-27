//const https = require("https");
const axios = require("axios");

const httpsRequest = (linksArray) => {
  axios.get(linksArray).then((resp) => console.log(resp.status));
};

module.exports = {
    httpsRequest,
  };
  