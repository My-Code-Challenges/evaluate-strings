/*
Given a string i.e '1+2(3*4)/5'
Find the contents between the two parenthesis and generate a new string with it's contents
*/

export default function findParenthesis(arr) {
    console.log(arr);
    let parenthesisExpression = [];
    return arr.forEach((element, index) => {
        if(element === "(") {
            let openingParenthesis = index;
            let closingParenthesis = arr.findIndex((el) => el === ")")
            parenthesisExpression = arr.slice(openingParenthesis + 1, closingParenthesis)
        }
        else {
            return
        }
        console.log(parenthesisExpression);
        return parenthesisExpression;
    });
}

findParenthesis([ '11', '+', '(', '2', '+', '5', ')', '/', '3', '**', '4', '-', '2' ])