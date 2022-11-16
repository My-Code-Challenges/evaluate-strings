/*
The solution of one big problem is dependent on the values of smaller problems inside

Base Case
Recursive Call
*/

let parenthesisIndexArray = [];

function recursionBaby(arr, index, level) {
    // Base case

    if(level === 0 && index >= arr.length) {
        if(arr[index] === "(") {
            level++;
            parenthesisIndexArray.push({
                value: arr[index],
                index,
                level
            })
        }
        else if(arr[index] === ")") {
            parenthesisIndexArray.push({
                value: arr[index],
                index,
                level
            })
            level--;
        }
        else {
            console.log("level didn't change");
        }
    return parenthesisIndexArray;
    }
    else {
        if(arr[index] === "(") {
            level++;
            parenthesisIndexArray.push({
                value: arr[index],
                index,
                level
            })
        }
        else if(arr[index] === ")") {
            parenthesisIndexArray.push({
                value: arr[index],
                index,
                level
            })
            level--
        }
    return recursionBaby(arr, index+1, level)
    }
}





let myFourthArray = ["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"];
let numberArray = ["2", "+", "5", "**", "3", "(", "57", "/", "3", ")"]


recursionBaby(myFourthArray, 0, 0)
// recursionBaby(numberArray, numberArray.length-1, 0, 0, 0)
console.log(parenthesisIndexArray);
