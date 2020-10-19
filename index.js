function findMatching(source,sought) { //creates a function called findMatching, takes in original array(list) and a desired item as arguments
  return source.filter( possibleMatch => //puts out the original list after it has been filtered using any possible matches.
  possibleMatch.toLowerCase() === sought.toLowerCase()) //compares the possible matches to the requested out put and only returns ones with a truthy value (when the item is lowercase)
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(string.toLowerCase()) ===0
  )
}

function matchName(drivers, string) {
  return drivers.filter( drivers => drivers.name === string)
}
