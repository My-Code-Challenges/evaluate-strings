export default function assemble(arr) {

    let operatorRegex = /\(|\)|\*|\+|\-|\//g;
    let count = 0;
    let operatorBoolean = false;
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
                        newArr[count] = newNum;
                        newNum = arr[i];
                        count++;
                        }
          } else {
            // save the newNum so far before inc count
            newArr[count] = newNum;
            newNum = arr[i];
            count++;
          }
          operatorBoolean = true;
        } 
        else {
          if (operatorBoolean) {
            // previous char was operator so save it before inc count
            newArr[count] = newNum;
            newNum = arr[i];
            count++;
          } else {
            // previous char was a digit so continue to append
            newNum += arr[i];
          }
          operatorBoolean = false;
        }
      }
      // save the last found number
    newArr[count] = newNum;
      return newArr
}


console.log(assemble(['1','+','(','2',')','/','3','*','*','4','4','4','-', "2"]));