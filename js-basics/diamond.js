function printDiamod(limit) {
    if(limit <= 0) {
        throw new Error('Invalid limit. Limit must be a positive number.');
    }
    else if(limit == 1) {
        console.log('*');
    }
    else if(limit == 2) {
        console.log('**');
    }
    else {
        let lower = 0;
        let upper = 0;
        let flag = false;
        if (limit % 2 == 0) {
            lower = Math.floor(limit/2) - 1;
            upper = Math.floor(limit/2);
        }
        else {
            lower = upper = Math.floor(limit/2);
        }
        for(let i = 0; i < limit; i++) {
            let outString = '';
            for(let j = 0; j < limit; j++) {
                if ((j >= lower) && (j <= upper)) {
                    outString += '*';
                }
                else {
                    outString += ' ';
                }
            }

            console.log(outString);

            if (lower == 0) {
                flag = !flag;
            }

            if (!flag) {
                lower -= 1;
                upper += 1;
            }
            else {
                lower += 1;
                upper -= 1;
            }
        }
    }
}

printDiamod(31);