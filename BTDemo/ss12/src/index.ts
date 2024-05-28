// Tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// ví dụ: Con người - chiều cao, cân nặng, tiếng nói
// Phương thức trừu tượng : là phương thức không có phần thân

// interface - giao diện tính năng

interface IShape{
    // Khai báo các thuộc tính trừu tượng bên trong
    chuVi: number;
    dienTich: number; 
    // Phương thức trừu tượng
    tinhChuVi: ()=> number;
    tinhDienTich: ()=> number;
}
// Tạo một lớp kế thừa và triển khai các phương thức trừu tượng
class Square implements IShape{
    chuVi: number=0;
    dienTich: number=0;
    canh: number;
    //Constructor
    constructor(_canh:number){
        // this.chuVi=_chuVi;
        // this.dienTich=_dienTich;
        this.canh=_canh;
    }
    // Phải triển khai toàn bộ các phương thức trừu tượng của interface
    tinhChuVi= () =>{
        return this.canh * 4;
    };
    tinhDienTich= () =>{
        return this.canh * this.canh;
    };
    getInfo=()=>{

    }
} 
let squareOne: IShape = new Square(5);

// abstrast class - lớp trừu tượng

abstract class Animals{
   // Các phương thức và thuộc tính bình thường
   species: string;
   sex: boolean;
   color: string;
   constructor(_species: string, _sex: boolean, _color: string){
    this.species=_species;
    this.sex=_sex;
    this.color=_color;
   }
   getInfo(){
    return 'Animal [Species: ${this.species} | Sex: ${this.sex} | Color: ${this.color}] '
   }
   // Các phương thức trừu tượng
   abstract makeSound : ()=> string; 
}

class Dog extends Animals{
    constructor(_species: string, _sex: boolean, _color: string){
        super(_species,_sex,_color);
    }

    // triển khai toàn bộ phương thức trừu tượng
    makeSound =()=>{
        return "Go Go Go Go Go";
    }
}

let dogOne : Animals = new Dog("Tâm Anh", true, "white-black");
console.log("Con Tâm Anh kêu :", dogOne.makeSound());

class Cat extends Animals{
    constructor(_species: string, _sex: boolean, _color: string){
        super(_species,_sex,_color);
    }

    // triển khai toàn bộ phương thức trừu tượng
    makeSound =()=>{
        return "Meo Meo Meo Meo Meo";
    }
}
let catOne : Animals = new Cat("Tâm Anh", true, "black-red");
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