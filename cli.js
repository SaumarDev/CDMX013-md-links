const fs = require("fs");
const process = require("process");
var path = require('path');

const CLI = () => {
  const fileToRead = process.argv[2];
  //if(fileToRead.slice(-3) == ".md") {
  if(path.extname(fileToRead) == '.md'){ 
    //readFile recibe tres parámetros: nombre del archivo, codificación del archivo, una función
    const file = fs.readFile(`${fileToRead}`, "utf8", (err, data) => {
      console.log(data);
    });
  } else {
    console.log('Ingresa un archivo con extensión .md')
  }
};

module.exports = {
  CLI,
};
