// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by both 3 and 5 => input
// input is not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'Not a number';
    }

    let remainder3 = input % 3;
    let remainder5 = input % 5;

    if ((remainder3 === 0) && (remainder5 === 0)) {
        return 'FizzBuzz';
    }
    else if (remainder3 !== 0 && remainder5 !== 0) {
        return input;
    }
    else if (remainder3 == 0) {
        return 'Fizz';
    }
    else {
        return 'Buzz';
    }
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz('a'));