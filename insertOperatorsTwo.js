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
    for(let i = charArray.length - 1; i>0; i--) {
        if (charArray[i].match(operatorRegex)
        || charArray[i] ==="*"
        && charArray[i-1] !=="*"
        && charArray[i+1] !=="*") {
            specialOperator = charArray.slice(i, i+1);
            operatorCount--;
            numArray.splice(operatorCount, 0, ...specialOperator);
            
            console.log('match at', i);
            console.log(operatorCount);
            console.log(numArray);
        }
        // handle exponents
        if (charArray[i] === "*"
        && charArray[i-1] === "*") {
            console.log('still recorded');
            specialOperator = charArray.slice(i-1, i+1);
            joined = specialOperator.join('')
            operatorCount++;
            numArray.splice(operatorCount, 0, joined);

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
// insertOperators(["5","1", "*", "2"], ["51", "2"]);
// insertOperators(["2", "*", "*", "3"], ["2", "3"])
insertOperators(["2", "*", "*", "3", "+", "5"], ["2", "3", "5"])