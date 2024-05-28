"use strict";
// Tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// ví dụ: Con người - chiều cao, cân nặng, tiếng nói
// Phương thức trừu tượng : là phương thức không có phần thân
// Tạo một lớp kế thừa và triển khai các phương thức trừu tượng
class Square {
    //Constructor
    constructor(_canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        // Phải triển khai toàn bộ các phương thức trừu tượng của interface
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.getInfo = () => {
        };
        // this.chuVi=_chuVi;
        // this.dienTich=_dienTich;
        this.canh = _canh;
    }
}
let squareOne = new Square(5);
// abstrast class - lớp trừu tượng
class Animals {
    constructor(_species, _sex, _color) {
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfo() {
        return 'Animal [Species: ${this.species} | Sex: ${this.sex} | Color: ${this.color}] ';
    }
}
class Dog extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        // triển khai toàn bộ phương thức trừu tượng
        this.makeSound = () => {
            return "Go Go Go Go Go";
        };
    }
}
let dogOne = new Dog("Tâm Anh", true, "white-black");
console.log("Con Tâm Anh kêu :", dogOne.makeSound());
class Cat extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        // triển khai toàn bộ phương thức trừu tượng
        this.makeSound = () => {
            return "Meo Meo Meo Meo Meo";
        };
    }
}
let catOne = new Cat("Tâm Anh", true, "black-red");
console.log("Mèo Tâm Anh hú :", catOne.makeSound());
// Phân biệt giữa Interface và Abstract class
// cùng có tính trừu tượng
// Khác nhau:
// interface: + hỗ trợ đa kế thừa
//+ không mang các thuộc tính cụ thể
//+ Không cho phép khai báo các phương thức có phần thân
//+ Không yêu cầu từ khóa abstract
// abstract class: + Không hỗ trợ đa kế thừa
//+ các thuộc tính có giác trị cụ thể
//+ Có thể khai báo các phương thức có phần thân
//+ Bắt buộc khai báo từ khóa abstract
