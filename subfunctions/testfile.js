'use strict'
const fs = require('fs');
const path = require ('path');
const file = process.argv[2];
const pathAbsolute = path.resolve(file);
const markdownLink = require('markdown-link-extractor');

//------counting links
// fs.readFile(pathAbsolute, 'utf8', function (err, content) {
//   const numberLinks = content.split(markdownLink).length - 1;
//   console.log(numberLinks);
// });


function statusLink (links){
    return new Promise((resolve, reject) => {
		links.map((element) => {
			fetch(element.href)
				.then(response => {
					if (response.status == 200) {
						console.log(chalk.green('[✔]'), chalk.cyan(element.href), chalk.bgGreen(` ${response.status} ${response.statusText} `), chalk.yellow(element.text));
					} else {
						console.log(chalk.red('[X]'), chalk.cyan(element.href), chalk.bgRed(` ${response.status} ${response.statusText} `), chalk.white(element.text));
					}
				}).catch((error) => console.log(chalk.gray('[-]'), chalk.cyan(element.href), chalk.bgRed(` ${error.type} ${error.code} `), chalk.white(element.text)));
		})
	}
};

statusLink()

module.exports = statusLink;
