// Code your solution here
function findMatching(array,string){
    return array.filter(match => match.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array,string){
    return array.filter(match => match.toLowerCase().charAt(0) === string.toLowerCase().charAt(0))
}

function matchName(drivers,string){
    return drivers.filter(result => result['name'] === string)
}
