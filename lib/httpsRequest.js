const axios = require("axios");

const httpsRequest = (arrayOfLinks) => {
  //Debo maperar el arreglo de links
  arrayOfLinks.map((object) => {
    if (object.href != null) {
      return axios
        .get(object.href)
        .then((resp) => {
          console.log({ ...object, status: resp.status });
        })
        .catch((error) => console.log(error));
    }
  });
};

module.exports = {
  httpsRequest,
};
