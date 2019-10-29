const movie = {
    title: 'Ragasthalam',
    releaseYear: 2018,
    rating: 4.8
};

console.log(showProperties(movie));

function showProperties(movie) {
    let count = 0;
    for (const prop in movie) {
        if (typeof movie[prop] === 'String') {
            count++;
        }
    }
    return count;
}