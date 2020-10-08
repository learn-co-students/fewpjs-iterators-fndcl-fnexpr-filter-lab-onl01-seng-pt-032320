// Code your solution here
function findMatching(arr,str){
    let exactMatch = arr.filter(n => {
         return n.toLowerCase() === str.toLowerCase();
    })
    return exactMatch
}

function fuzzyMatch(arr, str){
    let firstMatch = arr.filter(n => {

        return n.slice(0,2) === str 
    })
    return firstMatch
}


function matchName(arr, str){
    let nameMatch = arr.filter(n => {
        return n.name === str 
    })
    return nameMatch
}