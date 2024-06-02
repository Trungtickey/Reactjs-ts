"use strict";
// Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra loại công việc và phương thức abstract calculateSalary để tính lương khi làm công việc đó.
// Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. Lớp PartimeJob có thêm thuộc tính workingHour.
// Xây dựng phương thức printType để in ra loại công việc trong lớp cha, phương thức calculateSalary để tính lương công việc. Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.
class Job {
    constructor(type) {
        this.type = type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.printType = () => {
            return `việc: ${this.type}`;
        };
        this.calculateSalary = () => {
            let luong = this.workingHour * 30;
            return luong;
        };
        this.workingHour = workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
        this.printType = () => {
            return `việc: ${this.type}`;
        };
        this.calculateSalary = () => {
            return 100000;
        };
    }
}
let Trung = new PartimeJob("Banh bóng", 200);
let Tickey = new FulltimeJob("Bóng Banh");
console.log(Trung.printType(), Trung.calculateSalary());
console.log(Tickey.printType(), Tickey.calculateSalary());
