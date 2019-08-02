function checkScope() {
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

function checkScope_1() {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

function checkScope_2() {
    // let i = "function scope";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

function checkScope_3() {
    // let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is:", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

checkScope();
checkScope_1();
checkScope_2();
checkScope_3();