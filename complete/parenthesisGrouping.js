let arr = ["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"]


function defineParenthesisGroupings(arr) {
    let output = [];
    let level = 0;
    for (let [index, bracket] of arr.entries()) {
        if (bracket === '(') {
            level++;
        }
        output.push({value: bracket, index, level});
        if (bracket === ')') {
            level--;
        }
    }
    return output
}

console.log(defineParenthesisGroupings(["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"]));