var myGlobal = 10;

function f1() {
    var varGlobal = 20;

    // not using var makes this variable global
    // varGlobal = 20;
}

function f2() {
    var output = "";

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n";
    }

    if (typeof varGlobal != "undefined") {
        output += "varGlobal: " + varGlobal;
    }

    console.log(output);
}

f1();
f2();