const { isValidUrl } = require('./isValidUrl.js');

//Obtener los links y mostrar solo los válidos.
const getLinks = (data, pathToRead) => {
  const matchesLinks = data.match(/\[([^[]+)\](\(.*\))/gm);
  const singleMatch = /\[([^[]+)\]\((.*)\)/;
  const arrayOfLinks = [];

  matchesLinks.forEach((link) => {
    const text = singleMatch.exec(link);
    if (isValidUrl(text[2])) {
      const resultLinks = {
        href: text[2],
        text: text[1].slice(0, 50),
        file: pathToRead,
      };
      arrayOfLinks.push(resultLinks);
    }
  });
  return arrayOfLinks;
};

//const resultLinks = getLinks(data)

module.exports = {
  getLinks,
};
