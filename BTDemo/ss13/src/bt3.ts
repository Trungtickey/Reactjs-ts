// Tạo ra interface Geometry chứa 2 phương thức calculateArea và calculatePerimeter. Định nghĩa lớp Circle có thuộc tính private radius, lớp Rectangle có 2 thuộc tính private width, height. 2 lớp đều implements interface Geometry. Xây dựng 2 phương thức có trong interface cho 2 hàm đó.
interface Geometry {
    calculateArea: () => string;
    calculatePerimeter: () => string;
  }
  
  class Circle implements Geometry {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculateArea = (): string => {
      const area = Math.PI * this.radius * this.radius;
      return `Area of the circle: ${area.toFixed(2)}`;
    };
  
    calculatePerimeter = (): string => {
      const perimeter = 2 * Math.PI * this.radius;
      return `Perimeter of the circle: ${perimeter.toFixed(2)}`;
    };
  }
  
  class Rectangle1 implements Geometry {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea = (): string => {
      const area = this.width * this.height;
      return `Area of the rectangle: ${area}`;
    };
  
    calculatePerimeter = (): string => {
      const perimeter = 2 * (this.width + this.height);
      return `Perimeter of the rectangle: ${perimeter}`;
    };
  }
  
  const circle1 = new Circle(5);
  console.log(circle1.calculateArea());
  console.log(circle1.calculatePerimeter());
  
  const rectangle = new Rectangle1(10, 20);
  console.log(rectangle.calculateArea());
  console.log(rectangle.calculatePerimeter());