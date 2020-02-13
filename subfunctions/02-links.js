'use strict'
const fs = require('fs');
const path = require('path'); 
const folder = process.argv[2];
const pathAbsolute = path.resolve(folder);
const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;


//console.log(pathAbsolute);

//------reading File and searching for http
fs.readFile(pathAbsolute, 'utf8', function (err, content) {
  const countURL = content.split('http').length - 1;
  console.log(countURL);
})

// http.get(options[, callback])#

//markdown for URL autolinking
// const md = require('markdown-it')({
//   html: true,
// });
