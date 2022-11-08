const { verifyIsFolder } = require('./lib/readFile.js');
//const process = require("process");

//let pathToRead = process.argv;

function mdLinks(pathToRead, options={validate:false}) {
  const promise = new Promise((resolve, reject) => {
    if (options.validate===true) {
      resolve(verifyIsFolder(pathToRead, options));
    } 
    if (options.validate===false)  {
      resolve(verifyIsFolder(pathToRead, options));
    }
    else{
      reject('An error has ocurred')
    }
  });

  return promise;
}

module.exports = {
  mdLinks,
};
