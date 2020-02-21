const {urls} = require('./02-find-links.js')

const fetchUrl = require("fetch").fetchUrl;
const urls = ['https://www.google.com', 'https://bing.com', 'https://www.npmjs.com/']

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
//le paso el array de links y con el map por cada url que posee se lo pasamos a la funcion getData, si no le pasamos el error, lo hace con cada url del array. Después que termina llamamos al then y le pasamos estos resultados
Promise.all(urls.map(url => getData(url).catch(err => 'broken')))
  .then(results => console.log("Promise.all => results.length:", results.length));
