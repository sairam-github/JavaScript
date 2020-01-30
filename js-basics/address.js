
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for(let key in address) {
        console.log(`Key: ${key}, Value: ${address[key]}`);
    }
}

showAddress(address);