// Falsy values:
//undefined
// null
// ''
// false
// 0
// NaN

function countTruthy(array) {
    let count = 0;
    for (const value of array) {
        if (value) {
            count++;
        }

        return count;
    }
}