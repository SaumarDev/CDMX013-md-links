const {readFile} = require('./lib/readFile.js')
const {readFolder} = require('./lib/readFile.js')
const {httpsRequest} = require('./lib/httpsRequest.js')
//const process = require("process");
const fs = require("fs");
const path = require("path");

//let pathToRead = process.argv;

function mdLinks (pathToRead, options) {  
  const promise = new Promise((resolve, reject) => {
  //Verificar si es un folder, lee los archivos, verifica si es md y extrae los links
  fs.lstat(pathToRead, (err, stats) => {
    if (stats.isDirectory()) {
      resolve(readFolder(pathToRead));
    }
    //Si la ruta es un archivo, solo debe verificar que su extensión sea .md
    if (stats.isFile() && path.extname(pathToRead) == ".md") {
      resolve(readFile(pathToRead));
    }

    if(err){
      reject('Hubo un error')
    }
  });
});
return promise
}

module.exports = {
  mdLinks,
};