var testObj = {
    "first Name" : "Sairam",
    "lastName" : "Madem",
    "zipCode" : 02169,
};

// Shallow copy
// var newObj = testObj;

// Deep copy
var newObj = JSON.parse(JSON.stringify(testObj));

// bracket notation must be used if a property has space in it.
newObj["first Name"] = "Sai";
newObj.lastName = "M";
newObj.zipCode = 98052;

// Adding a new property at runtime
newObj.Age = 34;

// Adding a new property at runtime using bracket notation
newObj["Country"] = "USA";

console.log(JSON.stringify(testObj));
console.log(JSON.stringify(newObj));