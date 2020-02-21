// const {urls} = require('./02-find-links.js')

const fetchUrl = require("fetch").fetchUrl;
const urls = ['https://www.laboratoria.io', 'https://pt.wikipedia.org/wiki/Markdown', 'https://nodejs.org/']

const getData = (url) => {
  return new Promise((resolve, reject) =>{
    fetchUrl(url, (error, meta, body) =>{
      if(meta){
        console.log("el estado del sitio", url, "es: ", meta.status);
        resolve(meta.status);
      }
    })
  })
}
const getStatusFromUrlArrays = (urlArray) => {
  let statusCounter = 0;
  for(let i= 0; i< urlArray.length; i++){
    console.log("getStatuaFromUrlArrays url:", urlArray[i]);
    //llamamos a la función de arriba getData
    getData(urlArray[i])
    //llamamos al resultado que en la promesa de arriba sería el meta.status
    .then(res => {
      if(res === 200) {
        statusCounter += 1;
      }else{
        console.log("este no es 200")
      }
    })
  }
  console.log('statusCounter', statusCounter);
}
// //numero 1
 //getStatusFromUrlArrays(urls);

Promise.all(urls.map(url => getData(url).catch(err => 'broken')))
  .then(results => console.log("Promise.all => results.length:", results.length));
