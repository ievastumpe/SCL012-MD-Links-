'use strict'
const fs = require('fs');
const path = require ('path');
const file = process.argv[2];
const pathAbsolute = path.resolve(file);
const markdownLink = require('markdown-link-extractor');

//------counting links
fs.readFile(pathAbsolute, 'utf8', function (err, content) {
  const numberLinks = content.split(markdownLink).length - 1;
  console.log(numberLinks);
});
