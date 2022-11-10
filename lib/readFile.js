const fs = require('fs');
const path = require('path');
const { getLinks } = require('./getLinks.js');
const { httpsRequest } = require('./httpsRequest.js');
//const { httpsRequest } = require("./httpsRequest.js");

//Verificar si es un folder, lee los archivos, verifica si es md y extrae los links

const verifyIsFolder = (pathToRead, options = {}) => {
  fs.lstat(pathToRead, (err, stats) => {
    if (stats.isDirectory()) {
      readFolder(pathToRead);
    }
    //Si la ruta es un archivo, solo debe verificar que su extensión sea .md
    if (stats.isFile() && path.extname(pathToRead) == '.md') {
      readFile(pathToRead, options);
    }else{
      console.log('Please enter an md file')
    }
    if (err) {
      ('Hubo un error');
    }
  });
};

//Enlistando archivos de un folder y verificando que contenga archivos con extensión .md
const readFolder = (pathFolderToRead) => {
  fs.readdir(`${pathFolderToRead}`, (err, files) => {
    files.forEach((file) => {
      if (path.extname(file) == '.md') {
        readFile(file);
      }
    });
  });
};

//Función para leer el archivo y extraer los links
const readFile = (pathToRead, options = {}) => {
  if(options.validate == true){
    fs.readFile(`${pathToRead}`, 'utf8', (err, data) => {
      const linksToMap = getLinks(data, pathToRead);
      httpsRequest(linksToMap);
    });
  }
  if(options.validate == false){
    fs.readFile(`${pathToRead}`, 'utf8', (err, data) => {
      const linksToMap = getLinks(data, pathToRead)
      if(linksToMap.length > 0){
        console.log(linksToMap);
      }

    });
  }

};

module.exports = {
  readFolder,
  readFile,
  verifyIsFolder
};
