// const mdLinks = require('./index');
// const fetch = require('node-fetch');
// const chalk = require('chalk');
// const {analyseLinks, extactData} = require('./02-links');

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




 
// const getFile = file => {
//     return new Promise((resolve, reject) => {
//       fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//           return reject(err);
//         } else {
//           let links = [];
//           const renderer = new marked.Renderer(); // Get reference
//           renderer.link = function(href, title, text) {
//             // Override function
//             links.push({
//               href: href,
//               text: text,
//               filePath: file
//             });
//           };
//           marked(data, { renderer: renderer }); // Aquí imprime y crea los elementos dentro del Array
//           links = linksHttp(links);
//           resolve(links);
//         }
//       });
//     });
//   };

// module.exports = readFile; 