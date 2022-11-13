
function assembleArray(arr) {
    let globalArray = [];

    let exponent;

    let numberRegex = /\d+/;
    let operatorRegex = /\+|\-|\//;
    
    arr.map((el, i) => {
        if(el.match(numberRegex)){
            console.log(el);
            globalArray = [...globalArray, ...el];
        }
        if (el.match(operatorRegex)) {
            globalArray = [...globalArray, ...el];
        };
        if (el === "*"
        && el[i-1] === "*") {
            console.log('still recorded');
            exponent = arr.slice(i, i+2).join('');
            globalArray = [...globalArray, exponent]

        }
    })
    return globalArray;
}

// insertOperators(["1", "1", "+", "6"], ["11", "6"]); ✅
// insertOperators(["1","2", "-", "3"], ["12", "3"]); ✅
// insertOperators(["6","0", "/", "3"], ["60", "3"]); ✅
// insertOperators(["5","1", "*", "2"], ["51", "2"]); ✅
// insertOperators(["2", "*", "*", "3"], ["2", "3"]) ✅
// insertOperators(["2", "*", "*", "3", "+", "5"], ["2", "3", "5"])
assembleArray(["2", "-", "1", "+", "3"],["2", "1", "3"]);
assembleArray(["2", "*", "*", "3", "+", "5", "-", "2"], ["2", "3", "5", "2"])