const fs = require("fs");
const process = require("process");
var path = require("path");

const CLI = () => {
  let pathToRead = process.argv[2];
  //const pathAbsolute = process.argv[1];

  //Con path.isAbsolute podemos saber el tipo de path: absoluto - true
  const pathVerify = (pathToRead) => {
    if (path.isAbsolute(pathToRead)) {
    } else {
      //Con path.resolve podemos unir dos paths y volver la ruta absoluta. Si solo recibe un parámetro, devuelve la ruta absoluta del directorio de trabajo actual.
      const pathResolved = path.resolve(pathToRead);
      pathToRead = pathResolved;
    }
    return pathToRead;
  };

  console.log(pathVerify(pathToRead));

  //Verificar si es un folder:
  fs.lstat(pathToRead, (err, stats) => {
    if (stats.isDirectory()) {
      readFolder(pathToRead);
    }
    //Si la ruta es un archivo, solo debe verificar que su extensión sea .md
    if (stats.isFile() && path.extname(pathToRead) == ".md") {
      readFile(pathToRead)
    };
  });


  //Enlistando archivos de un folder y verificando que contenga archivos con extensión .md
  const readFolder = (pathFolderToRead) => {
    fs.readdir(`${pathFolderToRead}`, (err, files) => {
      files.forEach((file) => {
        if (path.extname(file) == ".md") {
          console.log(file);
        }
      });
    });
  };

  const readFile = (pathToRead) =>{
    fs.readFile(`${pathToRead}`, "utf8", (err, data) => {
      console.log(data);
  })
}

};

module.exports = {
  CLI,
};

//if(fileToRead.slice(-3) == ".md") {
/*   if(path.extname(fileToRead) == '.md'){ 
    //readFile recibe tres parámetros: nombre del archivo, codificación del archivo, una función
    const file = fs.readFile(`${fileToRead}`, "utf8", (err, data) => {
      console.log(data);
    });
  } else {
    console.log('Ingresa un archivo con extensión .md')
  } */
