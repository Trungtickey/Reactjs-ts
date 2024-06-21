// Định nghĩa abstract class có thuộc tính name, phương thức getName và phương thức abstract getSize
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cơx của hình trong lớp con. 

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
  
  let ra: Shapee = new Rectangle("kha", 10, 20);
  console.log(ra.getSize() + ra.getName());