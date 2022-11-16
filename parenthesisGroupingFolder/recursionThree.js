/*
So yesterday I posted this on recursion and I got a tip that I should move my array out of the global name space and inside the function. However when I do this it throws an error and the whole function breaks. Here’s yesterdays post

I’ve just been looking through the forum for similar discussions and found this which seems to hit the nail on the head

Here is my recent attempt. I tried to wrap the parenthesisIndexArray in the parent function and pass it down to the child function, but passing empty arrays throws up an undefined error.

I can see there is scoping issue around leaving the parenthesisIndexArray global, but I really don’t know how to implement it any other way… Your thoughts and advice would be great.
*/

function findParenthesisGroupings(arr, index, level) {
    let parenthesisIndexArray = [];

    function recursiveCall(arr, index, level, parenthesisIndexArray){
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
        return recursiveCall(arr, index+1, level, parenthesisIndexArray)
        }
    }
    let parenthesisGroupingArray = recursiveCall(arr, index, level, parenthesisIndexArray)

return parenthesisGroupingArray
}


let myArray = ["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"];
findParenthesisGroupings(myArray, 0, 0)