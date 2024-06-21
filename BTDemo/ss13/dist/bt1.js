"use strict";
// Định nghĩa abstract class có thuộc tính name, phương thức getName và phương thức abstract getSize
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cơx của hình trong lớp con. 
class Shapee {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return ` |tên: ${this.name}`;
    }
}
class Rectangle extends Shapee {
    constructor(name, width, height) {
        super(name);
        this.getSize = () => {
            super.getName();
            return `Width: ${this.width}, Height: ${this.height}`;
        };
        this.width = width;
        this.height = height;
    }
}
let ra = new Rectangle("kha", 10, 20);
console.log(ra.getSize() + ra.getName());
