const fs = require("fs");
const path = require("path");
const {getLinks} = require('./getLinks.js')

//Enlistando archivos de un folder y verificando que contenga archivos con extensión .md
const readFolder = (pathFolderToRead) => {
    fs.readdir(`${pathFolderToRead}`, (err, files) => {
      files.forEach((file) => {
        if (path.extname(file) == ".md") {
          readFile(file);
        }
      });
    });
  };

  //Función para leer el archivo y extraer los links
  const readFile = (pathToRead) => {
    fs.readFile(`${pathToRead}`, "utf8", (err, data) => {
      getLinks(data);
    });
  };

  module.exports = {
    readFolder,
    readFile
  };