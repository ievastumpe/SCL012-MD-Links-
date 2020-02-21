'use strict'

const fs = require('fs');
const path = require ('path');
const file = process.argv[2];
const pathAbsolute = path.resolve(file);
const markdownLink = require('markdown-link-extractor');
const fetchUrl = require("fetch").fetchUrl;
// const marked = require('marked');

// Function to show the links
const readFile = (pathAbsolute) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathAbsolute, 'utf8', (error, link) => {
            if (error) {
                reject (new error('the file was not found'));
            }
            resolve(link)           
        })
    })
}

readFile(pathAbsolute)
    .then(link => 
        console.log(markdownLink(link))
        )
    .catch(error => console.log(error));

const urls = [];
    urls.push({

    })

module.exports = readFile, urls;

