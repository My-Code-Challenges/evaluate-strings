/*
Given an array the following code will check char[i] === "*". If true it will check that char[i + 1] === "*". If true it will slice the 2 elements and put them in a new array value, then i will subtract by 2 to accomodate.

See the following for a good example
https://stackoverflow.com/a/67220449/15592981

*/

import mathKey from './mathKey.js'

let equationArray = ['2', '*', '*', '3'];
let exponentArray = [];


function checkForExponent(arr) {

    let base;
    let exponent;
    
    for(let i = 0; i < arr.length; i++) {
        base = i - 1;
        exponent = i + 2;
        if (arr[i] === '*' && arr[i + 1] === '*') {
            console.log(mathKey["**"](arr[base], arr[exponent]))
        }
    }

}

console.log(checkForExponent(equationArray));
console.log(exponentArray);
