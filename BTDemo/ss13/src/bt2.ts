// Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra loại công việc và phương thức abstract calculateSalary để tính lương khi làm công việc đó.

// Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. Lớp PartimeJob có thêm thuộc tính workingHour.

// Xây dựng phương thức printType để in ra loại công việc trong lớp cha, phương thức calculateSalary để tính lương công việc. Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.

abstract class Job {
    type: string;
    constructor(type: string) {
      this.type = type;
    }
    abstract printType: () => string;
    abstract calculateSalary: () => number;
  }
  
  class PartimeJob extends Job {
    workingHour: number;
    constructor(type: string, workingHour: number) {
      super(type);
      this.workingHour = workingHour;
    }
    printType = () => {
      return `việc: ${this.type}`;
    };
    calculateSalary = () => {
      let luong = this.workingHour * 30;
      return luong;
    };
  }
  class FulltimeJob extends Job {
    constructor(type: string) {
      super(type);
    }
    printType = () => {
      return `việc: ${this.type}`;
    };
    calculateSalary = () => {
      return 100000;
    };
  }
  let kha2: Job = new PartimeJob("Chơi", 200);
  let ha2: Job = new FulltimeJob("game");
  console.log(kha2.printType(), kha2.calculateSalary());
  console.log(ha2.printType(), ha2.calculateSalary());