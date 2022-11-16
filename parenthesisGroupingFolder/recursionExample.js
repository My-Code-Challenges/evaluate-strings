/*
The solution of one big problem is dependent on the values of smaller problems inside

Base Case
Recursive Call
*/

let parenthesisIndexArray = [];

function recursionBaby(arr, length, balance, openCount, closeCount) {
    // Base case

    if(balance === 0 && length <= 0) {
        if(arr[length] === "(") {
            openCount++;
            parenthesisIndexArray.push({
                value: arr[length],
                index: length,
                openCount: openCount,
                balance
            })
            balance--;
        }
        else if(arr[length] === ")") {
            balance++;
            closeCount++
            parenthesisIndexArray.push({
                value: arr[length],
                index: length,
                closeCount: closeCount,
                balance
            })
        }
        else {
            console.log("balance didn't change");
        }
    return parenthesisIndexArray;
    }
    else {
        if(arr[length] === "(") {
            openCount++;
            parenthesisIndexArray.push({
                value: arr[length],
                index: length,
                openCount: openCount,
                balance
            })
            balance --;
        }
        else if(arr[length] === ")") {
            balance++
            closeCount++
            parenthesisIndexArray.push({
                value: arr[length],
                index: length,
                closeCount: closeCount,
                balance
            })
        }
    return recursionBaby(arr, length-1, balance, openCount, closeCount)
    }
}

    let myArray = ["(", "(", ")", ")"];

    /* 
    count 1 length 3 )
    count 2 length 2 )
    count 1 length 1 (
    count 0 length 0 (
    */

let mySecondArray = ["(", "(", ")", "(", ")", ")"];

/*
count 1 length 5
count 2 length 4
count 1 length 3
count 2 length 2
count 1 length 1
count 0 length 0

If the parenthesis is at the first level the left brack will be at count 0
if the parenthesis is nested one level the count will be at 1
*/

// let myThirdArray = ["(", "(", ")", "(", "(", ")", ")", ")"];
let myFourthArray = ["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"];

// (a(b/c)+(d(e-f(g**2)-h)/i)j)
// (2(6/3)+(4(5-2(4**2)-7)/2)3)

let numberArray = ["2", "+", "5", "**", "3", "(", "57", "/", "3", ")"]

/*
count 1 length 7
count 2 length 6
count 3 length 5
count 2 length 4
count 1 length 3
count 2 length 2
count 1 length 1
count 0 length 0
*/

recursionBaby(myFourthArray, myFourthArray.length-1, 0, 0, 0)
// recursionBaby(numberArray, numberArray.length-1, 0, 0, 0)
console.log(parenthesisIndexArray);
