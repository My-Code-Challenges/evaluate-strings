let output = [];
let level = 0;
let arr = ["(", "(", ")", "(", "(", "(", ")", ")", ")", ")"]
for (let [index, bracket] of arr.entries()) {
    if (bracket === '(') {
        level++;
    }
    output.push({value: bracket, index, level});
    if (bracket === ')') {
        level--;
    }
}

console.log(output);