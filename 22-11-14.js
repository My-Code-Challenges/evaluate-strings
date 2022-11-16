import mathKey from "./mathKey.js";

export function convertToNumbers(arr) {
    let stringToNumberArray = arr;
    let numberRegex = /\d+/g
    return stringToNumberArray.map((num, i) => {
        if(num.match(numberRegex)) {
            stringToNumberArray[i] = parseInt(num)
        }
        return stringToNumberArray
    })
}

convertToNumbers(["4", "+", "3"])

// ✅

export function router(arr) {
    let current = 0;
    if (typeof arr[0] === 'number') {
        current = arr[0]
    }

    let operatorRegex = /\(|\)|\*|\+|\-|\//g;
    for (let [index, el] of arr.entries()) {
        if (typeof el === 'string') {
            switch(el) {
                case "+":
                    current = mathKey["+"](current, arr[index+1])
                    break;
                case "-":
                    console.log('minus');
                    current = mathKey["-"](current, arr[index+1])
                    break;
                case "/":
                    console.log('divide');
                    current = mathKey["/"](current, arr[index+1])
                    break;
                case "*":
                    console.log('Multiply');
                    break;
                case "**":
                    console.log('Power');
                    break;
            }
        }
    }
    console.log(current);
}

router([12, "/", 4])

/*
In order of priority and complexity
Exponents (L-R)

Division (L-R)
Multiplication (L-R and R-L)

Subtraction (L-R)
Addition (L-R and R-L)
*/