const sairam = ['👶','👦', '👨', '👴'];

// string will be mutated
sairam.reverse();
// console.log(sairam);


// const originalArray = ['a', 'b', 'c', 'd', 'e'];
const originalArray = [1, 2, 3, 4, 5];

// 1. original array will not be mutated
// const newArray = originalArray.slice().reverse();

// 2. original array will not be mutated
// const newArray = [...originalArray].reverse();

// 3. original array will not be mutated
// const newArray = originalArray.reduce((accumulator, value) => {
//     return [value, ...accumulator]
//   }, []);

// 4. original array will not be mutated
const newArray = originalArray.reduceRight((accumulator, value) => {
    console.log(value);
    return [...accumulator, value]
  }, []);

console.log(originalArray);
console.log(newArray);



