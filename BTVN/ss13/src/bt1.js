"use strict";
// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con.
// Định nghĩa abstract class Shape 
class Shape {
    constructor(_name) {
        this.name = _name;
    }
}
// Định nghĩa lớp Rectangle kế thừa từ Shape 
class Rectangle extends Shape {
    constructor(_name, _width, _height) {
        super(_name);
        this.getName = () => {
            return `Name: ${this.name}`;
        };
        this.width = _width;
        this.height = _height;
    }
}
let rectangle1 = new Rectangle("Tâm Anh", 20, 30);
console.log("Em nhỏ Tâm Anh cỡ :", rectangle1.getName());
