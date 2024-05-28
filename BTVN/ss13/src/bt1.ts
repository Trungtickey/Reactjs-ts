// // Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.

// // Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.

// // Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con.
// // Định nghĩa abstract class Shape 

// abstract class Shape{
//     name: string;
//     constructor(_name:string){
//         this.name=_name;
//     }
    
//     // Các phương thức trừu tượng
//     getName(){
//         return `|Tên: ${this.name}`;
//     }
// } 
// // Định nghĩa lớp Rectangle kế thừa từ Shape 
//  class Rectangle extends Shape {
//     width: number;
//     height: number;
//     constructor(_name: string, _width: number, _height: number){
//         super(_name);
//         this.getSize = () =>{
//             super.getName();
//             return `Width: ${this.width}, Height: ${this.height}`
//         };
//         this.width=_width;
//         this.height=_height;
//     }
    
// }


// let rectangle1 = new Rectangle("Trung, 20, 30")
// console.log(rectangle1.getSize() + rectangle1.getName);
abstract class Shapee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getName() {
      return ` |tên: ${this.name}`;
    }
    abstract getSize: () => string;
  }
  
  class Rectangle extends Shapee {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number) {
      super(name);
      this.width = width;
      this.height = height;
    }
    getSize = () => {
      super.getName();
      return `Width: ${this.width}, Height: ${this.height}`;
    };
  }
  
  let ra: Shapee = new Rectangle("Trung", 100, 1000);
  console.log(ra.getSize() + ra.getName());