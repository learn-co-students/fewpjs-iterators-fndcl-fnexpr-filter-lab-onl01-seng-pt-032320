function findMatching(drivers, name) {
  let result = drivers.filter((n) => {
    return n === name || n === name.toLowerCase();
  });
  return result;
}

function fuzzyMatch(drivers, letters) {
  let result = drivers.filter((el) => {
    return el.toLowerCase().indexOf(letters.toLowerCase()) === 0;
  });
  return result;
}

function matchName(drivers, name) {
  let result = drivers.filter((el) => {
    if (el.name === name) {
      return el.name;
      }
    })
  return result;
}
