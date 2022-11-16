const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


function reducer(arr) {
    const answer = arr.reduce(
        (previousValue, currentValue, index, arr) => {
            if (typeof arr[index] === 'string') {
                console.log('this is an operator');
                switch(arr[index]) {
                    case "+":
                        console.log('Plus. This is at index ', index);
                        previousValue + currentValue;
                        break;
                    case "-":
                        console.log('minus');
                        previousValue - currentValue
                        break;
                    case "/":
                        console.log('divide');
                        previousValue / currentValue
                        break;
                    case "*":
                        console.log('Multiply');
                        previousValue * currentValue
                        break;
                    case "**":
                        console.log('Power');
                        Math.pow(previousValue, currentValue)
                        break;
                }
            }
        }
    )
}

reducer([12, "+", 3, "+", 3])