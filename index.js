// Code your solution here
function findMatching(drivers, namestring) {
    return drivers.filter( eachdriver =>
      eachdriver.toLowerCase() === namestring.toLowerCase()
    )
  } 

  function fuzzyMatch(drivers, testString) {
    return drivers.filter( driver =>
      driver.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(drivers, searchedName) {
    return drivers.filter( record => record.name === searchedName)
  }