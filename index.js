function findMatching(list, name) {
  return list.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(list, name) {
  return list.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

function matchName(list, name) {
 return list.filter(driver => driver.name === name);
}
  
