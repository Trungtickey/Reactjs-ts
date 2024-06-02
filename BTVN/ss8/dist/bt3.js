"use strict";
function calculateArea(shape) {
    switch (shape.kind) {
        case "square":
            return shape.sideLength * shape.sideLength;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            throw new Error("Invalid shape");
    }
}
// Ví dụ sử dụng:
const square = { kind: "square", sideLength: 2 };
const circle = { kind: "circle", radius: 1 };
console.log(calculateArea(square)); // Output: 4
console.log(calculateArea(circle)); // Output: π (approximately 3.14159)
