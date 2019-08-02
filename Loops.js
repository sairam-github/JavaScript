// While loop

var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);


for (var i = 0; i < 5; i++) {
    myArray.pop();
}

console.log("Length of myArray is: " + myArray.length);