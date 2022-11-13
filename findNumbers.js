/*
You can create an array of number values easily with regex.
*/

function findNumbersWithRegex(str) {
    console.log('adds numbers to array');
    return str.match(/\d+/g)
}

console.log(findNumbersWithRegex('123+234/3(5-3)'))