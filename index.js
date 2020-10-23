// Code your solution here

function findMatching(drivers, name){
    const matches = drivers.filter(d => d.toUpperCase() === name.toUpperCase());
    return matches;
}

function fuzzyMatch(drivers, arg){
    //('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')
    const matches = drivers.filter( d=>  d.slice(0,arg.length)=== arg);
    return matches;
}

function matchName(drivers, name){
    const matches = drivers.filter(d => d.name===name);
    
    return matches;
}