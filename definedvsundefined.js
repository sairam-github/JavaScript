console.log(a);
console.log(b);

var a = 10;
b = 20;


// Output:

// [Running] node "c:\Learning\JavaScript\definedvsundefined.js"
// undefined
// c:\Learning\JavaScript\definedvsundefined.js:2
// console.log(b);
//             ^

// ReferenceError: b is not defined
//     at Object.<anonymous> (c:\Learning\JavaScript\definedvsundefined.js:2:13)
//     at Module._compile (internal/modules/cjs/loader.js:776:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
//     at Module.load (internal/modules/cjs/loader.js:653:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:585:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)
//     at startup (internal/bootstrap/node.js:283:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)

// [Done] exited with code=1 in 0.181 seconds