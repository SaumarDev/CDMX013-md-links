const axios = require('axios');

const httpsRequest = (arrayOfLinks) => {
  const arrayWithResponse = [];
    arrayOfLinks.map((object) => {
      return axios
        .get(object.href)
        .then((resp) => {
          arrayWithResponse.push({
            ...object,
            status: resp.status,
            message: 'ok',
          });
        })
        .catch((error) => {
          arrayWithResponse.push({
            ...object,
            status: error.response.status,
            message: 'fail',
          });
        });
    });
    //return arrayWithResponse;
/*     setTimeout(() => {
      console.log(arrayWithResponse)
    }
    , 3000); */
    return arrayWithResponse
  
};

module.exports = {
  httpsRequest,
};

