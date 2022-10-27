const {readFile} = require('./lib/readFile.js')
const {readFolder} = require('./lib/readFile.js')
const process = require("process");
const fs = require("fs");
const path = require("path");

const CLI = () => {
  let pathToRead = process.argv[2];

  //Verificar si es un folder, lee los archivos, verifica si es md y extrae los links
  fs.lstat(pathToRead, (err, stats) => {
    if (stats.isDirectory()) {
      readFolder(pathToRead);
    }
    //Si la ruta es un archivo, solo debe verificar que su extensión sea .md
    if (stats.isFile() && path.extname(pathToRead) == ".md") {
      readFile(pathToRead);
    }
  });
};

module.exports = {
  CLI,
};