// Code your solution here





// function superbowlWin(array){
//     let result = array.find(obj => obj.result === "W")
//     // record.find( function(s) { return s === "W" })
//     return result ? result.year : undefined
  
    
//   }
  

function findMatching(drivers, string) {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() )

};
    

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0  )

};

function matchName(drivers, string) {
    return drivers.filter( driver => driver.name === string )
}