const fs = require('fs');
const path = require ('path');
const file = process.argv[2];
const pathAbsolute = path.resolve(file);
const markdownLink = require('markdown-link-extractor');


exports.readFile = (pathAbsolute) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathAbsolute, 'utf8', (error, data) => {
            if (error) return reject (error);
            return resolve(data);
          })
    })
}

exports.readFile(pathAbsolute)
    .then(data => console.log(markdownLink(data)))
    .catch(error => console.log(error));
