let operatorRegex = /\(|\)|\*|\+|\-|\//g;
let newArr = [];
let newNum = '';
let cnt = 0;
let opToggle = false;
let charArray=['1','+','(','2',')','/','3','*','*','4','4','4','-','0'];
for (let i=0; i < charArray.length; i++) {
  if (charArray[i].match(operatorRegex)) {
    if ( opToggle ) {
      // previous character was also an operator
      // is the prev char identical to this one?
      if ( charArray[i-1] == charArray[i] ) {
        newNum += charArray[i];
      } else {
        // save the previous operator before saving this one
        newArr[cnt] = newNum;
        newNum = charArray[i];
        cnt++;
      }
    } else {
      // save the newNum so far before inc count
      newArr[cnt] = newNum;
      cnt++;
      newNum = charArray[i];
    }
    opToggle = true;
  } else {
    if (opToggle) {
      // previous char was operator so save it before inc cnt
      newArr[cnt] = newNum;
      newNum = charArray[i];
      cnt++;
    } else {
      // previous char was a digit so continue to append
      newNum += charArray[i];
    }
    opToggle = false;
  }
}
// save the last found number
newArr[cnt] = newNum;
console.log(newArr);

