/*
Given a string i.e '1+2(3*4)/5'
Find the contents between the two parenthesis and generate a new string with it's contents
*/

import convertStringToArray from './convertStringToArray.js'

let equation = '1+2(3*4)/5'
let nestedElements = [];

function findParenthesis(string) {
    let arr = convertStringToArray(string)
    arr.forEach((element, index) => {
        if(element === "(") {
            let openingParenthesis = index;
            let closingParenthesis = arr.findIndex((el) => el === ")")
            nestedElements = arr.slice(openingParenthesis + 1, closingParenthesis)
        }
        else {
            return
        }
    });
}

findParenthesis(equation);
console.log(nestedElements);