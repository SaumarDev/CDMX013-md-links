const fs = require("fs");
//const { readFileSync } = require("fs");
const process = require("process");
const path = require("path");
const markdownLinkExtractor = require("markdown-link-extractor");
const https = require("https");
const axios = require("axios");

const arrayOfLinks = [];

const CLI = () => {
  let pathToRead = process.argv[2];

  //const pathAbsolute = process.argv[1];
  //console.log(pathVerify(pathToRead));

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




  //console.log(httpsRequest('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'))
  //console.log(httpsRequest("https://otra-cosa.net/algun-doc.html"));
  //console.log(httpsRequest('https://encrypted.google.com/'))

  /* 
  const markdown = readFile(pathToRead)
  const { links } = markdownLinkExtractor(markdown);
  links.forEach((link) => console.log(link)); */
};

module.exports = {
  CLI,
};

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

//if(fileToRead.slice(-3) == ".md") {
/*   if(path.extname(fileToRead) == '.md'){ 
    //readFile recibe tres parámetros: nombre del archivo, codificación del archivo, una función
    const file = fs.readFile(`${fileToRead}`, "utf8", (err, data) => {
      console.log(data);
    });
  } else {
    console.log('Ingresa un archivo con extensión .md')
  } */


  //Obtener los links y mostrar solo los válidos.
  function getLinks(data) {
    const { links } = markdownLinkExtractor(data);
    links.forEach((link) => {
      //console.log(link)
      if (isValidUrl(link)) {
        arrayOfLinks.push(link);
      }
    })
    console.log(arrayOfLinks)
    //console.log(httpsRequest(arrayOfLinks))
    /* return new Promise ((resolve, reject) => {
          if (isValidUrl(link)) {
            arrayOfLinks.push(link);
            console.log(arrayOfLinks)
          }
        })
        
        links.forEach((link) => {
          if (isValidUrl(link)) {
            arrayOfLinks.push(link);
          }
        });
        console.log(arrayOfLinks)
        httpsRequest(arrayOfLinks)
      };
       */

  }

  const isValidUrl = (urlString) => {
    let urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  /* const httpsRequest = (linkToCheck) => {
  https.get(linkToCheck, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
} */

  /* const httpsRequest = (link) => {
    axios
      .get(link)
      .then(resp => 
        console.log(resp))
      // handle success

      .catch((error) => { 
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('error en data' + error.response.data);
          console.log('error en status' + error.response.status);
          console.log('erros en headers' + error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error de respuesta')
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        //console.log('error de config' + error.config);
      });
  }; */

  const httpsRequest = (linksArray) => {
    axios
      .get(linksArray)
      .then(resp => 
        console.log(resp.status))
/* const promisesArray =  linksArray.map(isValidUrl)
    console.log(promisesArray) */
  };