let array = ['12', '(', '10', '+', '5', ')']

console.log(parseInt('+'));
console.log(parseInt('3'));
console.log(parseInt('3'));
console.log(typeof parseInt('3') == 'number');

function updateValue(arr) {
    let numberOfParenthesis = 0
    let openingParenthesisArray = [];
    // find all opening parenthesis
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "(") {
            numberOfParenthesis++;
            openingParenthesisArray.push(i)
        }
    }
    console.log(openingParenthesisArray);
}

updateValue(array)