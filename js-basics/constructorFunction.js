function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const c1 = new Circle(1);
c1.draw();

console.log()