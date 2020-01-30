function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const c1 = createCircle(1);
console.log(c1.radius)
c1.draw();

const c2 = createCircle(2);
c2.draw();