/*
Given a numberArray
["11", "6"]

and a charArray
['1','1','+','6']

find any char that isn't a number in charArray and insert it into the numberArray
*/

let numberArray = ["11", "6"];
let charArray = ["1", "1", "+", "6"];

function insertOperators(charArray, numArray) {
    let operatorRegex = /\+|\-|\//g
    let operatorCount = 0;
    let specialOperator;
    for(let i = 0; i < charArray.length; i++) {
        if (charArray[i].match(operatorRegex)
        || charArray[i] ==="*"
        && charArray[i+1] !=="*") {
            specialOperator = charArray.slice(i, i+1);
            operatorCount++;
            numArray.splice(operatorCount, 0, ...specialOperator);
            
            console.log('match at', i);
            console.log(operatorCount);
            console.log(numArray);
        }
    }
    return numArray;
}

// insertOperators(["1", "1", "+", "6"], ["11", "6"]);
// insertOperators(["1","2", "-", "3"], ["12", "3"]);
// insertOperators(["6","0", "/", "3"], ["60", "3"]);
insertOperators(["5","1", "*", "*", "2"], ["51", "2"]);