function findMatching(array, string) {
   let drivers = array.filter(d => d.toLowerCase() === string.toLowerCase())
   return drivers
};

function fuzzyMatch(array, string) {
   let drivers = array.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
   return drivers
};

function matchName(array, name) {
   let driver = array.filter(d => d.name === name)
   return driver
};

