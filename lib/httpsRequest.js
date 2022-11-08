const axios = require('axios');

const httpsRequest = (arrayOfLinks) => {

  //map devuelve un nuevo arreglo [promise,promise,promise] -> guardar en algun lugar
  const arrayWithPromises = arrayOfLinks.map((object) => {
      return axios
        .get(object.href)
        .then((resp) => {
          return ({
            ...object,
            status: resp.status,
            message: 'ok',
          });
        })
        .catch((error) => {
          return ({
            ...object,
            status: error.response.status,
            message: 'fail',
          });
        });
    });

    //retornando una promesa de que un array de promesas sera resuelto
    return Promise.all(arrayWithPromises).then(resultAllPromises=>{
      console.log(resultAllPromises)
    })
};

module.exports = {
  httpsRequest,
};

