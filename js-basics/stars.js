function showStars(rows) {
    let maxPattern = '';
    for (let row = 0; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }

        console.log(pattern);
        maxPattern = pattern;
    }

    while(maxPattern) {
        maxPattern = maxPattern.slice(0, -1);
        console.log(maxPattern);
    }
}

showStars(10);