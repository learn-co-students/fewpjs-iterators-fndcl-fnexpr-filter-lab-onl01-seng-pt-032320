// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

const fuzzyMatch = (drivers, letter) => {
    return drivers.filter(driver => driver.startsWith(letter))
}

const matchName = (drivers, str) => {
    return drivers.filter(driver => driver.name === str)
}