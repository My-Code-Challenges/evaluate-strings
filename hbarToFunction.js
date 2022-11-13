

function assembleArray(arr) {

    let operatorRegex = /\(|\)|\*|\+|\-|\//g;
    
    let cnt = 0;
    let operatorBoolean = false;
    let arrayLength = arr.length;

    let newArr = [];
    let newNum = '';
    
    for (let i=0; i <= arr.length - 1; i++) {
        if (arr[i].match(operatorRegex)) {
          if ( operatorBoolean ) {
                        // previous character was also an operator
                        // is the prev char identical to this one?
                        if ( arr[i-1] == arr[i] ) {
                        newNum += arr[i];
                        } else {
                        // save the previous operator before saving this one
                        newArr[cnt] = newNum;
                        newNum = arr[i];
                        cnt++;
                        }
          } else {
            // save the newNum so far before inc count
            newArr[cnt] = newNum;
            cnt++;
            newNum = arr[i];
          }
          operatorBoolean = true;
        } 
        else {
          if (operatorBoolean) {
            // previous char was operator so save it before inc cnt
            newArr[cnt] = newNum;
            newNum = arr[i];
            cnt++;
          } else {
            // previous char was a digit so continue to append
            newNum += arr[i];
          }
          operatorBoolean = false;
        }
      }
      // save the last found number
    newArr[cnt] = newNum;
      return newArr
}

console.log(assembleArray(['1','+','(','2',')','/','3','*','*','4','4','4','-', "2"]));