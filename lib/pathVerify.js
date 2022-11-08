const path = require('path');

//Con path.isAbsolute podemos saber el tipo de path: absoluto - true
const pathVerify = (pathToRead) => {
  if (path.isAbsolute(pathToRead)) {
    pathToRead
  } else {
    //Con path.resolve podemos unir dos paths y volver la ruta absoluta. Si solo recibe un parámetro, devuelve la ruta absoluta del directorio de trabajo actual.
    const pathResolved = path.resolve(pathToRead);
    pathToRead = pathResolved;
  }
  return pathToRead;
};

module.exports = {
  pathVerify,
};
