myStr = 'mom';
myArray = myStr.split('');
console.log(myArray);
myReversedArray = myArray.reverse();
console.log(myReversedArray);
myReversedStr = myReversedArray.join('');
console.log(myReversedStr);

console.log(myStr === myReversedStr);
