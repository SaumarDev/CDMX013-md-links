const markdownLinkExtractor = require("markdown-link-extractor");
const {isValidUrl} = require('./isValidUrl.js');

const arrayOfLinks = [];

  //Obtener los links y mostrar solo los válidos.
  const getLinks = (data) =>{
    const { links } = markdownLinkExtractor(data);
    links.forEach((link) => {
      //console.log(link)
      if (isValidUrl(link)) {
        arrayOfLinks.push(link);
      }
    })
    console.log(arrayOfLinks)
  }

  module.exports = {
    getLinks
  };