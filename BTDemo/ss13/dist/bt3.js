"use strict";
class Circle {
    constructor(radius) {
        this.calculateArea = () => {
            const area = Math.PI * this.radius * this.radius;
            return `Area of the circle: ${area.toFixed(2)}`;
        };
        this.calculatePerimeter = () => {
            const perimeter = 2 * Math.PI * this.radius;
            return `Perimeter of the circle: ${perimeter.toFixed(2)}`;
        };
        this.radius = radius;
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.calculateArea = () => {
            const area = this.width * this.height;
            return `Area of the rectangle: ${area}`;
        };
        this.calculatePerimeter = () => {
            const perimeter = 2 * (this.width + this.height);
            return `Perimeter of the rectangle: ${perimeter}`;
        };
        this.width = width;
        this.height = height;
    }
}
const circle1 = new Circle(5);
console.log(circle1.calculateArea());
console.log(circle1.calculatePerimeter());
const rectangle = new Rectangle1(10, 20);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
