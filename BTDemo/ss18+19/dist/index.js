"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Tổng quan về: decorator là 1 bộ trang trí cho phép can thiệp vào đối tượng trong quá trình chạy(runtime)
// Bản chất decorator là một kiểu dữ liệu function
// function logger(){
//     return function(target : any){
//         console.log(target);
//     }
// }
// Class decorator : Function = (constructor : any) => { }
// Lưu ý: Nếu class decorator trả về môt class mới thì đối tượng sẽ bị ghi đè bởi class đó
// function wrapper (name: string){
//     return class extends target{ // annonymous class: lớp ẩn danh
//         address: string = "Nghệ An";
//         id: number =0;
//         name: string="";
//         age: number=0; // Ghi đè các thuộc tính đã có
//         // constructor(id: number, name: string, age: number){
//         //     super(id,name,age);
//         // }
//         // greet(){
//         //     return `hello bạn ní ${this.name}`;
//         // }
//     }
// }
function logger(target) {
    // console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.address = "Nghệ An";
            this.id = 0;
            this.name = "";
            this.age = 0; // Ghi đè các thuộc tính đã có
            // constructor(id: number, name: string, age: number){
            //     super(id,name,age);
            // }
            // greet(){
            //     return `hello bạn ní ${this.name}`;
            // }
        }
    };
}
// Method decorator
function follow(target, propertykey, descriptor) {
    console.log(target); // tham chiếu của hàm
    console.log(propertykey); // tên hàm
    console.log(descriptor.value); // Bộ chỉnh sửa hàm
    descriptor.value = function () {
        console.log(`ghi đè hàm greet`);
        console.log(`Hello ní có id = ${this}`);
    };
}
function beforeSum(target, propertykey, descriptor) {
    let value = descriptor.value; // Lấy ra giá trị cũ
    // Thay thế hàm sum bằng 1 hàm khác
    descriptor.value = function (...args) {
        // log trước khi tính
        console.log(...args);
        return value(...args);
    };
}
// Property decorator: đánh dấu trên thuộc tính
// Accessor decorator (người giám sát, kiểm soát)
// parameter decorator (tham số)
function x2(target, propertykey) {
    console.log(target);
    console.log(propertykey);
    Object.defineProperty(target, propertykey, {
        get() {
            return this[propertykey] * 2;
        },
        set(value) {
            this[propertykey] = value * 2;
        },
    });
    // reflection: Kĩ thuật can thiệp trực tiếp vào đối tượng thông qua tên
}
// Tạo 1 hàm pow return về decorator method
function pow(value) {
    // Khai báo các biến như các thuộc tính
    return function (target, propertykey, descriptor) {
        //    console.log(target);
        //    console.log(propertykey);
        //    console.log(descriptor);
        let old = descriptor.value;
        descriptor.value = function (...args) {
            return Math.pow(old(...args), value);
        };
    };
}
// Decorator Factories: kĩ thuật truyền tham số cho 1 decorator thông qua khia niệm closure 
let Student = class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greet() {
        return `hello bạn ní ${this.name}`;
    }
    // Tính tổng
    sum(a, b) {
        return a + b;
    }
    luyThua(a) {
        return a;
    }
    // Sử dụng từ khóa get / set
    get id1() {
        console.log("gọi get");
        return this.id;
    }
    set id1(id) {
        console.log("gọi set");
        this.id = id;
    }
};
__decorate([
    x2
], Student.prototype, "age", void 0);
__decorate([
    follow
], Student.prototype, "greet", null);
__decorate([
    beforeSum
], Student.prototype, "sum", null);
__decorate([
    pow(2)
], Student.prototype, "luyThua", null);
Student = __decorate([
    logger
], Student);
let student = new Student(1, "Trung", 20);
console.log(student);
student.greet();
console.log(student.sum(1, 2));
student.id1 = 10;
console.log(student.age);
console.log(student.luyThua(5)); // 25
