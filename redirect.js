// This is the redirect middleware for design.gitlab.com. Since Nuxt generates a static pre-rendered
// website, setting up redirects through the Vue router is not possible/straight-forward, so the recommended 
//guidance for this is to handle redirections with a service middleware.
//
// This redirect middleware doesn't cover complex redirection cases, but it does cover two important cases:
//
// 1) Top level redirection: Redirections at the first part of the url are all evaluated and rewritten if 
// existing. If the url has a second part and there's an existing match for the first part of the URL, the
// first part is rewritten and the second part is kept intact.
//
// 2) Long tail redirections: Long paths are matched and redirected to their new destination even if there's a
// top level redirection. In this case long defined paths take precedence over top level redirections. 


// Set redirections in this file.
const redirects = require('./redirects.json') 

export default function(req, res, next) {

  // We get the request URL
  const reqPath = req.url;
  let urlParts = stripSlash(reqPath).split('/')

  // This a variable to track all evaluated matched directions.
  let allMatchedRedirections = []

  // We loop through the existing redirections object
  // to find matches.
  redirects.forEach(r => {
    // Cleaning the From and New keys to evaluate if there's
    // a match for the existing request.
    let redirectFromParts = stripSlash(r.from).split('/')
    let redirectNewParts = stripSlash(r.new).split('/')

    // We determine if there are matches and create an array
    // with the positions in which the request has a match.
    let evMatches = findMatch(redirectFromParts, urlParts)

    // If the array is not empty there is match between the
    // request and the existing set redirections.
    let match = !arraysEqual(evMatches, [])

    // If there's a match and both, the set redirection and 
    // current request path are the exactly the same we push 
    // the new redirection to the allMatchedRedirections array.
    if (match && arraysEqual(redirectFromParts, urlParts)) {
      allMatchedRedirections.push(redirectNewParts)

    // If there's a match but the set redirection is just the first part of
    // the current request, it means that this is a top level redirection
    // so we need to keep subsequente parts intact.
    } else if (match && urlParts.length > 1 && redirectNewParts.length == 1 && redirectFromParts.length == 1) {

      // We simply copy the urlParts array
      let targetParts = [...urlParts]

      // And add the new top-level path and we push 
      // the new redirection to the allMatchedRedirections array
      targetParts.shift()
      targetParts.splice(0, 0, redirectNewParts[0])
      allMatchedRedirections.push(targetParts)
    }
  });

  // We determine the final redirectionPath by looking at
  // all matched redirections and using the longest one (the
  // most specific redirection)
  const redirectionTarget = longestArray(allMatchedRedirections)
  const redirectPath = "/" + redirectionTarget.join('/');

  if (redirectPath != "/") {
    res.writeHead(301, { Location: redirectPath })
    res.end()
  } else {
    next()
  }
} 


// Helper Functions
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

function arraysEqual(arr1,arr2) {
  return JSON.stringify(arr1)==JSON.stringify(arr2);
}

function longestArray(nestedArray) {
  let currentLongest = [];

  nestedArray.forEach(array => {
    if (array.length > currentLongest.length) {
      currentLongest = array
    }
  });
  return currentLongest
}