import assemble from './assembleArray.js';
import findParenthesis from './findParenthesis.js';
import mathKey from './mathKey.js';

let nestedElements = [];

// findParenthesis(["11","+","(","2","+","5",")","/","3","**","4","-","2",])

function evaluate(stringEquation) {
    console.log(stringEquation);
    // baseline variables
    let parenthesisExpression = [];

    // convert string to array
    let arr = stringEquation.split('');
    
    // Assemble Array
    let assembledArray = assemble(arr)

    /*
    After array is assembled
    You need to somehow simplify [number, operator, number] patterns
    */

    // Find Parenthesis and slice value to new array
    parenthesisExpression = findParenthesis(assembledArray);
    console.log(parenthesisExpression);

    // Use mathKey object to solve parenthesis expression [...arr, "(1+2)"] should be replaced by [...arr, 3]
    


    // remember PEDMAS
}

evaluate('11+(2+5)/3**4-2')
