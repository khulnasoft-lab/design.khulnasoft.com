const redirects = require('./redirects.json') // set redirections

export default function(req) {

  // // find the redirect if it exists where the from === the requested url
  // const redirect = redirects.find(r => r.from === req.url)

  // // If it exists, redirect the page with a 301 response else carry on
  // if (redirect) {
  //   context.redirect(to)
  // } else {
  //   next()
  // }

  let reqPath = req.url;

  let cleanPath = stripSlash(reqPath)

  let urlParts = cleanPath.split('/')


  let redirect = redirects.find(r => arraysNotEqual(findMatch(stripSlash(r.from).split('/'), urlParts), []))

  console.log("this is the context ", redirect);
}  


function stripSlash(str) {
  let newStr;

  //Strips Trailing Slash
  if(str.substr(-1) === '/') {
      newStr = str.substr(0, str.length - 1);
  } else {
      newStr = str
  }
  
  // Strips Forward Slash
  if(newStr.charAt(0) === '/') {
      newStr = newStr.substr(1, newStr.length);
  }
  return newStr;
}


function findMatch(arr1, arr2) {
  let matchingElements = arr1.filter(element => arr2.includes(element))
  let matchingPositions = []
  matchingElements.forEach(element => {
    let arr1Pos = arr1.indexOf(element)
    let arr2Pos = arr2.indexOf(element)

    if (arr1Pos === arr2Pos) {
      matchingPositions.push(arr1Pos)
    }
  });
  return matchingPositions
}

function arraysNotEqual(arr1,arr2) {
  return JSON.stringify(arr1)!=JSON.stringify(arr2);
}