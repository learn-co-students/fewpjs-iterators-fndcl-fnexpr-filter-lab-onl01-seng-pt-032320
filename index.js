// Code your solution here

// Return array items whose name matches the 2nd argument, case insensitive
function findMatching(drivers, name) {
  return drivers.filter(function(d) { return d.toUpperCase() === name.toUpperCase(); })
}

// Return array items whose name begin with the letters provided in the 2nd argument
function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(d) { return d.startsWith(letters); })
}

// Return objects whose name matches the 2nd argument name
function matchName(drivers, name) {
  return drivers.filter(function(d) { return d.name === name; })
}