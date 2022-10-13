const fs = require("fs");
const process = require("process");
var path = require("path");

const CLI = () => {
  const fileToRead = process.argv[2];
  const pathAbsotule = process.argv[1];
  //if(fileToRead.slice(-3) == ".md") {
  /*   if(path.extname(fileToRead) == '.md'){ 
    //readFile recibe tres parámetros: nombre del archivo, codificación del archivo, una función
    const file = fs.readFile(`${fileToRead}`, "utf8", (err, data) => {
      console.log(data);
    });
  } else {
    console.log('Ingresa un archivo con extensión .md')
  } */

  //Enlistando archivos de un folder
  fs.readdir(`${fileToRead}`, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });

  //Con path.isAbsolute podemos saber el tipo de path: absoluto - true
  console.log(path.isAbsolute(fileToRead));
  console.log(process.argv);

  //Con path.resolve podemos unir dos paths y volver la ruta absoluta en caso de que en path.isAbsolute obtengamos false.
  console.log(
    path.resolve(
      "/Users/marlene/Laboratoria/CDMX013-md-links/index.js",
      "./test"
    )
  );
  console.log(path.resolve(`${pathAbsotule}`, `${fileToRead}`));
};

module.exports = {
  CLI,
};
