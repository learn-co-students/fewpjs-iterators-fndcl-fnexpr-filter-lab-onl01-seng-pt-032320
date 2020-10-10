// Code your solution here
function findMatching(drivers,string){
  return drivers.filter(match => match.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(letter,string){
  return letter.filter(search => search.toLowerCase().charAt(0) === string.toLowerCase().charAt(0))
}


function matchName(list,cabbyName){
  return list.filter(results => results.name === cabbyName)
}