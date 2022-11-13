function evaluate(evaluation) {
    let evaluationArray = convertToArray(evaluation);

    if(checkOpeningParenthesis(evaluationArray) === -1) {
        console.log("parenthesis not found");
        loop(evaluation);
    }
    else {
        console.log("parenthesis found");
        let startSlice = checkOpeningParenthesis(evaluationArray) + 1;
        let endSlice = findClosingParenthesis(evaluationArray);
        let priorityArray = slice(evaluationArray, startSlice, endSlice);
        loop(evaluation)
        console.log(evaluationArray);
        console.log(priorityArray);
    }
}

function convertToArray(string) {
    return string.split('')
}

function checkOpeningParenthesis(array) {
    return array.indexOf("(")
}
function findClosingParenthesis(array) {
    return array.indexOf(")")
}

function slice(array, start, end) {
    return array.slice(start, end)
}

function loop(array) {
    for(let i = 0; i < array.length; i++) {
        checkForExponent(array, i)
    }
}

function checkForExponent(array, i) {
    if(array[i] === "*"
        && array[i + 1] === "*") {
        let power = array[i + 2]
            console.log("It's an exponent!");
            console.log(Math.pow(array[i-1], power));
            console.log(array[i-1]);
            console.log(array[i+2]);
            console.log(Math.pow(array[i-1], power));
    }
    else if (array[i] === "*"
        && array[i - 1] !== "*"
        && array[i + 1] !== "*") {
            console.log("It's a multiplication!");
    } 
}

evaluate("(2**3)")
