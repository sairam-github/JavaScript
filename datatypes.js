function x() {
    y = 1;
    var z = 2;
}

x();

console.log(y); // 1
console.log(z);  // throws a ReferenceError exception because z is local to x()