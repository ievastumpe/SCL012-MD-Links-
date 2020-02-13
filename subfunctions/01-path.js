//'use strict'
const fs = require('fs');
const path = require('path'); // library path - for working with file and directory paths

const folder = process.argv[2]
const pathAbsolute = path.resolve(folder)

console.log(pathAbsolute);
//------------Function to read directory and show md files
function readDirectory(){
fs.readdir(pathAbsolute, function(err, files){
  files
      .filter(function(file){ return path.extname(file) === '.' + 'md' } )
      .forEach(function(file){ 
        console.log(file); });
});
};
readDirectory();