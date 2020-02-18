'use strict'
//const mdLinks = require('./index');
const fs = require('fs');
const path = require('path'); 
const folder = process.argv[2];
const pathAbsolute = path.resolve(folder);
const link = ('http'+'');

const analyseLinks = (data) => {
  const regExp = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/g;
  const matchLinks = data.match(regExp);
  return matchLinks;
};

//------counting links
fs.readFile(pathAbsolute, 'utf8', function (err, content) {
  const numberLinks = content.split(regExp).length - 1;
  console.log(numberLinks);
});

module.exports = {analyseLinks};