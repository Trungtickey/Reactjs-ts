"use strict";
// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.
class Vehicle3 {
    constructor(speed) {
        this.speedUp = (n) => {
            this.speed += n;
            return `tốc độ tăng: ${this.speed}`;
        };
        this.slowDown = (n) => {
            this.speed -= n;
            return `tốc độ giảm: ${this.speed}`;
        };
        this.stop = () => {
            return ` dừng lại: ${this.speed}`;
        };
        this.speed = speed;
    }
}
let xe = new Vehicle3(100);
console.log(xe.speedUp(20)); // Output: Toc độ tăng lên 70 km/h.
console.log(xe.slowDown(100)); // Output: Toc độ giảm xuống 60 km/h.
console.log(xe.stop());
