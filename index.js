function findMatching(drivers, string) {
    let result = []


    let filter = drivers.filter( d => {return d.toLowerCase() === string.toLowerCase()})


    return filter
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( d => {return d.startsWith(string)});
}

function matchName(drivers, string) {
    return drivers.filter( d => {return d.name === string});
}