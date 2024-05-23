// 4 đặc điểm của OOP
//1. Tính kế thừa: Lớp kế thừa lớp - từ khóa extends 
//2. Tính đóng gói: 
//- Các thuộc tính phải được khai báo bằng private
// - Các phương thức nên để public
//3. Tính đa hình: 
//Một phương thức có nhiều cách triển khai: Thường đi với phương thức 
//4. Tính trừu tượng

class Shape{
    chuVi: number;
    dienTich: number;
    constructor(_chuVi: number, _dienTich: number){
        this.chuVi = _chuVi;
        this.dienTich = _dienTich;
    }
    showInfo(){
        console.log("Đây là hình học");
    }
}

// Lớp hình vuông kế thừa lớp hình học

class Square extends Shape{
    canh : number;
    constructor(_canh: number){
        super(0,0)
        this.canh = _canh;
    }
    // override là từ khóa chú thích đây là phương thức ghi đè phương thức cảu lớp cha
    override showInfo(): void {
        console.log("Đây là hình vuông")
    }
    calArea(){
      this.dienTich = this.canh * this.canh;
    }
}

// Lớp hình vuông kế thừa lớp hình học

class Triangle extends Shape{
    a : number;
    b : number;
    c : number;
    constructor(_a: number, _b: number, _c: number){
        super(0,0)
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
    // override là từ khóa chú thích đây là phương thức ghi đè phương thức cảu lớp cha
    override showInfo(): void {
        console.log("Đây là hình Tam Giác")
    }
}

// Tạo đối tượng hình học
let shape : Shape = new Shape(0,0);
let square : Shape = new Square(5);
let triangle : Shape = new Triangle(3,4,5);

// Gọi phương thước showInfo()
// Tính đa hình
shape.showInfo();
square.showInfo();
triangle.showInfo();

// Chú ý 
// Kiểu khai báo: Kiểu dữ liệu lúc khai báo biến
// Kiểu thực tế: Kiểu khởi tạo đối tượng

// Muốn gọi phương thức calArea() của đối tượng square
// C1: let squareCopy = <Square> square;
//    squareCopy.calArea()
//C2:
let squareCopy = square as Square;
squareCopy.calArea()
console.log(squareCopy.dienTich);