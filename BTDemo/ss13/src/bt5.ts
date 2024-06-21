// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.

// Xây dựng các phương thức để thay đổi thuộc tính speed. Tạo ra 1 thực thể từ lớp Vehicle và gọi các phương thức, sau mỗi phương thức thì in thông tin để kiểm tra kết quả.

interface changeSpeed {
    speedUp: (n: number) => string;
    slowDown: (n: number) => string;
    stop: () => string;
  }
  class Vehicle3 implements changeSpeed {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  
    speedUp = (n: number): string => {
      this.speed += n;
      return `tốc độ tăng: ${this.speed}`;
    };
    slowDown = (n: number): string => {
      this.speed -= n;
      return `tốc độ giảm: ${this.speed}`;
    };
    stop = () => {
      return ` dừng lại: ${this.speed}`;
    };
  }
  
  let xe: changeSpeed = new Vehicle3(100);
  console.log(xe.speedUp(20)); // Output: Toc độ tăng lên 70 km/h.
  console.log(xe.slowDown(100)); // Output: Toc độ giảm xuống 60 km/h.
  console.log(xe.stop());