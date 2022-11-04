const { isValidUrl } = require("./isValidUrl.js");
const { httpsRequest } = require("./httpsRequest.js");
//Obtener los links y mostrar solo los válidos.
const getLinks = (data) => {
  const matchesLinks = data.match(/\[([^\[]+)\](\(.*\))/gm);
  const singleMatch = /\[([^\[]+)\]\((.*)\)/;
  const arrayOfLinks = [];
  matchesLinks.forEach((link) => {
    const text = singleMatch.exec(link);
    if (isValidUrl(text[2])) {
      const resultLinks = {
        href: text[2],
        text: text[1],
      };
      arrayOfLinks.push(resultLinks)
      
      //httpsRequest(resultLinks.href)
    }

  });
  return arrayOfLinks;
};

//const resultLinks = getLinks(data)

module.exports = {
  getLinks,
};
