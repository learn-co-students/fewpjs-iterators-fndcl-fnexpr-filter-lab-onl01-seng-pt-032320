// Code your solution here

function findMatching(array, string) {
    return array.filter(element => {return element.toLowerCase() === string.toLowerCase();});
}

function fuzzyMatch(array, string) {
    return array.filter(element => {return element.startsWith(string);});
}


function matchName(array, string) {
    return array.filter(element => {return element["name"].toLowerCase() === string.toLowerCase();}
    );
}